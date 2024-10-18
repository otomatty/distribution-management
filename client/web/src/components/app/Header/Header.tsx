import React from "react";
import UserInfo from "@/components/app/UserInfo/UserInfo";
import { useAuth } from "@/hooks/useAuth";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";

const Header: React.FC = () => {
  const { logout } = useAuth();
  const [user] = useAtom(userAtom);

  if (!user) {
    return null; // ユーザーがログインしていない場合は何も表示しない
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gray-900">在庫管理システム</h1>
          <UserInfo user={user} onLogout={logout} />
        </div>
      </div>
    </header>
  );
};

export default Header;
