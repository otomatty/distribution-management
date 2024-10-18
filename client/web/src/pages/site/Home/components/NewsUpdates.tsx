import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const news = [
  {
    title: "AI搭載の需要予測機能をリリース",
    date: "2023年6月15日",
    description:
      "機械学習を活用し、より精度の高い需要予測が可能になりました。在庫の最適化にお役立てください。",
    badge: "新機能",
  },
  {
    title: "モバイルアプリのアップデート",
    date: "2023年5月1日",
    description:
      "iOS/Androidアプリをアップデート。新UIでより使いやすくなりました。",
    badge: "アップデート",
  },
  {
    title: "大手物流企業5社との連携を開始",
    date: "2023年4月10日",
    description:
      "主要な物流企業とのシステム連携により、配送状況のリアルタイム追跡が可能になりました。",
    badge: "お知らせ",
  },
];

const NewsUpdates: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          最新ニュース・アップデート情報
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{item.title}</CardTitle>
                  <Badge>{item.badge}</Badge>
                </div>
                <p className="text-sm text-gray-600">{item.date}</p>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;
