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

const SalesPaymentsPage: React.FC = () => {
  const payments = [
    {
      id: 1,
      number: "PAY001",
      customer: "顧客A",
      amount: 50000,
      date: "2023-05-10",
      method: "銀行振込",
    },
    {
      id: 2,
      number: "PAY002",
      customer: "顧客B",
      amount: 75000,
      date: "2023-05-12",
      method: "クレジットカード",
    },
    {
      id: 3,
      number: "PAY003",
      customer: "顧客C",
      amount: 100000,
      date: "2023-05-15",
      method: "現金",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">入金管理</h1>

      <div className="flex justify-end mb-4">
        <Button>新規入金登録</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>入金番号</TableHead>
            <TableHead>顧客</TableHead>
            <TableHead>金額</TableHead>
            <TableHead>入金日</TableHead>
            <TableHead>支払方法</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.number}</TableCell>
              <TableCell>{payment.customer}</TableCell>
              <TableCell>¥{payment.amount.toLocaleString()}</TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>{payment.method}</TableCell>
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

export default SalesPaymentsPage;
