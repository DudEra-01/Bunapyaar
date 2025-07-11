import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-background to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              BunaPyaar
            </h1>
            <p className="text-xl md:text-2xl text-text mb-8 leading-relaxed">
              Designed by you, handmade by us.
            </p>
            <button className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Customizing
            </button>
          </div>

          {/* Placeholder Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-white text-center">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <p className="text-lg font-medium">Handcrafted with Love</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 