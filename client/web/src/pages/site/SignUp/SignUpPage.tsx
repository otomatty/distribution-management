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
import { authService, AuthError, AuthResult } from "@/services/auth";
import { supabase } from "@/lib/supabase";
import { useAtom } from "jotai";
import { userAtom, UserState } from "@/atoms/userAtom";

const SignupPage: React.FC = () => {
  const [, setUser] = useAtom(userAtom);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [givenName, setGivenName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN") {
          if (session?.user) {
            try {
              const result: AuthResult = await authService.handleGoogleSignIn(
                session.user
              );
              setUser({
                user: result.user,
                session: result.session,
              } as UserState);
              navigate("/webapp/home");
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
  }, [navigate, setUser]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result: AuthResult = await authService.signupWithEmail(
        email,
        password,
        familyName,
        givenName
      );
      setUser({ user: result.user, session: result.session } as UserState);
      alert(
        "確認メールを送信しました。メールを確認してアカウントを有効化してください。"
      );
      navigate("/webapp/home");
    } catch (error) {
      if (error instanceof AuthError) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const { data, error } = await authService.loginWithGoogle();
      if (error) throw error;
      if (data?.url) {
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
        <CardTitle className="text-2xl font-bold">新規アカウント登録</CardTitle>
        <CardDescription>
          必要な情報を入力して、アカウントを作成してください。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="familyName">姓</Label>
            <Input
              id="familyName"
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="givenName">名</Label>
            <Input
              id="givenName"
              value={givenName}
              onChange={(e) => setGivenName(e.target.value)}
              required
            />
          </div>
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
            アカウント作成
          </Button>
        </form>
        <div className="mt-4">
          <Button
            onClick={handleGoogleSignup}
            variant="outline"
            className="w-full"
          >
            Googleで登録
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-center w-full">
          すでにアカウントをお持ちですか？{" "}
          <Link to="/login" className="text-primary hover:underline">
            ログイン
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignupPage;
