import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const SiteLayout: React.FC = () => {
  return (
    <>
      {/* ここにヘッダーやナビゲーションバーを追加することができます */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SiteLayout;
