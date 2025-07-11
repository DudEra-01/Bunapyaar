import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-text leading-relaxed">
              <p>
                BunaPyaar started from Mom's crochet skills, a passion that turned into a mission to preserve and promote traditional handcrafting techniques.
              </p>
              <p>
                Today, we work with skilled village artists who bring generations of expertise to every piece they create. Each item tells a story of tradition, love, and craftsmanship.
              </p>
              <p>
                From cozy sweaters to elegant shawls, every piece is handmade with care, ensuring that you receive not just clothing, but a piece of art woven with love.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-primary text-white px-6 py-3 rounded-lg shadow-md">
                <span className="font-semibold">100+</span> Village Artists
              </div>
              <div className="bg-accent text-white px-6 py-3 rounded-lg shadow-md">
                <span className="font-semibold">5000+</span> Happy Customers
              </div>
              <div className="bg-primary text-white px-6 py-3 rounded-lg shadow-md">
                <span className="font-semibold">50+</span> Unique Designs
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-white text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <p className="text-lg font-medium">Handcrafted with Love</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">Est. 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 