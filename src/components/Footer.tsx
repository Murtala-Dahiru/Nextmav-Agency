import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/YourHandle',
      handle: '@YourHandle'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/YourHandle',
      handle: '@YourHandle'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/nextmav',
      handle: 'NextMav'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@nextmav',
      handle: 'NextMav Channel'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/nextmav',
      handle: 'NextMav'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold gradient-text mb-4">NextMav</h3>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              Pioneering the future of business innovation through technology and design. 
              We help modern businesses automate, scale, and brand for the next era.
            </p>
            
            {/* Social Media Links */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center 
                                  hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 
                                  group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25
                                  border border-gray-700 group-hover:border-blue-400">
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 
                                  bg-gray-800 text-white text-xs px-3 py-2 rounded-lg
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                  border border-gray-600 shadow-lg whitespace-nowrap">
                      {social.handle}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 
                                    w-0 h-0 border-l-4 border-r-4 border-t-4 
                                    border-l-transparent border-r-transparent border-t-gray-800"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* NextMav Tech */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">NextMav Tech</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white hover:text-blue-400 transition-colors duration-200">AI Automation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white hover:text-blue-400 transition-colors duration-200">Cloud Infrastructure</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white hover:text-blue-400 transition-colors duration-200">Data Analytics</a></li>
            </ul>
          </div>

          {/* NextMav Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">NextMav Media</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white hover:text-blue-400 transition-colors duration-200">Brand Strategy</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white hover:text-blue-400 transition-colors duration-200">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white hover:text-blue-400 transition-colors duration-200">Digital Marketing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white hover:text-blue-400 transition-colors duration-200">Graphic Design</a></li>
            </ul>
          </div>

          {/* Contact & Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-white hover:text-blue-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#case-studies" className="hover:text-white hover:text-blue-400 transition-colors duration-200">Case Studies</a></li>
              <li><a href="#partners" className="hover:text-white hover:text-blue-400 transition-colors duration-200">Partners</a></li>
              <li><a href="#blog" className="hover:text-white hover:text-blue-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#contact" className="hover:text-white hover:text-blue-400 transition-colors duration-200">Contact</a></li>
            </ul>
            
            <div className="mt-6">
              <p className="text-gray-400 text-sm">Nextmavagency@gmail.com</p>
              <p className="text-gray-400 text-sm">+2348039326564</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} NextMav. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white hover:text-blue-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;