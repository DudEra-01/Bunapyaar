import React from 'react';
import CustomizationFlow from '../customization/CustomizationFlow';

const CustomizationSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white rounded-lg shadow-lg my-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-olive-700">Customize Your Clothing</h2>
      <CustomizationFlow />
    </section>
  );
};

export default CustomizationSection; 