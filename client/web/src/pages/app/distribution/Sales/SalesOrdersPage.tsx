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

const SalesOrdersPage: React.FC = () => {
  const salesOrders = [
    {
      id: 1,
      number: "SO001",
      customer: "顧客A",
      date: "2023-05-01",
      total: 50000,
      status: "処理中",
    },
    {
      id: 2,
      number: "SO002",
      customer: "顧客B",
      date: "2023-05-03",
      total: 75000,
      status: "出荷済み",
    },
    {
      id: 3,
      number: "SO003",
      customer: "顧客C",
      date: "2023-05-05",
      total: 100000,
      status: "完了",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "完了":
        return "default";
      case "出荷済み":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">受注管理</h1>

      <div className="flex justify-end mb-4">
        <Button>新規受注</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>受注番号</TableHead>
            <TableHead>顧客</TableHead>
            <TableHead>受注日</TableHead>
            <TableHead>合計金額</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {salesOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.number}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>¥{order.total.toLocaleString()}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(order.status)}>
                  {order.status}
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

export default SalesOrdersPage;
