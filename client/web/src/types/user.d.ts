export interface User {
  email: string;
  family_name: string;
  given_name: string;
  avatar_url?: string; // アバター画像のURLを追加
}
// ユーザーのロールと所属する組織については後から追加する
