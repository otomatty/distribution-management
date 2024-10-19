import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";
import { DashboardLayout } from "./components/DashboardLayout";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { QuickAccess } from "./components/QuickAccess";
import { NotificationCenter } from "./components/NotificationCenter";
import { KPIWidget } from "./components/KPIWidget";
import { RecentActivity } from "./components/RecentActivity";
import { TaskList } from "./components/TaskList";
import { Calendar } from "./components/Calendar";
import { NewsFeed } from "./components/NewsFeed";
import {
  DashboardConfig,
  getUserDashboardConfig,
  updateUserDashboardConfig,
} from "@/services/dashboardService";
import { FileText, Users, ShoppingCart, BarChart } from "lucide-react";
import { QuickAccessItem } from "@/types/dashboard";

const DashboardPage: React.FC = () => {
  const [userState] = useAtom(userAtom);
  const [dashboardConfig, setDashboardConfig] =
    useState<DashboardConfig | null>(null);

  useEffect(() => {
    const fetchDashboardConfig = async () => {
      if (userState.user) {
        const config = await getUserDashboardConfig(userState.user.id);
        setDashboardConfig(config);
      }
    };
    fetchDashboardConfig();
  }, [userState.user]);

  const handleConfigUpdate = async (newConfig: Partial<DashboardConfig>) => {
    if (userState.user && dashboardConfig) {
      const updatedConfig = { ...dashboardConfig, ...newConfig };
      await updateUserDashboardConfig(userState.user.id, updatedConfig);
      setDashboardConfig(updatedConfig);
    }
  };

  if (!userState.user || !dashboardConfig) return <div>Loading...</div>;

  // 苗字と名前を組み合わせてフルネームを作成
  const fullName =
    userState.user.family_name && userState.user.given_name
      ? `${userState.user.family_name} ${userState.user.given_name}`
      : userState.user.username || userState.user.email || "ユーザー";

  const quickAccessItems: QuickAccessItem[] = [
    { id: "1", label: "財務", icon: BarChart, onClick: () => {} },
    { id: "2", label: "人事", icon: Users, onClick: () => {} },
    { id: "3", label: "流通", icon: ShoppingCart, onClick: () => {} },
    { id: "4", label: "レポート", icon: FileText, onClick: () => {} },
  ];

  return (
    <DashboardLayout
      config={dashboardConfig}
      onConfigUpdate={handleConfigUpdate}
    >
      <WelcomeMessage userName={fullName} />
      <QuickAccess items={quickAccessItems} />
      <NotificationCenter notifications={dashboardConfig.notifications} />
      <KPIWidget
        title="売上高"
        value={1234567}
        unit="円"
        change={5.2}
        changeType="increase"
      />
      <KPIWidget
        title="新規顧客数"
        value={42}
        unit="人"
        change={2.1}
        changeType="decrease"
      />
      <RecentActivity activities={dashboardConfig.recentActivities} />
      <TaskList tasks={dashboardConfig.tasks} />
      <Calendar events={dashboardConfig.events} />
      <NewsFeed news={dashboardConfig.news} />
    </DashboardLayout>
  );
};

export default DashboardPage;
