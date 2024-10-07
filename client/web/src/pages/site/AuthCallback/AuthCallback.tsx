import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../lib/supabase';
import { useSetAtom } from 'jotai';
import { userAtom } from '../../../atoms/authAtom';

const AuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setUser(session.user);
        navigate('/webapp/dashboard'); // ログイン後のリダイレクト先
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate, setUser]);

  return <div>認証中...</div>;
};

export default AuthCallback;
