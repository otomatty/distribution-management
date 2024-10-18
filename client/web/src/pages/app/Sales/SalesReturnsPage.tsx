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

const SalesReturnsPage: React.FC = () => {
  const returns = [
    {
      id: 1,
      number: "RET001",
      customer: "顧客A",
      amount: 5000,
      date: "2023-05-10",
      status: "処理中",
    },
    {
      id: 2,
      number: "RET002",
      customer: "顧客B",
      amount: 7500,
      date: "2023-05-12",
      status: "承認済",
    },
    {
      id: 3,
      number: "RET003",
      customer: "顧客C",
      amount: 10000,
      date: "2023-05-15",
      status: "完了",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "完了":
        return "default";
      case "承認済":
        return "secondary";
      case "処理中":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">返品管理</h1>

      <div className="flex justify-end mb-4">
        <Button>新規返品登録</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>返品番号</TableHead>
            <TableHead>顧客</TableHead>
            <TableHead>金額</TableHead>
            <TableHead>返品日</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {returns.map((returnItem) => (
            <TableRow key={returnItem.id}>
              <TableCell>{returnItem.number}</TableCell>
              <TableCell>{returnItem.customer}</TableCell>
              <TableCell>¥{returnItem.amount.toLocaleString()}</TableCell>
              <TableCell>{returnItem.date}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(returnItem.status)}>
                  {returnItem.status}
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

export default SalesReturnsPage;
