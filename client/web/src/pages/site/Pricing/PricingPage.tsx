import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "スタンダード",
    price: "¥50,000/月",
    features: [
      "10ユーザーまで",
      "基本的な在庫管理機能",
      "月次レポート",
      "メールサポート",
    ],
  },
  {
    name: "プロフェッショナル",
    price: "¥100,000/月",
    features: [
      "無制限ユーザー",
      "高度な需要予測",
      "カスタムレポート",
      "24/7電話サポート",
      "API連携",
    ],
  },
  {
    name: "エンタープライズ",
    price: "お問い合わせ",
    features: [
      "カスタマイズ可能なソリューション",
      "専任のアカウントマネージャー",
      "オンサイトトレーニング",
      "高度なセキュリティ機能",
      "SLA保証",
    ],
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">料金プラン</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="list-disc list-inside mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 mt-auto">
              <Button className="w-full">選択する</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
