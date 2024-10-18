import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "スタンダード",
    price: "¥50,000/月",
    users: "〜10",
    storage: "100GB",
    support: "平日9-17時",
    analytics: "基本",
  },
  {
    name: "プロフェッショナル",
    price: "¥100,000/月",
    users: "無制限",
    storage: "1TB",
    support: "24/7",
    analytics: "高度",
  },
  {
    name: "エンタープライズ",
    price: "お問い合わせ",
    users: "無制限",
    storage: "無制限",
    support: "24/7専任",
    analytics: "カスタム",
  },
];

const PlanComparison: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">料金プラン</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>プラン</TableHead>
              <TableHead>価格</TableHead>
              <TableHead>ユーザー数</TableHead>
              <TableHead>ストレージ</TableHead>
              <TableHead>サポート</TableHead>
              <TableHead>分析機能</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plans.map((plan, index) => (
              <TableRow key={index}>
                <TableCell>
                  {plan.name}
                  {plan.name === "プロフェッショナル" && (
                    <Badge className="ml-2">人気</Badge>
                  )}
                </TableCell>
                <TableCell>{plan.price}</TableCell>
                <TableCell>{plan.users}</TableCell>
                <TableCell>{plan.storage}</TableCell>
                <TableCell>{plan.support}</TableCell>
                <TableCell>{plan.analytics}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default PlanComparison;
