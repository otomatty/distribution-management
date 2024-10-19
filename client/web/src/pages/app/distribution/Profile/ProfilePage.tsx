import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authService } from "@/services/auth";
import { User } from "@/types/user";

const ProfilePage: React.FC = () => {
  const [userState, setUserState] = useAtom(userAtom);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<Partial<User>>({
    family_name: "",
    given_name: "",
    email: "",
    phone_number: "",
    bio: "",
  });

  useEffect(() => {
    if (userState.user) {
      setProfile({
        family_name: userState.user.family_name || "",
        given_name: userState.user.given_name || "",
        email: userState.user.email || "",
        phone_number: userState.user.phone_number || "",
        bio: userState.user.bio || "",
      });
    }
  }, [userState.user]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const updatedUser = await authService.updateUserProfile(profile);
      setUserState((prev) => ({ ...prev, user: updatedUser }));
      setIsEditing(false);
    } catch (error) {
      console.error("プロフィールの更新中にエラーが発生しました:", error);
      // エラーメッセージを表示するなどのエラーハンドリングを行う
    }
  };

  if (!userState.user) {
    return <div>ユーザー情報を読み込んでいます...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">プロフィール</h1>

      <div className="flex items-center space-x-4 mb-6">
        <Avatar className="w-24 h-24">
          <AvatarImage
            src={userState.user.avatar_url || "https://github.com/shadcn.png"}
            alt="プロフィール画像"
          />
          <AvatarFallback>{`${userState.user.family_name.charAt(
            0
          )}${userState.user.given_name.charAt(0)}`}</AvatarFallback>
        </Avatar>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)}>プロフィールを編集</Button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">姓</label>
          <Input
            name="family_name"
            value={profile.family_name}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">名</label>
          <Input
            name="given_name"
            value={profile.given_name}
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
            電話番号
          </label>
          <Input
            name="phone_number"
            value={profile.phone_number}
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
