import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BioSection from './components/BioSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import AboutMeSection from './components/AboutMeSection';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow-md px-8 py-4">
        <Header />
      </header>
      <main className="flex-grow">
        <BioSection />
        <PortfolioSection />
        <ServicesSection />
         <AboutMeSection />
        <ContactSection />
       
      </main>
      <Footer />
    </div>
  );
}

export default App;