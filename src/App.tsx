import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProductShowcase from './components/ProductShowcase';
import AffiliateForm from './components/AffiliateForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white" style={{ backgroundColor: '#ffffff' }}>
      <Header />
      <AboutSection />
      <ProductShowcase />
      <AffiliateForm />
      <Footer />
    </div>
  );
};

export default App; 