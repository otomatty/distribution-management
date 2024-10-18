import React from "react";
import HeroSection from "./components/HeroSection";
import KeyFeaturesHighlight from "./components/KeyFeaturesHighlight";
import ProblemSolutionSection from "./components/ProblemSolutionSection";
import UseCases from "./components/UseCases";
import StatisticsAndBenefits from "./components/StatisticsAndBenefits";
import Testimonials from "./components/Testimonials";
import PlanComparison from "./components/PlanComparison";
import Faq from "./components/Faq";
import ContactSection from "./components/ContactSection";
import NewsUpdates from "./components/NewsUpdates";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <KeyFeaturesHighlight />
      <ProblemSolutionSection />
      <UseCases />
      <StatisticsAndBenefits />
      <Testimonials />
      <PlanComparison />
      <Faq />
      <ContactSection />
      <NewsUpdates />
    </>
  );
};

export default HomePage;
