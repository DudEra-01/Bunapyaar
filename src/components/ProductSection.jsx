import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Cozy Winter Sweater",
      description: "Hand-knitted wool sweater perfect for cold winter days. Available in multiple colors and sizes.",
      price: "2,499"
    },
    {
      id: 2,
      name: "Summer Cotton Top",
      description: "Lightweight cotton top with beautiful hand-embroidered patterns. Perfect for summer wear.",
      price: "1,299"
    },
    {
      id: 3,
      name: "Traditional Shawl",
      description: "Elegant hand-woven shawl with intricate designs. Makes a perfect gift for special occasions.",
      price: "3,999"
    },
    {
      id: 4,
      name: "Baby Blanket Set",
      description: "Soft and warm baby blanket made with premium yarn. Includes matching booties and cap.",
      price: "1,899"
    }
  ];

  return (
    <section id="shop" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Handcrafted Collection</h2>
          <p className="text-xl text-text max-w-3xl mx-auto">
            Each piece is carefully crafted by our skilled artisans, ensuring quality and uniqueness in every stitch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection; 