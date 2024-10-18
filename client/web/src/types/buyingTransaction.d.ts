export interface BuyingTransaction {
  customerManagerName: string;
  deliveryDate: Date;
  deliveryPreferredDate?: Date;
  makerDirect: boolean;
  memo?: string;
  orderPdf?: Buffer; // 環境に応じて型を見直してください
  orderedAt: Date;
  paymentDueDate: Date;
  receiptDate?: Date;
  softDeletedAt?: Date; // 'softDestroyedAt' を 'softDeletedAt' に変更
  total: number;
  totalPostages: number;
}
