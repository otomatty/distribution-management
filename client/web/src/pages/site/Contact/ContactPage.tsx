import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">お問い合わせ</h1>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">
              お名前
            </label>
            <Input id="name" placeholder="山田 太郎" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              メールアドレス
            </label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="company" className="block mb-2">
              会社名
            </label>
            <Input id="company" placeholder="株式会社サンプル" />
          </div>
          <div>
            <label htmlFor="inquiry-type" className="block mb-2">
              お問い合わせ種別
            </label>
            <Select>
              <SelectTrigger id="inquiry-type">
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="product">製品について</SelectItem>
                <SelectItem value="pricing">料金について</SelectItem>
                <SelectItem value="support">サポートについて</SelectItem>
                <SelectItem value="other">その他</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              お問い合わせ内容
            </label>
            <Textarea
              id="message"
              placeholder="お問い合わせ内容をご記入ください"
            />
          </div>
          <Button type="submit" className="w-full">
            送信する
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
