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

const DisposalScheduledPage: React.FC = () => {
  const scheduledDisposals = [
    {
      id: 1,
      product: "商品A",
      quantity: 50,
      scheduledDate: "2023-05-20",
      reason: "期限切れ",
    },
    {
      id: 2,
      product: "商品B",
      quantity: 30,
      scheduledDate: "2023-05-22",
      reason: "品質劣化",
    },
    {
      id: 3,
      product: "商品C",
      quantity: 40,
      scheduledDate: "2023-05-25",
      reason: "過剰在庫",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">廃棄予定</h1>

      <div className="flex justify-end mb-4">
        <Button>新規廃棄予定登録</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>商品</TableHead>
            <TableHead>数量</TableHead>
            <TableHead>予定日</TableHead>
            <TableHead>理由</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scheduledDisposals.map((disposal) => (
            <TableRow key={disposal.id}>
              <TableCell>{disposal.product}</TableCell>
              <TableCell>{disposal.quantity}</TableCell>
              <TableCell>{disposal.scheduledDate}</TableCell>
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

export default DisposalScheduledPage;
