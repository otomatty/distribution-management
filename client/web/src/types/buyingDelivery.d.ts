export interface BuyingDelivery {
  address: string;
  cellphoneNumber: string;
  email: string;
  faxNumber: string; // 'fax' を 'faxNumber' に統一
  managerName: string;
  memo?: string;
  name: string;
  phoneNumber: string;
  postalCode: string;
}
