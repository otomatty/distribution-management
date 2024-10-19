import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const DisposalHistoryPage: React.FC = () => {
  const disposalHistory = [
    {
      id: 1,
      product: "商品A",
      quantity: 50,
      disposalDate: "2023-05-10",
      reason: "期限切れ",
    },
    {
      id: 2,
      product: "商品B",
      quantity: 30,
      disposalDate: "2023-05-12",
      reason: "品質劣化",
    },
    {
      id: 3,
      product: "商品C",
      quantity: 40,
      disposalDate: "2023-05-15",
      reason: "過剰在庫",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">廃棄履歴</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>商品</TableHead>
            <TableHead>数量</TableHead>
            <TableHead>廃棄日</TableHead>
            <TableHead>理由</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {disposalHistory.map((disposal) => (
            <TableRow key={disposal.id}>
              <TableCell>{disposal.product}</TableCell>
              <TableCell>{disposal.quantity}</TableCell>
              <TableCell>{disposal.disposalDate}</TableCell>
              <TableCell>{disposal.reason}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  詳細
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DisposalHistoryPage;
