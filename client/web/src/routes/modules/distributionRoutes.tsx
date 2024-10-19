import { Route, Routes } from "react-router-dom";
import AppLayout from "@/components/erp/distribution/AppLayout/AppLayout";
import DashboardPage from "@/pages/app/distribution/Dashboard/DashboardPage";
import InventoryListPage from "@/pages/app/distribution/Inventory/InventoryListPage";
import InventoryMovementPage from "@/pages/app/distribution/Inventory/InventoryMovementPage";
import InventoryStocktakingPage from "@/pages/app/distribution/Inventory/InventoryStocktakingPage";
import PurchaseOrdersPage from "@/pages/app/distribution/Purchasing/PurchaseOrdersPage";
import PurchaseDeliveriesPage from "@/pages/app/distribution/Purchasing/PurchaseDeliveriesPage";
import SalesOrdersPage from "@/pages/app/distribution/Sales/SalesOrdersPage";
import SalesShipmentsPage from "@/pages/app/distribution/Sales/SalesShipmentsPage";
import SalesInvoicesPage from "@/pages/app/distribution/Sales/SalesInvoicesPage";
import SalesReturnsPage from "@/pages/app/distribution/Sales/SalesReturnsPage";
import LocationMasterPage from "@/pages/app/distribution/Master/LocationMasterPage";
import ProductMasterPage from "@/pages/app/distribution/Master/ProductMasterPage";
import PartnerMasterPage from "@/pages/app/distribution/Master/PartnerMasterPage";
import DisposalScheduledPage from "@/pages/app/distribution/Disposal/DisposalScheduledPage";
import DisposalHistoryPage from "@/pages/app/distribution/Disposal/DisposalHistoryPage";
import ReportsPage from "@/pages/app/distribution/Reports/ReportsPage";
import SettingsPage from "@/pages/app/distribution/Settings/SettingsPage";

export const DistributionRoutes = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="inventory">
        <Route index element={<InventoryListPage />} />
        <Route path="movement" element={<InventoryMovementPage />} />
        <Route path="stocktaking" element={<InventoryStocktakingPage />} />
      </Route>
      <Route path="purchasing">
        <Route path="orders" element={<PurchaseOrdersPage />} />
        <Route path="deliveries" element={<PurchaseDeliveriesPage />} />
      </Route>
      <Route path="sales">
        <Route path="orders" element={<SalesOrdersPage />} />
        <Route path="shipments" element={<SalesShipmentsPage />} />
        <Route path="invoices" element={<SalesInvoicesPage />} />
        <Route path="returns" element={<SalesReturnsPage />} />
      </Route>
      <Route path="master">
        <Route path="locations" element={<LocationMasterPage />} />
        <Route path="products" element={<ProductMasterPage />} />
        <Route path="partners" element={<PartnerMasterPage />} />
      </Route>
      <Route path="disposal">
        <Route path="scheduled" element={<DisposalScheduledPage />} />
        <Route path="history" element={<DisposalHistoryPage />} />
      </Route>
      <Route path="reports" element={<ReportsPage />} />
      <Route path="settings" element={<SettingsPage />} />
    </Route>
  </Routes>
);
