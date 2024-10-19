import { supabase } from "@/lib/supabase";
import { User } from "@/types/user";
import { Session, User as SupabaseUser } from "@supabase/supabase-js";

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}

export interface AuthResult {
  user: User | null;
  session: Session | null;
}

export const authService = {
  async loginWithEmail(email: string, password: string): Promise<AuthResult> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new AuthError(error.message);
    const userData = await this.fetchUserData(data.user.id);
    return { user: userData, session: data.session };
  },

  async signupWithEmail(
    email: string,
    password: string,
    familyName: string,
    givenName: string
  ): Promise<AuthResult> {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw new AuthError(error.message);

    let userData: User | null = null;
    if (data.user) {
      userData = await this.createUserProfile(
        data.user.id,
        email,
        familyName,
        givenName
      );
    }

    return { user: userData, session: data.session };
  },

  async handleGoogleSignIn(supabaseUser: SupabaseUser): Promise<AuthResult> {
    let userData = await this.fetchUserData(supabaseUser.id);

    if (!userData) {
      userData = await this.createUserProfile(
        supabaseUser.id,
        supabaseUser.email || "",
        supabaseUser.user_metadata.family_name || "",
        supabaseUser.user_metadata.given_name || ""
      );
    }

    const { data: sessionData } = await supabase.auth.getSession();

    return { user: userData, session: sessionData.session };
  },

  async createUserProfile(
    id: string,
    email: string,
    family_name: string,
    given_name: string
  ): Promise<User> {
    const { data, error } = await supabase
      .from("users")
      .insert({ id, email, family_name, given_name })
      .select()
      .single();

    if (error) throw new AuthError(error.message);
    return data as User;
  },

  async fetchUserData(id: string): Promise<User | null> {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return null;
      }
      throw new AuthError(error.message);
    }
    return data as User;
  },

  async updateUserProfile(profile: Partial<User>): Promise<User> {
    const { data, error } = await supabase
      .from("users")
      .update(profile)
      .eq("id", profile.id)
      .select()
      .single();

    if (error) throw new AuthError(error.message);
    return data as User;
  },

  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new AuthError(error.message);
  },

  async getCurrentUser(): Promise<User | null> {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) throw new AuthError(error.message);
    if (user) {
      return await this.fetchUserData(user.id);
    }
    return null;
  },

  async loginWithGoogle(): Promise<{
    data: { url: string } | null;
    error: Error | null;
  }> {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      return { data: null, error };
    }

    return { data, error: null };
  },
};
