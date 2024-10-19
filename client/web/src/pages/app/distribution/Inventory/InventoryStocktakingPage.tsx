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
import { Badge } from "@/components/ui/badge";

const InventoryStocktakingPage: React.FC = () => {
  const stocktakingItems = [
    {
      id: 1,
      name: "商品A",
      sku: "SKU001",
      expectedQuantity: 100,
      actualQuantity: 98,
      status: "確認済",
    },
    {
      id: 2,
      name: "商品B",
      sku: "SKU002",
      expectedQuantity: 50,
      actualQuantity: 52,
      status: "未確認",
    },
    {
      id: 3,
      name: "商品C",
      sku: "SKU003",
      expectedQuantity: 75,
      actualQuantity: 75,
      status: "確認済",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">棚卸し</h1>

      <div className="flex justify-between mb-4">
        <Input className="w-64" placeholder="商品名で検索" />
        <Button>新規棚卸し開始</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>商品名</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>予想数量</TableHead>
            <TableHead>実際数量</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stocktakingItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.sku}</TableCell>
              <TableCell>{item.expectedQuantity}</TableCell>
              <TableCell>{item.actualQuantity}</TableCell>
              <TableCell>
                <Badge
                  variant={item.status === "確認済" ? "default" : "secondary"}
                >
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  {item.status === "確認済" ? "詳細" : "確認"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InventoryStocktakingPage;
