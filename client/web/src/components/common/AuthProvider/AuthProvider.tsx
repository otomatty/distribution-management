import React, { useEffect, ReactNode } from 'react';
import { useSetAtom, useAtomValue } from 'jotai';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { userAtom, isAuthenticatedAtom } from '../../../atoms/authAtom';
import { supabase } from '../../../lib/supabase';
import { getCurrentUser } from '../../../utils/auth';

// 認証が必要なパスのリスト
const authRequiredPaths = ['/webapp/dashboard', '/webapp/profile', '/webapp/settings'];

// 未認証ユーザーがアクセスできないパスのリスト
const unauthenticatedPaths = ['/login', '/signup'];

interface AuthProviderProps {
  children: ReactNode;
  requireAuth?: boolean;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children, requireAuth = false }) => {
  const setUser = useSetAtom(userAtom);
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);

      // リダイレクトロジック
      if (currentUser) {
        if (unauthenticatedPaths.includes(location.pathname)) {
          navigate('/webapp/dashboard');
        }
      } else {
        if (authRequiredPaths.includes(location.pathname)) {
          navigate('/login');
        }
      }
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN') {
        setUser(session?.user ?? null);
        navigate('/webapp/dashboard');
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        navigate('/');
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setUser, navigate, location]);

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
