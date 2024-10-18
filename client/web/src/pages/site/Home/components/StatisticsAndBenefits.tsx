import React from "react";

const stats = [
  { value: "30%", label: "在庫コスト削減" },
  { value: "50%", label: "業務効率化" },
  { value: "20%", label: "売上向上" },
  { value: "99.9%", label: "在庫精度" },
];

const StatisticsAndBenefits: React.FC = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">導入効果</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsAndBenefits;
