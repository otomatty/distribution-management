# 統合型 ERP

このプロジェクトは、React、Supabase、Hono on Cloudflare Workers、Tauri を使用したクロスプラットフォーム対応の統合型 ERP です。

## 技術スタック

- フロントエンド: React
- バックエンド: Supabase, Hono on Cloudflare Workers
- クロスプラットフォーム: Tauri
- データベース: Supabase
- スタイリング: TailwindCSS, Shadcn/UI

## 開発

### Web アプリケーション開発

```bash
# 開発モードでクライアントアプリケーションを起動
npm run client:dev
```

ブラウザで [http://localhost:5173](http://localhost:5173) を開いてアプリケーションを確認できます。

### Cloudflare Workers の開発

```bash
# Cloudflare Workersの開発サーバーを起動
npm run workers:dev
```

### Tauri アプリケーションの開発

```bash
# Tauriアプリケーションを開発モードで起動
npm run tauri dev
```

## ビルド

### Web アプリケーションのビルド

```bash
# プロダクション用にクライアントアプリケーションをビルド
npm run client:build
```

ビルドされたファイルは `dist/client` フォルダに出力されます。

### Tauri アプリケーションのビルド

```bash
# Tauriアプリケーションをビルド
npm run tauri build
```

ビルドされたアプリケーションは `src-tauri/target/release` フォルダに出力されます。

## テスト

```bash
# テストの実行
npm run test
```

## デプロイ

- Web アプリケーション: Cloudflare Pages を使用してデプロイできます。
- Cloudflare Workers: `wrangler publish` コマンドを使用してデプロイします。
- デスクトップアプリケーション: Tauri でビルドしたアプリケーションを配布します。

## プロジェクト構造

```
.
├── client/             # Solid.jsクライアントアプリケーション
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   ├── public/
│   └── index.html
├── server/            # Cloudflare Workers (Hono)
├── src-tauri/          # Tauriアプリケーション
├── supabase/           # Supabase関連ファイル
└── package.json
```

## 詳細情報

- [Solid.js ドキュメント](https://solidjs.com)
- [Supabase ドキュメント](https://supabase.io/docs)
- [Hono ドキュメント](https://hono.dev)
- [Vanilla Extract ドキュメント](https://vanilla-extract.style/)
- [Kobalte ドキュメント](https://kobalte.dev/docs/core/overview/introduction/)
- [Cloudflare Workers ドキュメント](https://developers.cloudflare.com/workers/)
- [Tauri ドキュメント](https://tauri.app)

## サポート

問題や質問がある場合は、Issue を作成してください。

## ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) の下で公開されています。
