import { User as SupabaseUser } from "@supabase/supabase-js";

export type SystemRole = "system_admin" | "regular_user";
export type OrganizationRole = "admin" | "manager" | "employee";

export interface ModulePermission {
  read: boolean;
  write: boolean;
  delete: boolean;
  admin: boolean;
}

export interface User extends SupabaseUser {
  // 基本情報
  username: string;
  family_name: string;
  given_name: string;
  email: string;
  phone_number?: string;
  avatar_url?: string;

  // 組織情報
  organization_id: string;
  department_id: string;
  position_id: string;
  employee_number?: string;
  hire_date?: string;
  manager_id?: string;

  // 権限とスキル
  system_role: SystemRole;
  organization_role: OrganizationRole;
  permissions: {
    [module: string]: ModulePermission;
  };
  skills: string[];

  // アクセス可能なモジュール
  accessible_modules: string[];

  // プロジェクト情報
  project_ids: string[];

  // 財務情報
  cost_center_id?: string;
  salary_grade?: string;

  // システム情報
  last_login_at?: string;
  created_at: string;
  updated_at: string;
  account_status: "active" | "inactive" | "on_leave" | "terminated";

  // 設定
  language_preference: string;
  region_setting: string;
  user_preferences: {
    [key: string]: string | number | boolean;
  };

  // その他
  bio?: string;
}
