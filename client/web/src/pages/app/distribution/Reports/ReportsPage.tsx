import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const ReportsPage: React.FC = () => {
  const salesData = [
    { month: "1月", sales: 4000 },
    { month: "2月", sales: 3000 },
    { month: "3月", sales: 5000 },
    { month: "4月", sales: 4500 },
    { month: "5月", sales: 6000 },
    { month: "6月", sales: 5500 },
  ];

  const inventoryData = [
    { category: "カテゴリA", value: 400 },
    { category: "カテゴリB", value: 300 },
    { category: "カテゴリC", value: 500 },
    { category: "カテゴリD", value: 200 },
    { category: "カテゴリE", value: 450 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">レポート・分析</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>月間売上推移</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>カテゴリ別在庫数</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={inventoryData}>
                <XAxis dataKey="category" />
                <YAxis />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportsPage;
