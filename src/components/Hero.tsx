import React from 'react';
import { ArrowRight, Zap, Shield, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Strategy-Led Innovation Agency
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Pioneering the Future of
            <span className="gradient-text block mt-2">Business Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            NextMav is a strategy-led innovation agency helping modern businesses automate, scale, and brand for the next era. 
            Empowering businesses to scale smarter, operate faster, and secure the future through next-generation technology and design.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a href="#contact" className="btn-primary inline-flex items-center">
              Start Your Transformation
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="#services" 
               className="px-6 py-3 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 
                        rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200 
                        font-semibold inline-flex items-center justify-center">
              Explore Our Divisions
            </a>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Zap, title: 'AI Automation', desc: 'Smart workflows' },
              { icon: Shield, title: 'Cloud Security', desc: 'Enterprise-grade' },
              { icon: TrendingUp, title: 'Growth Marketing', desc: 'Data-driven results' },
              { icon: Users, title: 'Brand Strategy', desc: 'Premium positioning' },
            ].map((feature, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Projects Delivered', value: '50+' },
            { label: 'Client Success Rate', value: '99%' },
            { label: 'Years of Innovation', value: '1+' },
            { label: 'Business Value Created', value: '$50k+' },
          ].map((stat, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-500/30 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-10 w-5 h-5 bg-blue-500/30 rounded-full animate-pulse delay-700"></div>
      </div>
    </section>
  );
};

export default Hero;