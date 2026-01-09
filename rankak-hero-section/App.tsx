import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StrategySection from './components/StrategySection';
import TestimonialBanner from './components/TestimonialBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-body brand-transition overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <StrategySection />
      <TestimonialBanner />
      <Footer />
    </div>
  );
}

export default App;