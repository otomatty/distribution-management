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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InventoryMovementPage: React.FC = () => {
  const movements = [
    {
      id: 1,
      date: "2023-05-01",
      type: "入庫",
      product: "商品A",
      quantity: 100,
      location: "倉庫1",
    },
    {
      id: 2,
      date: "2023-05-02",
      type: "出庫",
      product: "商品B",
      quantity: 50,
      location: "倉庫2",
    },
    {
      id: 3,
      date: "2023-05-03",
      type: "入庫",
      product: "商品C",
      quantity: 75,
      location: "倉庫1",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">入出庫管理</h1>

      <div className="flex justify-between mb-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="移動タイプ" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">全て</SelectItem>
            <SelectItem value="in">入庫</SelectItem>
            <SelectItem value="out">出庫</SelectItem>
          </SelectContent>
        </Select>
        <Button>新規入出庫登録</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>日付</TableHead>
            <TableHead>タイプ</TableHead>
            <TableHead>商品</TableHead>
            <TableHead>数量</TableHead>
            <TableHead>場所</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {movements.map((movement) => (
            <TableRow key={movement.id}>
              <TableCell>{movement.date}</TableCell>
              <TableCell>{movement.type}</TableCell>
              <TableCell>{movement.product}</TableCell>
              <TableCell>{movement.quantity}</TableCell>
              <TableCell>{movement.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InventoryMovementPage;
