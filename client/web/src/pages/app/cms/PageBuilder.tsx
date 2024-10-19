import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const PageBuilder: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ページビルダー</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            タイトル
          </label>
          <Input className="w-full" placeholder="ページタイトルを入力" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            コンテンツ
          </label>
          <Textarea
            className="w-full h-64"
            placeholder="ここにコンテンツを入力"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline">下書き保存</Button>
          <Button>公開</Button>
        </div>
      </div>
    </div>
  );
};

export default PageBuilder;
