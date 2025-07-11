import React from 'react';

const CustomizationSection = () => {
  return (
    <section id="customize" className="py-20 bg-gradient-to-br from-background to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-primary mb-6">Customize Your Perfect Piece</h2>
            <p className="text-xl text-text leading-relaxed mb-8">
              You choose design, size, color — we handcraft it for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-sm font-medium text-text">Design</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-sm font-medium text-text">Size</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-sm font-medium text-text">Color</span>
              </div>
            </div>
          </div>

          {/* Icon/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-white text-center">
                <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <p className="text-lg font-medium">100% Customizable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection; 