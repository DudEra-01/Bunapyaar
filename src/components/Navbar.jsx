import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-accent">BunaPyaar</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-text hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#shop" className="text-text hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Shop
              </a>
              <a href="#customize" className="text-text hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Customize
              </a>
              <a href="#about" className="text-text hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-text hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text hover:text-accent focus:outline-none focus:text-accent"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-gray-200">
              <a href="#home" className="text-text hover:text-accent block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#shop" className="text-text hover:text-accent block px-3 py-2 rounded-md text-base font-medium">
                Shop
              </a>
              <a href="#customize" className="text-text hover:text-accent block px-3 py-2 rounded-md text-base font-medium">
                Customize
              </a>
              <a href="#about" className="text-text hover:text-accent block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-text hover:text-accent block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-accent text-white block px-3 py-2 rounded-md text-base font-medium mt-4"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 