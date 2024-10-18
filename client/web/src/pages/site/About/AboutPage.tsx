import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">会社概要</h1>
      <div className="max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">私たちのミッション</h2>
          <p className="mb-4">
            私たちは、最先端のテクノロジーを活用して、企業の流通管理プロセスを革新し、効率化することを使命としています。
            複雑化する現代のサプライチェーンにおいて、企業が直面する課題を解決し、持続可能な成長を支援します。
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">沿革</h2>
          <ul className="list-disc list-inside">
            <li>2015年: 会社設立</li>
            <li>2017年: 初版の流通管理アプリをリリース</li>
            <li>2019年: シリーズAの資金調達を完了</li>
            <li>2021年: AI機能を搭載したバージョン2.0をリリース</li>
            <li>2023年: 国内シェアNo.1を達成</li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">経営陣</h2>
          <ul className="list-disc list-inside">
            <li>CEO: 山田太郎 - 元大手物流企業CTO</li>
            <li>CTO: 鈴木花子 - AIの第一人者</li>
            <li>COO: 佐藤次郎 - 20年以上のサプライチェーン管理経験</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
