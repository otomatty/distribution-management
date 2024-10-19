import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./appRoutes";
import { SiteRoutes } from "./siteRoutes";
import AuthLayout from "@/components/site/AuthLayout/AuthLayout";
import LoginPage from "@/pages/site/Login/LoginPage";
import SignupPage from "@/pages/site/Signup/SignupPage";
import AuthCallback from "@/pages/auth/AuthCallback";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";

export const RootRoutes = () => {
  const [userState] = useAtom(userAtom);

  return (
    <Router>
      <Routes>
        {userState.user ? (
          <Route path="/webapp/*" element={<AppRoutes />} />
        ) : (
          <>
            <Route path="/*" element={<SiteRoutes />} />
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Route>
          </>
        )}
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </Router>
  );
};
