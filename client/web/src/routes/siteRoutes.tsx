import { Route, Routes } from "react-router-dom";
import Layout from "@/components/site/Layout/Layout";
import HomePage from "@/pages/site/Home/HomePage";
import FeaturesPage from "@/pages/site/Features/FeaturesPage";
import PricingPage from "@/pages/site/Pricing/PricingPage";
import AboutPage from "@/pages/site/About/AboutPage";
import ContactPage from "@/pages/site/Contact/ContactPage";

export const SiteRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  </Routes>
);
