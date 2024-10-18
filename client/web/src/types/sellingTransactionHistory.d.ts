export interface SellingTransactionHistory {
  metadata: {
    transactionId: string;
    amount: number;
    date: string;
    // 他の必要なプロパティを追加
  };
  mostRecent: boolean;
  sortKey: number;
  toState: string;
}
