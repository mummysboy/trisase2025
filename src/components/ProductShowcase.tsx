import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Product {
  name: string;
  url: string;
  epc: string;
  description: string;
  logo?: string;
}

const products: Product[] = [
  {
    name: "AdsHide",
    url: "https://adshide.com/",
    epc: "Up to 30¢/user/day",
    description: "Privacy-first ad blocker extension with high retention.",
  },
  {
    name: "WebOS Toolkit",
    url: "https://webostoolkit.com/",
    epc: "6–20¢/user/day",
    description: "Browser utility extension with sticky usage.",
  },
  {
    name: "AIPC Protect",
    url: "https://www.aipcprotect.com/",
    epc: "10–30¢/user/day",
    description: "Lightweight antivirus software with broad appeal.",
  },
];

const ProductShowcase: React.FC = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="products" className="py-16 px-4 bg-gray-50" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our High-Performing Products
          </h2>
          <p className="text-lg text-gray-600">
            Proven extensions and software with excellent retention rates. Users receive a $5 gift card upon installation.
          </p>
        </motion.div>

        <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 100 }}
              animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="card"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.name.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-green-600 font-semibold mb-3">
                  {product.epc}
                </p>
                
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-center mb-4">
                  <span className="text-gray-600 text-sm font-medium">
                    $5 Gift Card on Install
                  </span>
                </div>
                
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-block"
                >
                  Preview Site
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 