import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mounika text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-serif mb-6">
              MOUNIKA
              <br />
              INTERIORS
            </h3>
            <p className="max-w-xs text-white/70">
              Creating beautiful, functional spaces that inspire and nurture for
              over a decade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-4">Location</h4>
              <p className="text-white/70">
                ChandhaNagar
                <br />
                Hyderabad, India
                <br />
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Contact</h4>
              <p className="text-white/70">
                +91 9885185978
                <br />
                +91 7730085978
                <br />
                mounikainteriors5978@gmail.com
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/mounika_interiors"
                  className="hover:text-mounika-sage transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-mounika-sage transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-mounika-sage transition-colors duration-300"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-white/70 text-sm mb-2 md:mb-0 md:mr-4">
              © {new Date().getFullYear()} Mounika Interiors. All rights reserved.
            </p>
            <p className="text-white/70 text-sm">
              Made by <a 
                href="https://techmocha.in" 
                className="text-mounika-sage hover:underline transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Techmocha
              </a>
            </p>
          </div>

          <div className="flex space-x-4 text-sm text-white/70 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;