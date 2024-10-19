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

const PartnerMasterPage: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: "株式会社A",
      type: "サプライヤー",
      contact: "田中太郎",
      phone: "03-1234-5678",
    },
    {
      id: 2,
      name: "B商事",
      type: "顧客",
      contact: "鈴木花子",
      phone: "06-8765-4321",
    },
    {
      id: 3,
      name: "C物流",
      type: "運送業者",
      contact: "佐藤次郎",
      phone: "052-9876-5432",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">取引先マスタ</h1>

      <div className="flex justify-between mb-4">
        <Input className="w-64" placeholder="取引先名で検索" />
        <Button>新規取引先登録</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>取引先名</TableHead>
            <TableHead>種別</TableHead>
            <TableHead>担当者</TableHead>
            <TableHead>電話番号</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {partners.map((partner) => (
            <TableRow key={partner.id}>
              <TableCell>{partner.name}</TableCell>
              <TableCell>{partner.type}</TableCell>
              <TableCell>{partner.contact}</TableCell>
              <TableCell>{partner.phone}</TableCell>
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

export default PartnerMasterPage;
