import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/site/Layout/Layout";
import AuthLayout from "@/components/site/AuthLayout/AuthLayout";
import HomePage from "@/pages/site/Home/HomePage";
import FeaturesPage from "@/pages/site/Features/FeaturesPage";
import PricingPage from "@/pages/site/Pricing/PricingPage";
import AboutPage from "@/pages/site/About/AboutPage";
import ContactPage from "@/pages/site/Contact/ContactPage";
import LoginPage from "@/pages/site/Login/LoginPage";
import SignupPage from "@/pages/site/Signup/SignupPage";
import DashboardPage from "@/pages/app/Dashboard/DashboardPage";
import "./App.css";

function App() {
  return (
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
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
