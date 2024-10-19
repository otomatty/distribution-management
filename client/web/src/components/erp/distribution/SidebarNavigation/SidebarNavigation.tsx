import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Briefcase,
  Database,
  BarChart,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
type NavigationSection = "business" | "other";

type NavigationItem = {
  icon: React.ElementType;
  label: string;
  path: string;
  subItems?: { label: string; path: string }[];
};

const businessItems: NavigationItem[] = [
  { icon: Home, label: "ホーム", path: "/webapp/home" },
  {
    icon: Briefcase,
    label: "在庫",
    path: "/inventory",
    subItems: [
      { label: "在庫一覧", path: "/webapp/inventory/list" },
      { label: "入出庫", path: "/webapp/inventory/movement" },
      { label: "棚卸し", path: "/webapp/inventory/stocktaking" },
    ],
  },
  {
    icon: Briefcase,
    label: "仕入",
    path: "/webapp/purchasing",
    subItems: [
      { label: "発注", path: "/webapp/purchasing/orders" },
      { label: "納品", path: "/webapp/purchasing/deliveries" },
      { label: "支払", path: "/webapp/purchasing/payments" },
    ],
  },
  {
    icon: Briefcase,
    label: "販売",
    path: "/sales",
    subItems: [
      { label: "受注", path: "/webapp/sales/orders" },
      { label: "出荷", path: "/webapp/sales/shipments" },
      { label: "請求", path: "/webapp/sales/invoices" },
      { label: "入金", path: "/webapp/sales/payments" },
      { label: "返品", path: "/webapp/sales/returns" },
    ],
  },
  {
    icon: Briefcase,
    label: "廃棄",
    path: "/disposal",
    subItems: [
      { label: "廃棄予定", path: "/disposal/scheduled" },
      { label: "廃棄履歴", path: "/disposal/history" },
    ],
  },
];

const otherItems: NavigationItem[] = [
  {
    icon: Database,
    label: "マスタ",
    path: "/webapp/master",
    subItems: [
      { label: "商品マスタ", path: "/webapp/master/products" },
      { label: "取引先マスタ", path: "/webapp/master/partners" },
      { label: "保管場所マスタ", path: "/webapp/master/locations" },
    ],
  },
  { icon: BarChart, label: "レポート・分析", path: "/webapp/reports" },
  { icon: Settings, label: "システム設定", path: "/webapp/settings" },
];

const SidebarNavigation: React.FC = () => {
  const [activeSection, setActiveSection] =
    useState<NavigationSection>("business");

  const renderNavigationItems = (items: NavigationItem[]) => (
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            to={item.path}
            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </Link>
          {item.subItems && (
            <ul className="ml-6 mt-1 space-y-1">
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    to={subItem.path}
                    className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span>{subItem.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {index < items.length - 1 && (
            <div className="my-2 border-t border-gray-200 dark:border-gray-700" />
          )}
        </li>
      ))}
    </ul>
  );

  const handleLogout = () => {
    // ここにログアウト処理を実装
    console.log("ログアウト処理");
  };

  return (
    <div className="px-3 py-4 overflow-y-auto flex flex-col h-full">
      <div className="flex-grow">
        {activeSection === "business"
          ? renderNavigationItems(businessItems)
          : renderNavigationItems(otherItems)}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button
          variant="link"
          onClick={() =>
            setActiveSection(
              activeSection === "business" ? "other" : "business"
            )
          }
          className="my-0 mx-auto block text-sm font-medium text-primary hover:text-primary-dark underline"
        >
          {activeSection === "business" ? "その他" : "業務管理"}へ
        </Button>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="w-full flex items-center justify-start text-red-600 hover:text-red-700 hover:bg-red-100"
        >
          <LogOut className="w-5 h-5 mr-3" />
          ログアウト
        </Button>
      </div>
    </div>
  );
};

export default SidebarNavigation;
