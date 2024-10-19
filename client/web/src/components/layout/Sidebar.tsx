import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  DollarSign,
  Users,
  ShoppingCart,
  UserPlus,
  FileText,
  Calendar,
} from "lucide-react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <Link
              to="/dashboard"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <Home className="mr-2" size={18} />
              ダッシュボード
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/finance"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <DollarSign className="mr-2" size={18} />
              財務
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/hr"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <Users className="mr-2" size={18} />
              人事
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/distribution"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <ShoppingCart className="mr-2" size={18} />
              流通
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/crm"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <UserPlus className="mr-2" size={18} />
              CRM
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/cms"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <FileText className="mr-2" size={18} />
              CMS
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/schedule"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <Calendar className="mr-2" size={18} />
              スケジュール
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
