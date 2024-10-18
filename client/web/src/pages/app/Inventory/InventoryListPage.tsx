import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const InventoryListPage: React.FC = () => {
  const inventoryItems = [
    { id: 1, name: "商品A", sku: "SKU001", quantity: 100, location: "倉庫1" },
    { id: 2, name: "商品B", sku: "SKU002", quantity: 50, location: "倉庫2" },
    { id: 3, name: "商品C", sku: "SKU003", quantity: 75, location: "倉庫1" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">在庫一覧</h1>

      <div className="flex justify-between mb-4">
        <Input className="w-64" placeholder="商品名で検索" />
        <Button>新規商品登録</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>商品名</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>数量</TableHead>
            <TableHead>保管場所</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventoryItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.sku}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InventoryListPage;
