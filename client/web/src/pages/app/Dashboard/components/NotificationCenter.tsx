import React from "react";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: string;
  message: string;
  type: "info" | "warning" | "error";
  timestamp: string;
}

interface NotificationCenterProps {
  notifications: Notification[];
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  notifications,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">通知</h2>
        <Badge variant="secondary">{notifications.length}</Badge>
      </div>
      <ul className="space-y-2">
        {notifications.map((notification) => (
          <li key={notification.id} className="flex items-start">
            <Bell className="mr-2 h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-800">{notification.message}</p>
              <p className="text-xs text-gray-500">{notification.timestamp}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
