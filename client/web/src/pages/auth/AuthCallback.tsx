import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useAtom } from "jotai";
import { userAtom, UserState } from "@/atoms/userAtom";
import { authService } from "@/services/auth";

const AuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const [, setUser] = useAtom(userAtom);

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          if (event === "SIGNED_IN" && session?.user) {
            try {
              const result = await authService.handleGoogleSignIn(session.user);
              setUser({
                user: result.user,
                session: result.session,
              } as UserState);
              navigate("/webapp/home");
            } catch (error) {
              console.error("Google認証後のエラー:", error);
              alert("認証後の処理中にエラーが発生しました。");
              navigate("/login");
            }
          }
        }
      );

      return () => {
        authListener.subscription.unsubscribe();
      };
    };

    handleAuthCallback();
  }, [navigate, setUser]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      <p className="mt-4 text-xl font-semibold text-gray-700">認証中...</p>
    </div>
  );
};

export default AuthCallback;
