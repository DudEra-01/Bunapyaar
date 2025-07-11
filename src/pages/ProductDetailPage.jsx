import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Cozy Winter Sweater",
    description: "Hand-knitted wool sweater perfect for cold winter days. Available in multiple colors and sizes.",
    price: "2,499",
    details: "Made from 100% pure wool. Machine washable. Available in S, M, L, XL.",
  },
  {
    id: 2,
    name: "Summer Cotton Top",
    description: "Lightweight cotton top with beautiful hand-embroidered patterns. Perfect for summer wear.",
    price: "1,299",
    details: "Breathable cotton. Hand-embroidered. Available in S, M, L, XL.",
  },
  {
    id: 3,
    name: "Traditional Shawl",
    description: "Elegant hand-woven shawl with intricate designs. Makes a perfect gift for special occasions.",
    price: "3,999",
    details: "Premium yarn. Unique patterns. 2m x 0.7m size.",
  },
  {
    id: 4,
    name: "Baby Blanket Set",
    description: "Soft and warm baby blanket made with premium yarn. Includes matching booties and cap.",
    price: "1,899",
    details: "Gentle on skin. Blanket: 1m x 1m. Booties and cap included.",
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">Product Not Found</h2>
          <button onClick={() => navigate(-1)} className="bg-primary text-white px-4 py-2 rounded">Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-primary mb-4">{product.name}</h1>
        <p className="text-lg text-text mb-2">{product.description}</p>
        <p className="text-base text-gray-600 mb-4">{product.details}</p>
        <div className="text-2xl font-bold text-primary mb-6">₹{product.price}</div>
        <button onClick={() => navigate(-1)} className="bg-primary text-white px-4 py-2 rounded font-medium">Back to Shop</button>
      </div>
    </div>
  );
};

export default ProductDetailPage; 