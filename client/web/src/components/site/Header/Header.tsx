import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          流通管理アプリ
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/features" className="text-gray-600 hover:text-primary">
                機能
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-gray-600 hover:text-primary">
                料金
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-primary">
                会社概要
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-primary">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <Button variant="outline" asChild>
            <Link to="/login">ログイン</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">無料デモ</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
