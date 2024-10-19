import { Route, Routes } from "react-router-dom";
import EmployeeManagement from "@/pages/app/hr/EmployeeManagement";
import PayrollManagement from "@/pages/app/hr/PayrollManagement";
import RecruitmentManagement from "@/pages/app/hr/RecruitmentManagement";

export const HRRoutes = () => (
  <Routes>
    <Route path="employees" element={<EmployeeManagement />} />
    <Route path="payroll" element={<PayrollManagement />} />
    <Route path="recruitment" element={<RecruitmentManagement />} />
  </Routes>
);
