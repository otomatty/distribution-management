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

const LocationMasterPage: React.FC = () => {
  const locations = [
    {
      id: 1,
      name: "東京倉庫",
      address: "東京都品川区1-1-1",
      capacity: 10000,
      currentStock: 7500,
    },
    {
      id: 2,
      name: "大阪倉庫",
      address: "大阪府大阪市北区2-2-2",
      capacity: 8000,
      currentStock: 6000,
    },
    {
      id: 3,
      name: "名古屋倉庫",
      address: "愛知県名古屋市中区3-3-3",
      capacity: 5000,
      currentStock: 3500,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">保管場所マスタ</h1>

      <div className="flex justify-between mb-4">
        <Input className="w-64" placeholder="保管場所名で検索" />
        <Button>新規保管場所登録</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>保管場所名</TableHead>
            <TableHead>住所</TableHead>
            <TableHead>最大容量</TableHead>
            <TableHead>現在の在庫</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {locations.map((location) => (
            <TableRow key={location.id}>
              <TableCell>{location.name}</TableCell>
              <TableCell>{location.address}</TableCell>
              <TableCell>{location.capacity.toLocaleString()}</TableCell>
              <TableCell>{location.currentStock.toLocaleString()}</TableCell>
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

export default LocationMasterPage;
