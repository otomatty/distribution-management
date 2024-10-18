export interface Item {
  code: string;
  name: string;
  janCode?: string;
  buyingMinLot: number;
  buyingShippingCondition: string;
  buyingUnitName: string;
  wholesalePrice: number;
  unitSalesPrice: number;
  memo?: string;
}
