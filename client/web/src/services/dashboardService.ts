import { supabase } from "@/lib/supabase";

export interface DashboardConfig {
  layout: string[];
  notifications: Notification[];
  recentActivities: ActivityItem[];
  tasks: Task[];
  events: Event[];
  news: NewsItem[];
}

interface Notification {
  id: string;
  message: string;
  type: "info" | "warning" | "error";
  timestamp: string;
}

interface ActivityItem {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
}

interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
}

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
}

export async function getUserDashboardConfig(
  userId: string
): Promise<DashboardConfig> {
  // ここでは、サンプルデータを返し���いますが、実際にはSupabaseからデータを取得する処理を実装します
  const { data, error } = await supabase
    .from("dashboard_configs")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error("Error fetching dashboard config:", error);
    throw error;
  }

  return data || getDefaultDashboardConfig();
}

export async function updateUserDashboardConfig(
  userId: string,
  newConfig: Partial<DashboardConfig>
): Promise<void> {
  // ここでは、コンソールにログを出力するだけですが、実際にはSupabaseにデータを保存する処理を実装します
  console.log("Updating dashboard config for user:", userId, newConfig);

  const { error } = await supabase
    .from("dashboard_configs")
    .upsert({ user_id: userId, ...newConfig });

  if (error) {
    console.error("Error updating dashboard config:", error);
    throw error;
  }
}

function getDefaultDashboardConfig(): DashboardConfig {
  return {
    layout: [
      "welcome",
      "quickAccess",
      "notifications",
      "kpi1",
      "kpi2",
      "recentActivity",
      "tasks",
      "calendar",
      "news",
    ],
    notifications: [
      {
        id: "1",
        message: "新しいタスクが割り当てられました",
        type: "info",
        timestamp: "2023-04-20 10:00",
      },
      {
        id: "2",
        message: "重要な会議が1時間後に開始され���す",
        type: "warning",
        timestamp: "2023-04-20 11:30",
      },
    ],
    recentActivities: [
      {
        id: "1",
        user: "山田太郎",
        action: "更新",
        target: "販売レポート",
        timestamp: "2023-04-20 09:45",
      },
      {
        id: "2",
        user: "佐藤花子",
        action: "作成",
        target: "新規顧客データ",
        timestamp: "2023-04-20 10:15",
      },
    ],
    tasks: [
      {
        id: "1",
        title: "週次レポートの作成",
        completed: false,
        dueDate: "2023-04-22",
      },
      {
        id: "2",
        title: "クライアントミーティングの準備",
        completed: true,
        dueDate: "2023-04-21",
      },
    ],
    events: [
      {
        id: "1",
        title: "チームミーティング",
        date: "2023-04-21",
        time: "14:00",
      },
      {
        id: "2",
        title: "プロジェクト締め切り",
        date: "2023-04-25",
        time: "18:00",
      },
    ],
    news: [
      {
        id: "1",
        title: "新製品発表",
        summary: "当社の新製品が好評を博しています",
        date: "2023-04-19",
      },
      {
        id: "2",
        title: "四半期決算報告",
        summary: "売上が前年比10%増加しました",
        date: "2023-04-18",
      },
    ],
  };
}
