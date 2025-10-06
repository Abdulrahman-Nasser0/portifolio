// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { MagneticButton } from "../magnetic-button";

export function FloatingMenuButton({ isMenuOpen, onToggle }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Custom magnetic functionality with much stronger effect
  const handleMagneticMove = (event) => {
    const { clientX, clientY } = event;
    const { width, height, left, top } = elementRef.current.getBoundingClientRect();

    const x = (clientX - (left + width / 2)) * 8.5; // Increased to 1.5 for very strong effect
    const y = (clientY - (top + height / 2)) * 8.5; // Increased to 1.5 for very strong effect
    setPosition({ x, y });
  };

  const handleMagneticOut = () => setPosition({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user has scrolled down past the header
      const scrollTop = window.scrollY;
      const threshold = 100; // Show after scrolling 100px
      
      setIsVisible(scrollTop > threshold);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible && !isMenuOpen) return null;

  return (
    <motion.button
      ref={elementRef}
      className={`fixed top-6 right-6 ${isMenuOpen ? 'z-[60]' : 'z-50'} w-16 h-16 flex items-center justify-center cursor-pointer rounded-full transition-all duration-300 ${isMenuOpen ? 'bg-blue-600' : 'bg-gray-900 hover:bg-blue-600'} text-white shadow-lg`}
      onClick={onToggle}
      initial={{ opacity: 0, scale: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        x: position.x,
        y: position.y,
      }}
      exit={{ opacity: 0, scale: 0, y: -20 }}
      transition={{ 
        opacity: { duration: 0.3, ease: "easeOut" },
        scale: { duration: 0.3, ease: "easeOut" },
        x: {
          type: 'spring',
          damping: 30,
          stiffness: 500,
          mass: 0.02,
        },
        y: {
          type: 'spring',
          damping: 30,
          stiffness: 500,
          mass: 0.02,
        },
      }}
      onPointerMove={handleMagneticMove}
      onPointerOut={handleMagneticOut}
      whileHover={{ scale: 1.1 }}
    >
      <span className="relative z-10 block w-max">
        <div className="w-6 h-6 flex flex-col justify-center items-center relative">
          {/* Top line */}
          <motion.span
            className="block w-5 h-0.5 bg-white absolute rounded-full"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 0 : -3,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          
          {/* Bottom line */}
          <motion.span
            className="block w-5 h-0.5 bg-white absolute rounded-full"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? 0 : 3,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </span>
    </motion.button>
  );
}
