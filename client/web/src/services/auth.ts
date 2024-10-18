import { supabase } from "@/lib/supabase";
import { User } from "@/types/user";
import { User as AuthUser, OAuthResponse } from "@supabase/supabase-js";

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}

export const authService = {
  async loginWithEmail(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new AuthError(error.message);
    await this.fetchUserData(data.user.id);
    return data;
  },

  async signupWithEmail(
    email: string,
    password: string,
    familyName: string,
    givenName: string
  ) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw new AuthError(error.message);

    if (data.user) {
      await this.createUserProfile(data.user.id, email, familyName, givenName);
    }

    return data;
  },

  async loginWithGoogle(): Promise<OAuthResponse> {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/signup`,
      },
    });
    if (error) throw new AuthError(error.message);
    return { data, error };
  },

  async handleGoogleSignIn(user: AuthUser) {
    console.log("Full user object:", user);
    console.log("User metadata:", user.user_metadata);

    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", user.id)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("Error fetching user data:", error);
      throw new AuthError(error.message);
    }

    if (!data) {
      console.log("Creating new user profile...");
      let givenName = "";
      let familyName = "";

      if (user.user_metadata?.full_name) {
        const nameParts = user.user_metadata.full_name.split(" ");
        if (nameParts.length >= 2) {
          // 最後の部分を苗字として扱い、残りを名前として扱う
          familyName = nameParts.pop() || "";
          givenName = nameParts.join(" ");
        } else {
          // 名前が1つの部分しかない場合、そのまま名前として扱う
          givenName = user.user_metadata.full_name;
        }
      }

      await this.createUserProfile(
        user.id,
        user.email ?? "",
        familyName,
        givenName
      );
    } else {
      console.log("User profile already exists:", data);
    }

    return this.fetchUserData(user.id);
  },

  async createUserProfile(
    id: string,
    email: string,
    family_name: string,
    given_name: string
  ) {
    const { error } = await supabase
      .from("users")
      .insert({ id, email, family_name, given_name })
      .select()
      .single();

    if (error) throw new AuthError(error.message);
  },

  async fetchUserData(id: string): Promise<User> {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", id)
      .single();

    if (error) throw new AuthError(error.message);
    return data as User;
  },

  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new AuthError(error.message);
  },

  async getCurrentUser() {
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
};
