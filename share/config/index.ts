import { AppConfig } from "../types";

// 環境変数から設定値を取得
const getEnvVariable = (key: string, defaultValue?: string): string => {
  const value = process.env[`REACT_APP_${key}`] || defaultValue;
  if (value === undefined) {
    throw new Error(`環境変数 ${key} が設定されていません。`);
  }
  return value;
};

// 設定オブジェクトの作成
export const config: AppConfig = {
  // エンドポイントを設定する
  apiUrl: getEnvVariable("API_URL", "https://api.example.com"),
  environment: getEnvVariable("NODE_ENV", "development") as
    | "development"
    | "production"
    | "test",
  version: getEnvVariable("VERSION", "0.1.0"),
  features: {
    newDashboard: getEnvVariable("FEATURE_NEW_DASHBOARD", "false") === "true",
    betaFeatures: getEnvVariable("FEATURE_BETA", "false") === "true",
  },
  supabase: {
    url: getEnvVariable("SUPABASE_URL"),
    anonKey: getEnvVariable("SUPABASE_ANON_KEY"),
  },
};

// 環境に応じた設定の上書き
if (config.environment === "development") {
  config.apiUrl = "http://localhost:3000";
  // 開発環境特有の設定をここに追加
}

// 設定の凍結（不変性の確保）
Object.freeze(config);

// デバッグモードの設定
export const DEBUG = config.environment === "development";

// ロギング関数
export const log = (...args: any[]): void => {
  if (DEBUG) {
    console.log(...args);
  }
};

// エラーロギング関数
export const logError = (...args: any[]): void => {
  if (DEBUG) {
    console.error(...args);
  }
  // 本番環境では、ここにエラー追跡サービス（例：Sentry）への送信ロジックを追加
};

// 設定値の取得関数
export const getConfig = <K extends keyof AppConfig>(key: K): AppConfig[K] => {
  return config[key];
};

// フィーチャーフラグのチェック関数
export const isFeatureEnabled = (
  featureName: keyof AppConfig["features"]
): boolean => {
  return config.features[featureName] || false;
};

// APIエンドポイントの生成関数
export const getApiEndpoint = (path: string): string => {
  return `${config.apiUrl}/${path}`.replace(/([^:]\/)\/+/g, "$1");
};

// 環境チェック関数
export const isDevelopment = (): boolean =>
  config.environment === "development";
export const isProduction = (): boolean => config.environment === "production";
export const isTest = (): boolean => config.environment === "test";

// バージョン情報の取得関数
export const getVersion = (): string => config.version;

// 設定のエクスポート
export default config;
