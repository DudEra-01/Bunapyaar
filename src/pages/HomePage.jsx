import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import CustomizationSection from '../components/CustomizationSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <CustomizationSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default HomePage; 