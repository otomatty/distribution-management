import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">流通管理アプリ</h3>
            <p className="text-sm text-gray-600">
              効率的な在庫管理と流通プロセスの最適化を実現するソリューション
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">製品</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/features"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  機能
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  料金プラン
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  導入事例
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">サポート</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  よくある質問
                </Link>
              </li>
              <li>
                <Link
                  to="/documentation"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  ドキュメント
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  会社概要
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  ニュース
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  採用情報
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © 2023 流通管理アプリ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
