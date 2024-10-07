// APIエンドポイント
export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://api.example.com";
export const API_VERSION = "v1";

// 認証関連
export const TOKEN_KEY = "auth_token";
export const REFRESH_TOKEN_KEY = "refresh_token";
export const TOKEN_EXPIRY_KEY = "token_expiry";

// ページネーション
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

// ファイルアップロード
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "application/pdf",
];

// 日付フォーマット
export const DATE_FORMAT = "YYYY-MM-DD";
export const TIME_FORMAT = "HH:mm:ss";
export const DATETIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

// ロケール
export const DEFAULT_LOCALE = "ja";
export const SUPPORTED_LOCALES = ["ja", "en", "fr"] as const;

// テーマ
export const THEME_KEY = "app_theme";
export const DEFAULT_THEME = "light";

// バリデーション
export const MIN_PASSWORD_LENGTH = 8;
export const MAX_NAME_LENGTH = 50;
export const MAX_TITLE_LENGTH = 100;
export const MAX_CONTENT_LENGTH = 5000;

// タスク関連
export const TASK_PRIORITIES = ["low", "medium", "high"] as const;
export const TASK_STATUSES = ["todo", "in_progress", "done"] as const;

// ユーザーロール
export const USER_ROLES = ["admin", "user", "guest"] as const;

// エラーメッセージ
export const ERROR_MESSAGES = {
  NETWORK_ERROR:
    "ネットワークエラーが発生しました。インターネット接続を確認してください。",
  UNAUTHORIZED: "認証に失敗しました。再度ログインしてください。",
  FORBIDDEN: "このアクションを実行する権限がありません。",
  NOT_FOUND: "要求されたリソースが見つかりません。",
  INTERNAL_SERVER_ERROR:
    "サーバーエラーが発生しました。しばらくしてから再試行してください。",
};

// アニメーション
export const ANIMATION_DURATION = 300; // ミリ秒

// ブレークポイント
export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

// キャッシュ
export const CACHE_TTL = 60 * 60 * 1000; // 1時間（ミリ秒）

// リクエストタイムアウト
export const REQUEST_TIMEOUT = 10000; // 10秒

// リトライ設定
export const MAX_RETRY_ATTEMPTS = 3;
export const RETRY_DELAY = 1000; // 1秒

// WebSocket
export const WS_RECONNECT_INTERVAL = 5000; // 5秒

// セッション
export const SESSION_TIMEOUT = 30 * 60 * 1000; // 30分（ミリ秒）

// 正規表現パターン
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const URL_REGEX =
  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

// フィーチャーフラグ
export const FEATURES = {
  NEW_DASHBOARD: process.env.REACT_APP_FEATURE_NEW_DASHBOARD === "true",
  BETA_FEATURES: process.env.REACT_APP_FEATURE_BETA === "true",
};

// アプリケーションバージョン
export const APP_VERSION = process.env.REACT_APP_VERSION || "0.1.0";

// ソーシャルメディアリンク
export const SOCIAL_LINKS = {
  TWITTER: "https://twitter.com/example",
  FACEBOOK: "https://facebook.com/example",
  INSTAGRAM: "https://instagram.com/example",
};

// サポート情報
export const SUPPORT_EMAIL = "support@example.com";
export const SUPPORT_PHONE = "+81 03-1234-5678";
