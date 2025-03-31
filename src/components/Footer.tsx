
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-monica text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-serif mb-6">
              MONICA<br />INTERIORS
            </h3>
            <p className="max-w-xs text-white/70">
              Creating beautiful, functional spaces that inspire and nurture for over a decade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-4">Location</h4>
              <p className="text-white/70">
                123 Design Avenue<br />
                Suite 500<br />
                New York, NY 10001
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Contact</h4>
              <p className="text-white/70">
                (212) 555-7890<br />
                info@monicainteriors.com
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-monica-sage transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-monica-sage transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-monica-sage transition-colors duration-300">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Monica Interiors. All rights reserved.
          </p>
          
          <div className="flex space-x-4 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
