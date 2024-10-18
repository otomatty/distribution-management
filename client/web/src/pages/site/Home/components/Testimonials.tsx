import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "田中 健太",
    position: "株式会社ABC物流 CEO",
    comment:
      "この流通管理アプリの導入後、在庫の正確性が99%に向上し、欠品による機会損失が激減しました。経営の意思決定が格段に早くなり、競争力が大幅に向上しています。",
    avatar: "/images/tanaka.jpg",
  },
  {
    name: "鈴木 美咲",
    position: "DEF製造 物流部長",
    comment:
      "リアルタイムの在庫把握と需要予測機能により、過剰在庫が40%削減。資金繰りが改善し、新規事業への投資が可能になりました。このアプリは我が社の成長に不可欠です。",
    avatar: "/images/suzuki.jpg",
  },
  {
    name: "佐藤 隆",
    position: "GHI小売チェーン オペレーション責任者",
    comment:
      "全国200店舗の在庫を一元管理できるようになり、店舗間の在庫移動が���適化されました。顧客満足度が20%向上し、売上も前年比15%増を達成しています。",
    avatar: "/images/sato.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">お客様の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{testimonial.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
