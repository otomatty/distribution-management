export interface SellingTransaction {
  deliveryDate: Date;
  deliveryPdf?: Buffer; // 環境に応じて型を見直してください
  deliveryPreferredDate?: Date;
  invoiceIssueDate: Date;
  makerDirect: boolean;
  memo?: string;
  paymentDate: Date;
  paymentDeadline: Date;
  paymentPdf?: Buffer; // 環境に応じて型を見直してください
  shippingDate: Date;
  total: number;
  totalPostages: number;
}
