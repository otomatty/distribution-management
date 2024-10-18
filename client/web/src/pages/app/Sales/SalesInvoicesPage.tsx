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

const SalesInvoicesPage: React.FC = () => {
  const invoices = [
    {
      id: 1,
      number: "INV001",
      customer: "顧客A",
      amount: 50000,
      dueDate: "2023-05-15",
      status: "未払い",
    },
    {
      id: 2,
      number: "INV002",
      customer: "顧客B",
      amount: 75000,
      dueDate: "2023-05-20",
      status: "支払済",
    },
    {
      id: 3,
      number: "INV003",
      customer: "顧客C",
      amount: 100000,
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
      <h1 className="text-3xl font-bold mb-6">請求管理</h1>

      <div className="flex justify-end mb-4">
        <Button>新規請求書作成</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>請求番号</TableHead>
            <TableHead>顧客</TableHead>
            <TableHead>金額</TableHead>
            <TableHead>支払期限</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.number}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>¥{invoice.amount.toLocaleString()}</TableCell>
              <TableCell>{invoice.dueDate}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(invoice.status)}>
                  {invoice.status}
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

export default SalesInvoicesPage;
