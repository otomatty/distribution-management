import React from "react";

const features = [
  {
    title: "リアルタイム在庫管理",
    description: "常に最新の在庫状況を把握し、的確な意思決定を",
  },
  {
    title: "自動発注システム",
    description: "在庫切れを防ぎ、適切な在庫水準を維持",
  },
  {
    title: "データ分析と予測",
    description: "過去のデータを基に将来の需要を予測し、戦略立案をサポート",
  },
  {
    title: "マルチデバイス対応",
    description: "PCやスマートフォンから、いつでもどこでもアクセス可能",
  },
];

const KeyFeaturesHighlight: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">主要機能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesHighlight;
