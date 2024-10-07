// ユーザー関連の型定義
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  avatar?: string;
  preferences: UserPreferences;
}

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

export interface UserPreferences {
  theme: "light" | "dark";
  language: "ja" | "en" | "fr";
  notifications: boolean;
}

// 投稿関連の型定義
export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  tags: string[];
  status: PostStatus;
  likes: number;
  comments: Comment[];
}

export enum PostStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
  ARCHIVED = "archived",
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

// タスク関連の型定義
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: Date;
  assigneeId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum TaskStatus {
  TODO = "todo",
  IN_PROGRESS = "in_progress",
  DONE = "done",
}

export enum TaskPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

// プロジェクト関連の型定義
export interface Project {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  members: string[]; // ユーザーIDの配列
  tasks: Task[];
  createdAt: Date;
  updatedAt: Date;
}

// ファイル関連の型定義
export interface File {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  uploaderId: string;
  createdAt: Date;
}

// 通知関連の型定義
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  content: string;
  isRead: boolean;
  createdAt: Date;
}

export enum NotificationType {
  SYSTEM = "system",
  TASK = "task",
  MESSAGE = "message",
}
