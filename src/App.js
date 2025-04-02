import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BioSection from "./components/BioSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import AboutMeSection from "./components/AboutMeSection";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Start loading
        setLoading(true);

        // Simulate fetching data for all components
        // Replace these with actual fetch calls for your components
        const fetchBio = new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate BioSection fetch
        const fetchPortfolio = new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate PortfolioSection fetch
        const fetchServices = new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate ServicesSection fetch
        const fetchAboutMe = new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate AboutMeSection fetch
        const fetchContact = new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate ContactSection fetch

        // Wait for all fetches to complete
        await Promise.all([fetchBio, fetchPortfolio, fetchServices, fetchAboutMe, fetchContact]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // Stop loading
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

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