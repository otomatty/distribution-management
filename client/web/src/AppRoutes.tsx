import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/common/AuthProvider/AuthProvider';
import SiteLayout from './components/site/SiteLayout/SiteLayout';
import AppLayout from './components/app/AppLayout/AppLayout';
import HomePage from './pages/site/Home/HomePage';
import DashboardPage from './pages/app/Dashboard/DashboardPage';
import LoginPage from './pages/site/Login/LoginPage';
import SignUpPage from './pages/site/SignUp/SignUpPage';
import EmailConfirmationPage from './pages/site/EmailConfirmation/EmailConfirmationPage';
import AuthCallback from './pages/site/AuthCallback/AuthCallback';

// 保護されたルートのコンポーネントをラップする関数
const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => <AuthProvider requireAuth>{element}</AuthProvider>;

export const AppRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* サイトページ（SiteLayoutを使用） */}
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/email-confirmation" element={<EmailConfirmationPage />} />

        {/* アプリページ（AppLayoutを使用） */}
        <Route element={<ProtectedRoute element={<AppLayout />} />}>
          <Route path="/webapp/dashboard" element={<DashboardPage />} />
          {/* 他のアプリ内ページをここに追加 */}
        </Route>

        {/* 認証コールバック */}
        <Route path="/auth/callback" element={<AuthCallback />} />

        {/* 存在しないパスの場合、ホームページにリダイレクト */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
};
