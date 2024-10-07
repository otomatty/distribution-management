import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQItem } from '../../../../../../../../share/types/auth';

const faqItems: FAQItem[] = [
  {
    question: '確認メールが届きません。どうすればよいですか？',
    answer: 'まず、迷惑メールフォルダをご確認ください。それでも見つからない場合は、メールの再送信ボタンをクリックしてください。',
  },
  {
    question: 'メールアドレスを間違えて入力してしまいました。どうすればよいですか？',
    answer: 'お手数ですが、新しいアカウントで再度サインアップしていただく必要があります。',
  },
  {
    question: '確認リンクの有効期限はありますか？',
    answer: '確認リンクの有効期限は24時間です。期限が切れた場合は、メールの再送信を行ってください。',
  },
];

export const FAQ: React.FC = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        よくある質問
      </Typography>
      {faqItems.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
