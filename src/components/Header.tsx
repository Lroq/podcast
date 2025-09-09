import React, { useState, useEffect } from 'react';
import { Mic, Menu, X } from 'lucide-react';
import SubscribeModal from './SubscribeModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
              <Mic className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">PodcastPro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
              Accueil
            </a>
            <a href="#episodes" className="text-gray-300 hover:text-white transition-colors duration-200">
              Épisodes
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
              À propos
            </a>
            <button 
              onClick={() => setIsSubscribeModalOpen(true)}
              className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              S'abonner
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700">
            <nav className="py-4 space-y-4">
              <a href="#home" className="block px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Accueil
              </a>
              <a href="#episodes" className="block px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Épisodes
              </a>
              <a href="#about" className="block px-4 py-2 text-gray-300 hover:text-white transition-colors">
                À propos
              </a>
              <div className="px-4">
                <button 
                  onClick={() => {
                    setIsSubscribeModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full text-white font-semibold"
                >
                  S'abonner
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      <SubscribeModal 
        isOpen={isSubscribeModalOpen} 
        onClose={() => setIsSubscribeModalOpen(false)} 
      />
    </header>
  );
};

export default Header;