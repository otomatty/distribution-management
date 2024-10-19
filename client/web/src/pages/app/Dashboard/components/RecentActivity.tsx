import React from "react";
import { Activity } from "lucide-react";

interface ActivityItem {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
}

interface RecentActivityProps {
  activities: ActivityItem[];
}

export const RecentActivity: React.FC<RecentActivityProps> = ({
  activities,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">最近のアクティビティ</h2>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start">
            <Activity className="mr-2 h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-800">
                <span className="font-medium">{activity.user}</span> が
                <span className="font-medium">{activity.target}</span> を
                {activity.action}しました
              </p>
              <p className="text-xs text-gray-500">{activity.timestamp}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
