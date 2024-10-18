import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "このアプリは小規模事業者でも利用できますか？",
    answer:
      "はい、小規模事業者向けのスタンダードプランをご用意しています。必要最小限の機能で始め、事業の成長に合わせてアップグレードすることができます。",
  },
  {
    question: "既存のシステムとの連携は可能ですか？",
    answer:
      "はい、多くの一般的な会計ソフトやECプラットフォームとのAPI連携が可能です。カスタム連携も承っておりますので、詳細についてはお問い合わせください。",
  },
  {
    question: "データのセキュリティは大丈夫ですか？",
    answer:
      "最高水準のセキュリティ対策を実施しています。データは暗号化されて保存され、定期的なバックアップも行っています。また、SOC2やISO27001などの国際セキュリティ基準にも準拠しています。",
  },
  {
    question: "導入にはどのくらいの時間がかかりますか？",
    answer:
      "基本的な導入は1〜2週間程度で完了します。ただし、大規模な連携や複雑なカスタマイズが必要な場合は、より長期間が必要になる場合があります。導入支援チームが全プロセスをサポートいたします。",
  },
  {
    question: "トレーニングやサポートは提供されていますか？",
    answer:
      "はい、全てのプランに初期トレーニングとオンラインサポートが含まれています。プロフェッショナルプラン以上では、専任のサポート担当者による24時間365日のサポートを提供しています。",
  },
];

const Faq: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
