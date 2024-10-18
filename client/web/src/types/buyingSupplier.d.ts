export interface BuyingSupplier {
  address: string;
  cellphoneNumber: string;
  email: string;
  faxNumber: string;
  lineId?: string;
  mainContact: string;
  managerName: string;
  memo?: string;
  phoneNumber: string;
  placeName: string; // 'placeName' の用途を明確に
  postalCode: string;
  supplierName: string;
  usualOrderMethod?: string;
}
