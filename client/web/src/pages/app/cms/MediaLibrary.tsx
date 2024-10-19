import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MediaLibrary: React.FC = () => {
  const mediaItems = [
    {
      id: 1,
      name: "image1.jpg",
      type: "画像",
      size: "1.2 MB",
      date: "2023-05-10",
    },
    {
      id: 2,
      name: "document.pdf",
      type: "PDF",
      size: "2.5 MB",
      date: "2023-05-12",
    },
    {
      id: 3,
      name: "video.mp4",
      type: "動画",
      size: "15.8 MB",
      date: "2023-05-15",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">メディアライブラリ</h1>

      <div className="flex justify-between mb-4">
        <Input className="w-64" placeholder="ファイル名で検索" />
        <Button>新規アップロード</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mediaItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg">
            <div className="font-semibold">{item.name}</div>
            <div className="text-sm text-gray-500">{item.type}</div>
            <div className="text-sm text-gray-500">{item.size}</div>
            <div className="text-sm text-gray-500">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaLibrary;
