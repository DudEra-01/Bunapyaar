import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">BunaPyaar</h3>
            <p className="text-gray-100">
              Handcrafted with love by village artists.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-100 hover:text-white transition-colors">
                Home
              </a>
              <a href="#shop" className="block text-gray-100 hover:text-white transition-colors">
                Shop
              </a>
              <a href="#customize" className="block text-gray-100 hover:text-white transition-colors">
                Customize
              </a>
              <a href="#about" className="block text-gray-100 hover:text-white transition-colors">
                About
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-2">
              <a 
                href="https://instagram.com/bunapyaar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start text-gray-100 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a 
                href="mailto:hello@bunapyaar.com" 
                className="flex items-center justify-center md:justify-start text-gray-100 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-xl font-semibold">
            "Kapde nahi, pyaar buna hai."
          </p>
          <p className="text-gray-100 mt-2">
            Not just clothes, but love woven into every thread.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 