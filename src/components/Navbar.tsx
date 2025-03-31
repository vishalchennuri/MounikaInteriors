
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <a 
          href="#" 
          className="text-monica text-xl font-serif font-medium hover-lift uppercase"
        >
          Monica<br />Interiors
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          <a href="#home" className="text-monica hover:text-monica/70 uppercase text-sm">Home</a>
          <a href="#expertise" className="text-monica hover:text-monica/70 uppercase text-sm">Expertise</a>
          <a href="#projects" className="text-monica hover:text-monica/70 uppercase text-sm">Projects</a>
          <a href="#shop" className="text-monica hover:text-monica/70 uppercase text-sm">Shop</a>
          <a href="#about" className="text-monica hover:text-monica/70 uppercase text-sm">About</a>
          <a href="#contact" className="text-monica hover:text-monica/70 uppercase text-sm">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-monica"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-monica py-2 hover:text-monica/70 uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#expertise" 
              className="text-monica py-2 hover:text-monica/70 uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Expertise
            </a>
            <a 
              href="#projects" 
              className="text-monica py-2 hover:text-monica/70 uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#shop" 
              className="text-monica py-2 hover:text-monica/70 uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
            <a 
              href="#about" 
              className="text-monica py-2 hover:text-monica/70 uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-monica py-2 hover:text-monica/70 uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
