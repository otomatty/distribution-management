import { LucideIcon } from "lucide-react";

export interface QuickAccessItem {
  id: string;
  label: string;
  icon: LucideIcon;
  onClick: () => void;
}
