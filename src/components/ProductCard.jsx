import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
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
        <h3 className="text-xl font-semibold text-primary mb-2">{product.name}</h3>
        <p className="text-text mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">₹{product.price}</span>
          <button
            className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-md hover:shadow-lg"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 