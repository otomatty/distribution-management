import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "山田太郎",
    email: "yamada@example.com",
    position: "在庫管理者",
    department: "物流部",
    bio: "10年以上の在庫管理経験があります。効率的な在庫管理システムの構築に興味があります。",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // ここでプロフィール情報を保存するAPIを呼び出す
    console.log("保存されたプロフィール:", profile);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">プロフィール</h1>

      <div className="flex items-center space-x-4 mb-6">
        <Avatar className="w-24 h-24">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="プロフィール画像"
          />
          <AvatarFallback>YT</AvatarFallback>
        </Avatar>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)}>プロフィールを編集</Button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            名前
          </label>
          <Input
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            メールアドレス
          </label>
          <Input
            name="email"
            type="email"
            value={profile.email}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            役職
          </label>
          <Input
            name="position"
            value={profile.position}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            部署
          </label>
          <Input
            name="department"
            value={profile.department}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            自己紹介
          </label>
          <Textarea
            name="bio"
            value={profile.bio}
            onChange={handleInputChange}
            disabled={!isEditing}
            rows={4}
          />
        </div>
      </div>

      {isEditing && (
        <div className="mt-6 space-x-2">
          <Button onClick={handleSave}>保存</Button>
          <Button variant="outline" onClick={() => setIsEditing(false)}>
            キャンセル
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
