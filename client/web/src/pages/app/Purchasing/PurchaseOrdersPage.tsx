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

const PurchaseOrdersPage: React.FC = () => {
  const purchaseOrders = [
    {
      id: 1,
      number: "PO001",
      supplier: "サプライヤーA",
      date: "2023-05-01",
      status: "処理中",
    },
    {
      id: 2,
      number: "PO002",
      supplier: "サプライヤーB",
      date: "2023-05-03",
      status: "完了",
    },
    {
      id: 3,
      number: "PO003",
      supplier: "サプライヤーC",
      date: "2023-05-05",
      status: "保留",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "完了":
        return "default";
      case "保留":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">発注管理</h1>

      <div className="flex justify-end mb-4">
        <Button>新規発注</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>発注番号</TableHead>
            <TableHead>サプライヤー</TableHead>
            <TableHead>発注日</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {purchaseOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.number}</TableCell>
              <TableCell>{order.supplier}</TableCell>
              <TableCell>{order.date}</TableCell>
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

export default PurchaseOrdersPage;
