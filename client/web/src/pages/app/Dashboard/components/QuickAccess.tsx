import React from "react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface QuickAccessItem {
  id: string;
  label: string;
  icon: LucideIcon;
  onClick: () => void;
}

interface QuickAccessProps {
  items: QuickAccessItem[];
}

export const QuickAccess: React.FC<QuickAccessProps> = ({ items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">クイックアクセス</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <Button
            key={item.id}
            variant="outline"
            className="flex flex-col items-center justify-center h-24"
            onClick={item.onClick}
          >
            <item.icon className="h-6 w-6 mb-2" />
            <span>{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
