import React, { createContext, useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { AuthContextType } from '../../../../share/types/auth';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) console.log('Error fetching session:', error);
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    };

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    setData();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const value: AuthContextType = {
    user,
    session,
    loading,
    signUp: (email: string, password: string) => supabase.auth.signUp({ email, password }),
    signIn: (email: string, password: string) => supabase.auth.signInWithPassword({ email, password }),
    signOut: () => supabase.auth.signOut(),
    resendConfirmationEmail: (email: string) =>
      supabase.auth.resend({
        type: 'signup',
        email: email,
      }),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
