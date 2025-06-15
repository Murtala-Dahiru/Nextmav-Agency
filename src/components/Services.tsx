import React from 'react';
import { Cloud, Bot, Shield, Zap, Palette, Globe, TrendingUp, BarChart } from 'lucide-react';

const Services = () => {
  const divisions = [
    {
      title: 'NextMav Tech',
      subtitle: 'Modern tech infrastructure, smart automation, and enterprise-grade performance.',
      services: [
        {
          icon: Bot,
          title: 'AI Automation & Workflow',
          description: 'Empower your business with intelligent automation that boosts productivity and reduces operational friction.',
          features: [
            'AI Workflow Automation',
            'Custom Chatbots & Virtual Assistants',
            'Robotic Process Automation (RPA)',
            'AI Tool Integration (OpenAI, Google Cloud AI, etc.)',
          ],
        },
        {
          icon: Cloud,
          title: 'Cloud Infrastructure Optimization',
          description: 'Scale smarter with secure, efficient, and cost-optimized cloud solutions tailored for performance.',
          features: [
            'Cloud Migration & Strategy',
            'Scalable Cloud Architecture',
            'Cost Optimization & Monitoring',
            'Cloud Security & Compliance',
            'Managed Cloud Services',
          ],
        },
        {
          icon: BarChart,
          title: 'Data Analytics & Intelligence',
          description: 'Transform raw data into actionable insights that drive strategic decision-making and business growth.',
          features: [
            'Data Cleaning & Preparation',
            'Dashboard & Visualization (Power BI, Tableau, Looker, etc.)',
            'Business Intelligence Reports',
            'Custom Analytics Projects',
            'Data Strategy Consulting',
          ],
        },
      ],
    },
    {
      title: 'NextMav Media',
      subtitle: 'Elite digital storytelling, precision branding, and performance marketing.',
      services: [
        {
          icon: Palette,
          title: 'Brand Strategy & Identity',
          description: 'Define your brand with clarity, authority, and emotional impact.',
          features: [
            'Brand Positioning & Voice',
            'Visual Identity & Design Systems',
            'Naming & Messaging',
            'Rebranding & Brand Refresh',
            'Brand Implementation & consistency',
          ],
        },
        {
          icon: Zap,
          title: 'Graphic Design',
          description: 'Visual assets that inspire action and leave a lasting impression.',
          features: [
            'Marketing Collateral (Flyers, Brochures, Pitch Decks)',
            'Digital Assets (Social Media, Ads, Email Banners)',
            'Packaging Design',
            'Motion Graphics & Animation',
            'Illustration & Custom Graphic (Infographics, Custom Icons, Character Design)',
          ],
        },
        {
          icon: Globe,
          title: 'Web Design & Development',
          description: 'High-converting websites built to perform and reflect your brand\'s excellence.',
          features: [
            'UI/UX Design',
            'Responsive Web Development (React, WordPress, etc.)',
            'Landing Pages & Funnels',
            'E-commerce Development',
            'Maintenance & Performance Optimization',
          ],
        },
        {
          icon: TrendingUp,
          title: 'Digital Marketing & Social Strategy',
          description: 'Growth-focused strategies tailored to your audience, platforms, and KPIs.',
          features: [
            'Social Media Management',
            'Search Engine Optimization (SEO)',
            'Paid Ads (Google, Meta, LinkedIn)',
            'Email Marketing & Automation',
            'Analytics, Tracking & Funnel Optimization',
          ],
        },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Divisions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Whether you're launching or scaling, we align technology and brand into a single, strategic motion.
          </p>
        </div>

        {divisions.map((division, divIndex) => (
          <div key={divIndex} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold gradient-text mb-4">{division.title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {division.subtitle}
              </p>
            </div>

            <div className={`grid gap-8 ${division.services.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
              {division.services.map((service, index) => (
                <div key={index} className="card group hover:scale-105 transition-transform duration-300">
                  <service.icon className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;