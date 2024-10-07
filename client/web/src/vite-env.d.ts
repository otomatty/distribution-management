/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_NODE_ENV: string;
  // 他の環境変数...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
