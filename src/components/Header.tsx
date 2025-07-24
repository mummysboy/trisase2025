import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { useInView } from 'react-intersection-observer';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToForm = () => {
    document.getElementById('affiliate-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-gray-200" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo size="lg" showText={false} customSize="w-32 h-12" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  About Us
                </a>
                <a href="#products" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Products
                </a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button
                onClick={scrollToForm}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#about" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                About Us
              </a>
              <a href="#products" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Products
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <div className="pt-4">
                <motion.button
                  onClick={scrollToForm}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="bg-white py-16 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div ref={heroRef} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Smarter Monetization Starts with Tris
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Tris helps performance marketers scale with high-retention browser extensions and antivirus software.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8" style={{ backgroundColor: '#eff6ff' }}>
              <p className="text-blue-800 font-semibold">
                Up to 36¢/user/day • Weekly new creatives • Tier 1 GEO tested • $5 gift card incentive
              </p>
            </div>
            
            <motion.button
              onClick={scrollToForm}
              className="btn-primary text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply to Advertise
            </motion.button>
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header; 