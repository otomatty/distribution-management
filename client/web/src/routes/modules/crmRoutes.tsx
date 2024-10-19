import { Route, Routes } from "react-router-dom";
import CustomerManagement from "@/pages/app/crm/CustomerManagement";
import LeadManagement from "@/pages/app/crm/LeadManagement";
import CampaignManagement from "@/pages/app/crm/CampaignManagement";

export const CRMRoutes = () => (
  <Routes>
    <Route path="customers" element={<CustomerManagement />} />
    <Route path="leads" element={<LeadManagement />} />
    <Route path="campaigns" element={<CampaignManagement />} />
  </Routes>
);
