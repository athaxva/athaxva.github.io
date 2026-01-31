import React from 'react';
import { profileData, navLinks } from '../data/mock';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-semibold tracking-tight hover:opacity-80 transition-opacity duration-200"
            >
              <span className="gradient-text">{profileData.name}</span>
            </a>
            <p className="text-gray-500 text-sm mt-2">
              {profileData.field} · {profileData.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass hover:bg-white/10 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-gray-600 text-sm">
            Built with <Heart className="w-3.5 h-3.5 text-red-500" /> for AI Security
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
