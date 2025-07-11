import React from 'react';
import { motion } from 'framer-motion';
import { useCustomization } from '../CustomizationContext';

const colors = [
  { name: 'Red', value: '#e53e3e' },
  { name: 'Olive Green', value: '#708238' },
  { name: 'Sky Blue', value: '#38bdf8' },
  { name: 'Cream White', value: '#f9fafb' },
  { name: 'Black', value: '#222' },
  { name: 'Brown', value: '#a0522d' },
  { name: 'Lavender', value: '#b57edc' },
];

const StepColor = () => {
  const { state, setColor, setStep } = useCustomization();

  const handleSelect = (color) => {
    setColor(color.name);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <h3 className="text-2xl font-semibold mb-6 text-olive-700">Step 2: Choose Color</h3>
      {/* 3D Preview Placeholder */}
      <div className="w-40 h-40 mb-6 flex items-center justify-center bg-gray-100 rounded-2xl shadow-inner relative">
        <motion.div
          key={state.color}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="w-28 h-32 rounded-xl flex items-center justify-center"
          style={{ background: colors.find(c => c.name === state.color)?.value || '#eee' }}
        >
          <span className="text-5xl">🧶</span>
        </motion.div>
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-500">3D Preview (coming soon)</span>
      </div>
      {/* Color Swatches */}
      <div className="flex flex-wrap gap-4 justify-center mb-4">
        {colors.map((color) => (
          <motion.button
            key={color.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect(color)}
            className={`w-12 h-12 rounded-full border-4 transition-all duration-200 flex items-center justify-center shadow-md ${state.color === color.name ? 'border-olive-500 ring-2 ring-olive-400' : 'border-gray-200'}`}
            style={{ background: color.value }}
            aria-label={color.name}
          >
            {state.color === color.name && (
              <motion.span
                layoutId="selectedColorCheck"
                className="text-white text-xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✓
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>
      <button
        className="mt-6 px-6 py-2 bg-olive-600 text-white rounded-lg font-semibold shadow hover:bg-olive-700 transition"
        onClick={() => state.color && setStep(2)}
        disabled={!state.color}
      >
        Next: Choose Size
      </button>
    </motion.div>
  );
};

export default StepColor; 