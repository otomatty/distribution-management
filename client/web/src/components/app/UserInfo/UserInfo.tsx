import React, { useState } from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";

const UserInfo: React.FC = () => {
  const [userState] = useAtom(userAtom);
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  if (!userState.user) return null;

  const user = userState.user;
  const fullName = `${user.family_name} ${user.given_name}`;

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("ログアウト中にエラーが発生しました:", error);
      // ここでエラーメッセージを表示するなどのエラーハンドリングを行うことができます
    }
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
          <Avatar>
            <AvatarImage src={user.avatar_url} alt={fullName} />
            <AvatarFallback>{fullName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{fullName}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem asChild>
          <Link to="/webapp/profile" className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>プロフィール</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          className="text-red-600 hover:text-red-700 hover:bg-red-100"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>ログアウト</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserInfo;
