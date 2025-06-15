import React from 'react';
import { Star, Award, Shield, CheckCircle } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&h=100&q=80',
      tier: 'Strategic'
    },
    {
      name: 'Google Cloud',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&h=100&q=80',
      tier: 'Strategic'
    },
    {
      name: 'Amazon AWS',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=200&h=100&q=80',
      tier: 'Strategic'
    },
    {
      name: 'Salesforce',
      logo: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&w=200&h=100&q=80',
      tier: 'Technology'
    },
    {
      name: 'Adobe',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&h=100&q=80',
      tier: 'Technology'
    },
    {
      name: 'IBM',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&h=100&q=80',
      tier: 'Technology'
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'Gold-tier partnerships with leading technology providers'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II compliant with enterprise-grade security standards'
    },
    {
      icon: Star,
      title: 'Innovation Leader',
      description: 'Recognized as a top innovation partner by major tech companies'
    }
  ];

  return (
    <section id="partners" className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Elite Partnership Network
          </div>
          <h2 className="section-title">Trusted by Global Leaders</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            We maintain exclusive partnerships with the world's most innovative technology companies, 
            ensuring our clients receive cutting-edge solutions and unparalleled support.
          </p>
        </div>

        {/* Achievement badges */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">{achievement.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Partner logos with premium styling */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 border border-gray-100 dark:border-gray-600">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 w-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-center mt-3">
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                    {partner.tier} Partner
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium CTA section */}
        <div className="card text-center bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-100 dark:border-blue-800">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Join Our Exclusive Partner Network</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Partner with NextMav and gain access to our elite network of technology leaders, 
              exclusive resources, and collaborative opportunities that drive mutual growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Apply for Partnership
              </a>
              <a href="#" className="px-6 py-3 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200 font-semibold">
                Partnership Benefits
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;