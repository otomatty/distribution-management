import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/app/Header/Header";
import Sidebar from "@/components/app/Sidebar/Sidebar";

const AppLayout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
