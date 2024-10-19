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

const PurchaseDeliveriesPage: React.FC = () => {
  const deliveries = [
    {
      id: 1,
      number: "DEL001",
      supplier: "サプライヤーA",
      expectedDate: "2023-05-10",
      status: "配送中",
    },
    {
      id: 2,
      number: "DEL002",
      supplier: "サプライヤーB",
      expectedDate: "2023-05-12",
      status: "到着済",
    },
    {
      id: 3,
      number: "DEL003",
      supplier: "サプライヤーC",
      expectedDate: "2023-05-15",
      status: "遅延",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "到着済":
        return "default";
      case "配送中":
        return "secondary";
      case "遅延":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">納品管理</h1>

      <div className="flex justify-end mb-4">
        <Button>新規納品登録</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>納品番号</TableHead>
            <TableHead>サプライヤー</TableHead>
            <TableHead>予定日</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deliveries.map((delivery) => (
            <TableRow key={delivery.id}>
              <TableCell>{delivery.number}</TableCell>
              <TableCell>{delivery.supplier}</TableCell>
              <TableCell>{delivery.expectedDate}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(delivery.status)}>
                  {delivery.status}
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

export default PurchaseDeliveriesPage;
