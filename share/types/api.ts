import { User, Post, Task, Project, File, Notification } from "./models";

// 共通のAPIレスポンス型
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}

export interface ApiError {
  code: string;
  message: string;
}

// ページネーション用の型
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// クエリパラメータの型
export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

// ユーザー関連のAPI型
export interface CreateUserParams {
  email: string;
  password: string;
  name: string;
}

export interface UpdateUserParams {
  name?: string;
  avatar?: string;
  preferences?: Partial<User["preferences"]>;
}

// 投稿関連のAPI型
export interface CreatePostParams {
  title: string;
  content: string;
  tags?: string[];
}

export interface UpdatePostParams {
  title?: string;
  content?: string;
  tags?: string[];
  status?: Post["status"];
}

// タスク関連のAPI型
export interface CreateTaskParams {
  title: string;
  description?: string;
  status: Task["status"];
  priority: Task["priority"];
  dueDate?: Date;
  assigneeId?: string;
}

export interface UpdateTaskParams {
  title?: string;
  description?: string;
  status?: Task["status"];
  priority?: Task["priority"];
  dueDate?: Date;
  assigneeId?: string;
}

// プロジェクト関連のAPI型
export interface CreateProjectParams {
  name: string;
  description?: string;
  members?: string[];
}

export interface UpdateProjectParams {
  name?: string;
  description?: string;
  members?: string[];
}

// ファイルアップロード関連の型
export interface FileUploadResponse {
  file: File;
}

// 認証関連の型
export interface LoginParams {
  email: string;
  password: string;
}
