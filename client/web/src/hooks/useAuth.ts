import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom, UserState } from "@/atoms/userAtom";
import { authService } from "@/services/auth";

export const useAuth = () => {
  const navigate = useNavigate();
  const [, setUser] = useAtom(userAtom);

  const logout = async () => {
    try {
      await authService.logout();
      setUser({ user: null, session: null } as UserState);
      navigate("/login");
    } catch (error) {
      console.error("ログアウト中にエラーが発生しました:", error);
    }
  };

  return { logout };
};
