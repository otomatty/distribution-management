import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SettingsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">設定</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">一般設定</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="notifications" />
              <label htmlFor="notifications">通知を有効にする</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="darkMode" />
              <label htmlFor="darkMode">ダークモードを有効にする</label>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">言語設定</h2>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="言語を選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ja">日本語</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="zh">中文</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">セキュリティ設定</h2>
          <div className="space-y-2">
            <Input type="password" placeholder="新しいパスワード" />
            <Input type="password" placeholder="新しいパスワード（確認）" />
            <Button>パスワードを変更</Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">その他の設定</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="autoBackup" />
              <label htmlFor="autoBackup">自動バックアップを有効にする</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="analytics" />
              <label htmlFor="analytics">匿名の使用状況データを送信する</label>
            </div>
          </div>
        </div>

        <Button className="mt-4">設定を保存</Button>
      </div>
    </div>
  );
};

export default SettingsPage;
