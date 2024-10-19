import { Route, Routes } from "react-router-dom";
import FinanceDashboard from "@/pages/app/finance/FinanceDashboard";
import Accounting from "@/pages/app/finance/Accounting";
import Budgeting from "@/pages/app/finance/Budgeting";

export const FinanceRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<FinanceDashboard />} />
    <Route path="accounting" element={<Accounting />} />
    <Route path="budgeting" element={<Budgeting />} />
  </Routes>
);
