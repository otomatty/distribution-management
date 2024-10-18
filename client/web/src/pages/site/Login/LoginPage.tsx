import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authService, AuthError } from "@/services/auth";
import { supabase } from "@/lib/supabase";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN") {
          if (session?.user) {
            try {
              await authService.handleGoogleSignIn(session.user);
              navigate("/dashboard");
            } catch (error) {
              console.error("Google認証後のエラー:", error);
              alert("認証後の処理中にエラーが発生しました。");
            }
          }
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authService.loginWithEmail(email, password);
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof AuthError) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await authService.loginWithGoogle();
      if (error) throw error;
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Google認証に失敗しました");
      }
    } catch (error) {
      if (error instanceof AuthError) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">ログイン</CardTitle>
        <CardDescription>
          アカウント情報を入力してログインしてください。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">パスワード</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            ログイン
          </Button>
        </form>
        <div className="mt-4">
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full"
          >
            Googleでログイン
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-center w-full">
          アカウントをお持ちでない方は{" "}
          <Link to="/signup" className="text-primary hover:underline">
            新規登録
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
