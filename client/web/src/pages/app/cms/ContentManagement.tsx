import React, { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContentManagement: React.FC = () => {
  const [contents, setContents] = useState([
    {
      id: 1,
      title: "新製品発表",
      type: "お知らせ",
      status: "公開",
      date: "2023-05-15",
    },
    {
      id: 2,
      title: "夏季休業のお知らせ",
      type: "お知らせ",
      status: "下書き",
      date: "2023-06-01",
    },
    {
      id: 3,
      title: "新機能の使い方",
      type: "ブログ",
      status: "公開",
      date: "2023-05-20",
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">コンテンツ管理</h1>

      <div className="flex justify-between mb-4">
        <Input className="w-64" placeholder="タイトルで検索" />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="コンテンツタイプ" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">すべて</SelectItem>
            <SelectItem value="news">お知らせ</SelectItem>
            <SelectItem value="blog">ブログ</SelectItem>
          </SelectContent>
        </Select>
        <Button>新規作成</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>タイトル</TableHead>
            <TableHead>タイプ</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>日付</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contents.map((content) => (
            <TableRow key={content.id}>
              <TableCell>{content.title}</TableCell>
              <TableCell>{content.type}</TableCell>
              <TableCell>{content.status}</TableCell>
              <TableCell>{content.date}</TableCell>
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

export default ContentManagement;
