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
import { Badge } from "@/components/ui/badge";

const PurchasePaymentsPage: React.FC = () => {
  const payments = [
    {
      id: 1,
      number: "PAY001",
      supplier: "サプライヤーA",
      amount: 100000,
      dueDate: "2023-05-15",
      status: "未払い",
    },
    {
      id: 2,
      number: "PAY002",
      supplier: "サプライヤーB",
      amount: 150000,
      dueDate: "2023-05-20",
      status: "支払済",
    },
    {
      id: 3,
      number: "PAY003",
      supplier: "サプライヤーC",
      amount: 200000,
      dueDate: "2023-05-25",
      status: "遅延",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "支払済":
        return "default";
      case "未払い":
        return "secondary";
      case "遅延":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">支払管理</h1>

      <div className="flex justify-end mb-4">
        <Button>新規支払登録</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>支払番号</TableHead>
            <TableHead>サプライヤー</TableHead>
            <TableHead>金額</TableHead>
            <TableHead>支払期限</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.number}</TableCell>
              <TableCell>{payment.supplier}</TableCell>
              <TableCell>¥{payment.amount.toLocaleString()}</TableCell>
              <TableCell>{payment.dueDate}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(payment.status)}>
                  {payment.status}
                </Badge>
              </TableCell>
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

export default PurchasePaymentsPage;
