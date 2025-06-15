import React, { useState } from 'react';
import { Menu, X, ChevronRight, ArrowRight, CheckCircle, Zap, Shield, Users, BarChart, Cloud, Bot, Lock } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Partners />
        <Contact />
        <Blog />
      </main>

      <Footer />
    </div>
  );
}

export default App;