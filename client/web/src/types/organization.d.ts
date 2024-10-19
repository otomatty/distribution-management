// 組織の基本情報
export interface Organization {
  id: string;
  name: string;
  legalName?: string;
  type: "corporation" | "llc" | "partnership" | "sole_proprietorship" | "other";
  industry: string;
  description?: string;
  foundedDate?: string;
  fiscalYearEnd?: string;

  // 連絡先情報
  mainContact: string;
  email: string;
  phoneNumber: string;
  cellphoneNumber: string;
  faxNumber?: string;
  website?: string;
  lineId?: string;

  // 住所情報
  address: string;
  postalCode: string;
  city: string;
  state?: string;
  country: string;

  // 法的情報
  taxId: string;
  registrationNumber: string; // 'rgNumber' を明確な名前に変更

  // 銀行情報
  bankInfo: string;

  // 組織構造
  parent_organization_id?: string;
  subsidiaries?: string[]; // 子会社のID配列

  // システム情報
  created_at: string;
  updated_at: string;
  status: "active" | "inactive" | "suspended";
}

// 部門情報
export interface Department {
  id: string;
  name: string;
  description?: string;
  parent_department_id?: string;
  manager_id?: string;
  organization_id: string;
  cost_center_id?: string;
  created_at: string;
  updated_at: string;
}

// 職位情報
export interface Position {
  id: string;
  name: string;
  description?: string;
  level: number;
  department_id: string;
  responsibilities?: string[];
  required_skills?: string[];
  salary_range?: {
    min: number;
    max: number;
  };
  created_at: string;
  updated_at: string;
}

// コストセンター
export interface CostCenter {
  id: string;
  name: string;
  code: string;
  description?: string;
  manager_id?: string;
  budget?: number;
  created_at: string;
  updated_at: string;
}
