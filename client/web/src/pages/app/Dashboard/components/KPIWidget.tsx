import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface KPIWidgetProps {
  title: string;
  value: number;
  unit: string;
  change: number;
  changeType: "increase" | "decrease";
}

export const KPIWidget: React.FC<KPIWidgetProps> = ({
  title,
  value,
  unit,
  change,
  changeType,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        <span className="ml-1 text-gray-600">{unit}</span>
      </div>
      <div
        className={`flex items-center mt-2 ${
          changeType === "increase" ? "text-green-600" : "text-red-600"
        }`}
      >
        {changeType === "increase" ? (
          <ArrowUpIcon className="h-4 w-4 mr-1" />
        ) : (
          <ArrowDownIcon className="h-4 w-4 mr-1" />
        )}
        <span className="text-sm font-medium">{change}%</span>
      </div>
    </div>
  );
};
