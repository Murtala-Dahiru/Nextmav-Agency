import React from 'react';
import { BarChart } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Fintech Revolution',
      description: 'Transforming a Leading Fintech Company with AI & Cloud Solutions',
      metrics: [
        { label: 'Cost Reduction', value: '30%' },
        { label: 'Security Incidents', value: '0' },
        { label: 'Process Efficiency', value: '+45%' },
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Healthcare Innovation',
      description: 'Modernizing Healthcare Operations with Smart Automation',
      metrics: [
        { label: 'Patient Care Time', value: '+40%' },
        { label: 'Data Processing', value: '5x' },
        { label: 'Cost Savings', value: '$12k' },
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="case-studies" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Success Stories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real results from our transformative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="relative h-48 mb-6">
                <img
                  src={study.image}
                  alt={study.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{study.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="text-center">
                      <div className="text-2xl font-bold gradient-text mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;