import React from 'react';
import { useSetAtom } from 'jotai';
import { userAtom } from '../../../atoms/authAtom';
import { signOut } from '../../../utils/auth';

export const Logout: React.FC = () => {
  const setUser = useSetAtom(userAtom);

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error('ログアウトエラー:', error);
    }
  };

  return <button onClick={handleLogout}>ログアウト</button>;
};
