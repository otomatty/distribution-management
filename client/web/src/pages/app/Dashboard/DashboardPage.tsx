import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService, AuthError } from "@/services/auth";
import { User } from "@/types/user";

const DashboardPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
        } else {
          // ユーザーが認証されていない場合、ログインページにリダイレクト
          navigate("/login");
        }
      } catch (error) {
        if (error instanceof AuthError) {
          console.error("認証エラー:", error.message);
        } else {
          console.error("予期せぬエラーが発生しました");
        }
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  if (!user) {
    return <div>読み込み中...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ダッシュボード</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          ようこそ、{user.givenName} {user.familyName}さん
        </h2>
        <p className="mb-2">メールアドレス: {user.email}</p>
        <button
          onClick={() => authService.logout().then(() => navigate("/login"))}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          ログアウト
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
