import React from "react";

const cases = [
  {
    industry: "小売業",
    description:
      "全国100店舗の在庫を一元管理し、売り切れを70%削減。季節商品の仕入れ最適化で利益率が15%向上。",
  },
  {
    industry: "製造業",
    description:
      "部品の在庫切れによる生産ラインの停止をゼロに。サプライチェーン全体の可視化で、リードタイムを30%短縮。",
  },
  {
    industry: "卸売業",
    description:
      "受発注業務の自動化により、処理時間を50%削減。データ分析による需要予測で、在庫回転率が2倍に向上。",
  },
];

const UseCases: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">導入事例</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{item.industry}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
