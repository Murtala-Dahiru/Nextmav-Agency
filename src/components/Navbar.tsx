import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold gradient-text">
              NextMav
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#services" className="nav-link">Our Divisions</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#case-studies" className="nav-link">Case Studies</a>
            <a href="#partners" className="nav-link">Partners</a>
            <a href="#contact" className="btn-primary">Start Your Project</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-200"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block nav-link">Our Divisions</a>
            <a href="#about" className="block nav-link">About</a>
            <a href="#case-studies" className="block nav-link">Case Studies</a>
            <a href="#partners" className="block nav-link">Partners</a>
            <a href="#contact" className="block btn-primary text-center mt-4">Start Your Project</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;