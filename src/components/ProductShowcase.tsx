import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <section id="products" className="py-16 px-4 bg-gray-50 dark:bg-neutral-900" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our High-Performing Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Proven extensions and software with excellent retention rates. Users receive a $5 gift card upon installation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {product.name.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                
                <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
                  {product.epc}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 mb-4 border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center justify-center">
                    <span className="text-yellow-800 dark:text-yellow-200 font-semibold text-sm">
                      🎁 $5 Gift Card on Install
                    </span>
                  </div>
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