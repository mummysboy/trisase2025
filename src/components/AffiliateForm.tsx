import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  contact: string;
  website: string;
  trafficTypes: string[];
  dailyVolume: string;
}

const AffiliateForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyName: '',
    contact: '',
    website: '',
    trafficTypes: [],
    dailyVolume: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const trafficTypeOptions = [
    'Push Notifications',
    'Native Ads',
    'Social Media',
    'Email Marketing',
    'Display Banners',
    'Influencer Marketing',
    'Search Ads',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      trafficTypes: checked
        ? [...prev.trafficTypes, value]
        : prev.trafficTypes.filter(type => type !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For local testing - set this to true to use mock data
    const USE_MOCK = false;
    
    // EmailJS configuration
    const EMAILJS_SERVICE_ID = 'service_6d0a40f';
    const EMAILJS_TEMPLATE_ID = 'template_6mjrs5y';
    const EMAILJS_PUBLIC_KEY = 'y6p_Dcjgxlfkzbwio';

    try {
      console.log('USE_MOCK value:', USE_MOCK);
      
      if (USE_MOCK) {
        // Mock response for local testing
        console.log('Form data being submitted:', formData);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate successful response
        const mockResponse = { data: { success: true, message: 'Data submitted successfully' } };
        
        if (mockResponse.data.success) {
          alert('Thank you for your application! We\'ll get back to you soon.');
          console.log('Mock submission successful:', formData);
          setFormData({
            fullName: '',
            email: '',
            companyName: '',
            contact: '',
            website: '',
            trafficTypes: [],
            dailyVolume: '',
          });
        }
      } else {
        console.log('Attempting email notification submission...');
        // Email notification using EmailJS
        try {
          const templateParams = {
            to_email: 'demo@tris.com',
            to_name: 'Demo',
            from_name: formData.fullName,
            from_email: formData.email,
            company_name: formData.companyName,
            contact_info: formData.contact,
            website: formData.website || 'Not provided',
            traffic_types: formData.trafficTypes.join(', '),
            daily_volume: formData.dailyVolume,
            submission_date: new Date().toLocaleString(),
            message: `
New affiliate application received:

Full Name: ${formData.fullName}
Email: ${formData.email}
Company Name: ${formData.companyName}
Contact (Telegram/Skype): ${formData.contact}
Website: ${formData.website || 'Not provided'}
Traffic Types: ${formData.trafficTypes.join(', ')}
Daily Volume: ${formData.dailyVolume}

Submitted on: ${new Date().toLocaleString()}
            `.trim()
          };

          const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams,
            EMAILJS_PUBLIC_KEY
          );

          if (response.status === 200) {
            console.log('Email notification sent successfully');
            alert('Thank you for your application! We\'ll get back to you soon.');
            setFormData({
              fullName: '',
              email: '',
              companyName: '',
              contact: '',
              website: '',
              trafficTypes: [],
              dailyVolume: '',
            });
          } else {
            throw new Error('Failed to send email notification');
          }
          
        } catch (error) {
          console.error('Email submission error:', error);
          alert('There was an error submitting your application. Please try again.');
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="affiliate-form" className="py-16 px-4 bg-gray-100 dark:bg-neutral-900" style={{ backgroundColor: '#f3f4f6' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Apply to Advertise These Offers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join our network of successful performance marketers
          </p>
          
          <div className="text-center mb-8">
            <span className="text-green-600 dark:text-green-400 font-medium">
              🎁 Users receive a $5 gift card when they install our extension or software
            </span>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8" style={{ backgroundColor: '#ffffff' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Telegram/Teams *
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Website (Optional)
              </label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="Enter your website URL"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="dailyVolume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Daily Volume Estimate *
              </label>
              <select
                id="dailyVolume"
                name="dailyVolume"
                value={formData.dailyVolume}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select volume range</option>
                <option value="1-100">1-100 installs/day</option>
                <option value="100-500">100-500 installs/day</option>
                <option value="500-1000">500-1,000 installs/day</option>
                <option value="1000-5000">1,000-5,000 installs/day</option>
                <option value="5000+">5,000+ installs/day</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Traffic Types *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {trafficTypeOptions.map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    value={type}
                    checked={formData.trafficTypes.includes(type)}
                    onChange={handleCheckboxChange}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary text-lg px-8 py-4 disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default AffiliateForm; 