import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "リアルタイム在庫管理",
    description:
      "複数の倉庫や店舗の在庫をリアルタイムで把握し、効率的な在庫管理を実現します。",
  },
  {
    title: "需要予測",
    description:
      "AI技術を活用し、過去のデータから将来の需要を予測。適切な在庫水準の維持をサポートします。",
  },
  {
    title: "自動発注システム",
    description:
      "設定した条件に基づいて自動的に発注を行い、欠品や過剰在庫を防ぎます。",
  },
  {
    title: "サプライチェーン可視化",
    description:
      "原材料の調達から製品の配送まで、サプライチェーン全体を可視化し、最適化を支援します。",
  },
  {
    title: "レポート・分析",
    description:
      "カスタマイズ可能なダッシュボードで、重要なKPIをリアルタイムで監視・分析できます。",
  },
  {
    title: "モバイル対応",
    description:
      "スマートフォンやタブレットからもアクセス可能。外出先でも必要な情報にアクセスできます。",
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">機能紹介</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
