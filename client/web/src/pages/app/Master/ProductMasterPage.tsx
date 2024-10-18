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

const ProductMasterPage: React.FC = () => {
  const products = [
    { id: 1, name: "商品A", sku: "SKU001", category: "カテゴリ1", price: 1000 },
    { id: 2, name: "商品B", sku: "SKU002", category: "カテゴリ2", price: 2000 },
    { id: 3, name: "商品C", sku: "SKU003", category: "カテゴリ1", price: 1500 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">商品マスタ</h1>

      <div className="flex justify-between mb-4">
        <Input className="w-64" placeholder="商品名で検索" />
        <Button>新規商品登録</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>商品名</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>カテゴリ</TableHead>
            <TableHead>価格</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>¥{product.price.toLocaleString()}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  編集
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductMasterPage;
