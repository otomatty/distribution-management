import { Route, Routes } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { FinanceRoutes } from "./modules/financeRoutes";
import { HRRoutes } from "./modules/hrRoutes";
import { DistributionRoutes } from "./modules/distributionRoutes";
import { CRMRoutes } from "./modules/crmRoutes";
import { CMSRoutes } from "./modules/cmsRoutes";
import { ScheduleRoutes } from "./modules/scheduleRoutes";
import Dashboard from "@/pages/app/Dashboard/DashboardPage";

export const AppRoutes = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="finance/*" element={<FinanceRoutes />} />
      <Route path="hr/*" element={<HRRoutes />} />
      <Route path="distribution/*" element={<DistributionRoutes />} />
      <Route path="crm/*" element={<CRMRoutes />} />
      <Route path="cms/*" element={<CMSRoutes />} />
      <Route path="schedule/*" element={<ScheduleRoutes />} />
    </Route>
  </Routes>
);
