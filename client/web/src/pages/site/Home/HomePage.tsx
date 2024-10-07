import React from 'react';
import { Box } from '@mui/material';
import Hero from './components/Hero/Hero';
import Concepts from './components/Concepts/Concepts';
import Features from './components/Features/Features';
import Benefits from './components/Benefits/Benefits';
import UseCases from './components/UseCases/UseCases';
import Testimonials from './components/Testimonials/Testimonials';
import GettingStarted from './components/GettingStarted/GettingStarted';
import Faq from './components/Faq/Faq';
import Community from './components/Community/Community';
import Newsletter from './components/Newsletter/Newsletter';

const HomePage: React.FC = () => {
  return (
    <Box>
      <Hero />
      <Concepts />
      <Features />
      <Benefits />
      <UseCases />
      <Testimonials />
      <GettingStarted />
      <Faq />
      <Community />
      <Newsletter />
    </Box>
  );
};

export default HomePage;
