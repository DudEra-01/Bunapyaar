import React from 'react';
import { motion } from 'framer-motion';
import { useCustomization } from '../CustomizationContext';

const categories = [
  { label: 'Sweater', icon: '🧥' },
  { label: 'Hoodie', icon: '🧢' },
  { label: 'Gloves', icon: '🧤' },
  { label: 'Muffler', icon: '🧣' },
  { label: 'Socks', icon: '🧦' },
  { label: 'Hat', icon: '🎩' },
  { label: 'Shrug / Top / Crop Top', icon: '👚' },
];

const StepCategory = () => {
  const { state, setCategory, setStep } = useCustomization();

  const handleSelect = (cat) => {
    setCategory(cat);
    setStep(1); // go to next step
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <h3 className="text-2xl font-semibold mb-6 text-olive-700">Step 1: Select Clothing Category</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xl">
        {categories.map((cat) => (
          <motion.button
            key={cat.label}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleSelect(cat.label)}
            className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-transparent hover:border-olive-400 transition-all duration-200 cursor-pointer ${state.category === cat.label ? 'ring-4 ring-olive-400' : ''}`}
          >
            <span className="text-4xl mb-2">{cat.icon}</span>
            <span className="font-medium text-lg text-olive-800">{cat.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default StepCategory; 