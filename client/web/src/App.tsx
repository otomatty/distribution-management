import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/site/Layout/Layout";
import AuthLayout from "@/components/site/AuthLayout/AuthLayout";
import AppLayout from "@/components/app/AppLayout/AppLayout";
import HomePage from "@/pages/site/Home/HomePage";
import FeaturesPage from "@/pages/site/Features/FeaturesPage";
import PricingPage from "@/pages/site/Pricing/PricingPage";
import AboutPage from "@/pages/site/About/AboutPage";
import ContactPage from "@/pages/site/Contact/ContactPage";
import LoginPage from "@/pages/site/Login/LoginPage";
import SignupPage from "@/pages/site/Signup/SignupPage";
import DashboardPage from "@/pages/app/Dashboard/DashboardPage";
import InventoryListPage from "@/pages/app/Inventory/InventoryListPage";
import InventoryMovementPage from "@/pages/app/Inventory/InventoryMovementPage";
import InventoryStocktakingPage from "@/pages/app/Inventory/InventoryStocktakingPage";
import PurchaseOrdersPage from "@/pages/app/Purchasing/PurchaseOrdersPage";
import PurchaseDeliveriesPage from "@/pages/app/Purchasing/PurchaseDeliveriesPage";
import PurchasePaymentsPage from "@/pages/app/Purchasing/PurchasePaymentsPage";
import SalesOrdersPage from "@/pages/app/Sales/SalesOrdersPage";
import SalesShipmentsPage from "@/pages/app/Sales/SalesShipmentsPage";
import SalesInvoicesPage from "@/pages/app/Sales/SalesInvoicesPage";
import SalesPaymentsPage from "@/pages/app/Sales/SalesPaymentsPage";
import SalesReturnsPage from "@/pages/app/Sales/SalesReturnsPage";
import DisposalScheduledPage from "@/pages/app/Disposal/DisposalScheduledPage";
import DisposalHistoryPage from "@/pages/app/Disposal/DisposalHistoryPage";
import ProductMasterPage from "@/pages/app/Master/ProductMasterPage";
import PartnerMasterPage from "@/pages/app/Master/PartnerMasterPage";
import LocationMasterPage from "@/pages/app/Master/LocationMasterPage";
import ReportsPage from "@/pages/app/Reports/ReportsPage";
import SettingsPage from "@/pages/app/Settings/SettingsPage";
import ProfilePage from "@/pages/app/Profile/ProfilePage";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
          <Route element={<AppLayout />}>
            <Route path="/home" element={<DashboardPage />} />
            <Route path="/inventory">
              <Route path="list" element={<InventoryListPage />} />
              <Route path="movement" element={<InventoryMovementPage />} />
              <Route
                path="stocktaking"
                element={<InventoryStocktakingPage />}
              />
            </Route>
            <Route path="/purchasing">
              <Route path="orders" element={<PurchaseOrdersPage />} />
              <Route path="deliveries" element={<PurchaseDeliveriesPage />} />
              <Route path="payments" element={<PurchasePaymentsPage />} />
            </Route>
            <Route path="/sales">
              <Route path="orders" element={<SalesOrdersPage />} />
              <Route path="shipments" element={<SalesShipmentsPage />} />
              <Route path="invoices" element={<SalesInvoicesPage />} />
              <Route path="payments" element={<SalesPaymentsPage />} />
              <Route path="returns" element={<SalesReturnsPage />} />
            </Route>
            <Route path="/disposal">
              <Route path="scheduled" element={<DisposalScheduledPage />} />
              <Route path="history" element={<DisposalHistoryPage />} />
            </Route>
            <Route path="/master">
              <Route path="products" element={<ProductMasterPage />} />
              <Route path="partners" element={<PartnerMasterPage />} />
              <Route path="locations" element={<LocationMasterPage />} />
            </Route>
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
