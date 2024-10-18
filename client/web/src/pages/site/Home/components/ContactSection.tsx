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

const ContactSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
        <form className="max-w-md mx-auto">
          <div className="space-y-4">
            <Input placeholder="お名前" />
            <Input type="email" placeholder="メールアドレス" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="お問い合わせ種別" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="demo">デモのリクエスト</SelectItem>
                <SelectItem value="quote">見積もり依頼</SelectItem>
                <SelectItem value="support">サポート</SelectItem>
                <SelectItem value="other">その他</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="お問い合わせ内容" />
            <Button type="submit" className="w-full">
              送信
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
