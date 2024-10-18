import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto">
        <Card className="bg-transparent text-white border-none shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold mb-4">
              流通管理を革新する、あなたのビジネスパートナー
            </CardTitle>
            <CardDescription className="text-xl mb-8 text-white">
              効率的な在庫管理と流通プロセスの最適化を、たった一つのアプリで実現
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button variant="secondary" size="lg">
              無料デモを申し込む
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
