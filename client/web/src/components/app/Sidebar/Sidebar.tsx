import React from "react";
import SidebarNavigation from "@/components/app/SidebarNavigation/SidebarNavigation";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-100 h-full flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <SidebarNavigation />
      </div>
    </div>
  );
};

export default Sidebar;
