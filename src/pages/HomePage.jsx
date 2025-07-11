import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import CustomizationSection from '../components/CustomizationSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import { useState } from 'react';

function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({ size: '', color: '', design: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <CustomizationSection />
      {/* Customization Form Section */}
      <section className="py-12 bg-warmWhite flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Customize Your Order</h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 w-full max-w-md">
          <label className="font-medium">Size
            <select name="size" value={form.size} onChange={handleChange} required className="mt-1 p-2 border rounded w-full">
              <option value="">Select size</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </select>
          </label>
          <label className="font-medium">Color
            <input name="color" value={form.color} onChange={handleChange} required placeholder="e.g. Olive Green" className="mt-1 p-2 border rounded w-full" />
          </label>
          <label className="font-medium">Design
            <input name="design" value={form.design} onChange={handleChange} required placeholder="e.g. Floral, Stripes" className="mt-1 p-2 border rounded w-full" />
          </label>
          <button type="submit" className="bg-primary text-white font-semibold py-2 rounded hover:bg-lime-600 transition">Submit</button>
        </form>
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-xl font-bold mb-2 text-primary">Thank you!</h3>
              <p className="mb-4">Your customization request has been received.</p>
              <button onClick={closePopup} className="bg-primary text-white px-4 py-2 rounded font-medium">Close</button>
            </div>
          </div>
        )}
      </section>
      <AboutSection />
      <Footer />
    </div>
  );
}

export default HomePage; 