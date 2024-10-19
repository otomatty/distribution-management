import React from "react";
import UserInfo from "@/components/app/UserInfo/UserInfo";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center">
          <UserInfo />
        </div>
      </div>
    </header>
  );
};

export default Header;
