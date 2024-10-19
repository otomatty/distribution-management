import React from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";
import { Bell, Settings } from "lucide-react";

export const Header: React.FC = () => {
  const [userState] = useAtom(userAtom);

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">
          アプリケーション名
        </h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <Bell size={20} />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <Settings size={20} />
          </button>
          <div className="text-sm text-gray-700">
            {userState.user
              ? `${userState.user.family_name} ${userState.user.given_name}`
              : "ゲスト"}
          </div>
        </div>
      </div>
    </header>
  );
};
