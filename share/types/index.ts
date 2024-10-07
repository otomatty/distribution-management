// models.tsからのエクスポート
export * from "./models";

// api.tsからのエクスポート
export * from "./api";

// errors.tsからのエクスポート
export * from "./errors";
// auth.tsからのエクスポート
export * from "./auth";

// 追加の型定義（必要に応じて）

// ジェネリックな型
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

// ユーティリティ型
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

// 関数型
export type AsyncFunction<T = void> = () => Promise<T>;
export type ErrorCallback = (error: Error) => void;

// イベント関連の型
export interface EventHandler<T = any> {
  (event: T): void;
}

export interface Disposable {
  dispose(): void;
}

// 状態管理関連の型
export type Reducer<S, A> = (state: S, action: A) => S;

export interface Action<T = any> {
  type: string;
  payload?: T;
}

// APIクライアント関連の型
export interface ApiClientConfig {
  baseUrl: string;
  timeout?: number;
  headers?: Record<string, string>;
}

// 設定関連の型
export interface AppConfig {
  apiUrl: string;
  environment: "development" | "production" | "test";
  version: string;
  features: Record<string, boolean>;
  supabase: {
    url: string;
    anonKey: string;
  };
}

// テーマ関連の型
export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  error: string;
}

export interface Theme {
  colors: ThemeColors;
  fontSizes: Record<string, string>;
  spacing: Record<string, string>;
}

// i18n関連の型
export type TranslationKey = string;
export type TranslationValues = Record<string, string | number>;

export interface I18nConfig {
  defaultLanguage: string;
  supportedLanguages: string[];
}

// ストレージ関連の型
export interface StorageItem<T> {
  key: string;
  value: T;
  expiresAt?: number;
}

// ルーティング関連の型
export interface Route {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  private?: boolean;
}

// フォーム関連の型
export interface FormField<T = string> {
  name: string;
  label: string;
  type: string;
  value: T;
  required?: boolean;
  validate?: (value: T) => string | null;
}

export interface FormState<T = Record<string, any>> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
}
