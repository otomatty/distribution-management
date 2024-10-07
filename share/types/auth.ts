import { User, Session, AuthError, AuthResponse } from "@supabase/supabase-js";

export interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<AuthResponse>;
  signIn: (email: string, password: string) => Promise<AuthResponse>;
  signOut: () => Promise<{ error: AuthError | null }>;
  resendConfirmationEmail: (
    email: string
  ) => Promise<{ error: AuthError | null }>;
}

export interface EmailProvider {
  name: string;
  url: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
