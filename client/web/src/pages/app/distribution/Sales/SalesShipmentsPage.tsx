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

const SalesShipmentsPage: React.FC = () => {
  const shipments = [
    {
      id: 1,
      number: "SHP001",
      customer: "顧客A",
      expectedDate: "2023-05-15",
      status: "準備中",
    },
    {
      id: 2,
      number: "SHP002",
      customer: "顧客B",
      expectedDate: "2023-05-20",
      status: "発送済",
    },
    {
      id: 3,
      number: "SHP003",
      customer: "顧客C",
      expectedDate: "2023-05-25",
      status: "配送中",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "発送済":
        return "default";
      case "準備中":
        return "secondary";
      case "配送中":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">出荷管理</h1>

      <div className="flex justify-end mb-4">
        <Button>新規出荷登録</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>出荷番号</TableHead>
            <TableHead>顧客</TableHead>
            <TableHead>予定日</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shipments.map((shipment) => (
            <TableRow key={shipment.id}>
              <TableCell>{shipment.number}</TableCell>
              <TableCell>{shipment.customer}</TableCell>
              <TableCell>{shipment.expectedDate}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(shipment.status)}>
                  {shipment.status}
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

export default SalesShipmentsPage;
