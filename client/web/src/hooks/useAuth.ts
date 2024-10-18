import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [, setUser] = useAtom(userAtom);

  const logout = async () => {
    try {
      // バックエンドAPIを呼び出してセッションを終了する
      await fetch("/api/logout", { method: "POST" });

      // ローカルストレージからユーザー認証情報を削除する
      localStorage.removeItem("token");

      // アプリケーションの状態をリセットする
      setUser(null);

      // ユーザーをログインページにリダイレクトする
      navigate("/login");
    } catch (error) {
      console.error("ログアウト中にエラーが発生しました:", error);
    }
  };

  return { logout };
};
