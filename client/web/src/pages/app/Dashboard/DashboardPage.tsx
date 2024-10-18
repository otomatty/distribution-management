import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const DashboardPage: React.FC = () => {
  // 仮のデータ
  const salesData = [
    { name: "1月", total: 1500 },
    { name: "2月", total: 1800 },
    { name: "3月", total: 2200 },
    { name: "4月", total: 2100 },
    { name: "5月", total: 2400 },
    { name: "6月", total: 2800 },
  ];

  const inventoryAlerts = [
    { id: 1, product: "商品A", status: "在庫不足" },
    { id: 2, product: "商品B", status: "過剰在庫" },
    { id: 3, product: "商品C", status: "要発注" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ダッシュボード</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>総売上</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">¥12,800,000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>総在庫数</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">5,230</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>未処理注文</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">18</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>月間売上推移</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="total" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>在庫アラート</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {inventoryAlerts.map((alert) => (
                <li key={alert.id} className="mb-2">
                  <span className="font-semibold">{alert.product}:</span>{" "}
                  {alert.status}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
