import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="h-64 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
        <div className="text-white text-center">
          <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <p className="text-sm font-medium">{product.name}</p>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-accent mb-2">{product.name}</h3>
        <p className="text-text mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-accent">₹{product.price}</span>
          <button className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 