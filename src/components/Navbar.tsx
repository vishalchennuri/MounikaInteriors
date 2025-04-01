
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
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" 
          : "bg-white/80 backdrop-blur-sm py-5"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <a 
          href="#" 
          className="text-[#1a1a1a] text-xl font-serif font-medium hover-lift tracking-wide"
        >
          MOUNIKA<br />INTERIORS
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="text-[#1a1a1a] font-medium hover:text-[#1a1a1a]/70 elegant-underline tracking-wide">Home</a>
          <a href="#about" className="text-[#1a1a1a] font-medium hover:text-[#1a1a1a]/70 elegant-underline tracking-wide">About</a>
          <a href="#expertise" className="text-[#1a1a1a] font-medium hover:text-[#1a1a1a]/70 elegant-underline tracking-wide">Expertise</a>
          <a href="#projects" className="text-[#1a1a1a] font-medium hover:text-[#1a1a1a]/70 elegant-underline tracking-wide">Projects</a>
          <a href="#shop" className="text-[#1a1a1a] font-medium hover:text-[#1a1a1a]/70 elegant-underline tracking-wide">Shop</a>
          <a href="#contact" className="text-[#1a1a1a] font-medium hover:text-[#1a1a1a]/70 elegant-underline tracking-wide">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#1a1a1a]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-md py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-[#1a1a1a] font-medium py-2 hover:text-[#1a1a1a]/70 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-[#1a1a1a] font-medium py-2 hover:text-[#1a1a1a]/70 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#expertise" 
              className="text-[#1a1a1a] font-medium py-2 hover:text-[#1a1a1a]/70 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Expertise
            </a>
            <a 
              href="#projects" 
              className="text-[#1a1a1a] font-medium py-2 hover:text-[#1a1a1a]/70 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#shop" 
              className="text-[#1a1a1a] font-medium py-2 hover:text-[#1a1a1a]/70 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
            <a 
              href="#contact" 
              className="text-[#1a1a1a] font-medium py-2 hover:text-[#1a1a1a]/70"
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
