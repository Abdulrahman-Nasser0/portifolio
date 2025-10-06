// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useMagnetic } from "../../hooks/use-magnetic";
import { MagneticButton } from "../magnetic-button";

export function FloatingMenuButton({ isMenuOpen, onToggle }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  
  // Magnetic functionality
  const {
    position: { x, y },
    handleMagneticMove,
    handleMagneticOut,
  } = useMagnetic(elementRef);

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

  if (!isVisible) return null;

  return (
    <motion.button
      ref={elementRef}
      className="fixed top-6 right-6 z-50 w-14 h-14 bg-[var(--main-black)] border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors shadow-lg backdrop-blur-sm"
      onClick={onToggle}
      initial={{ opacity: 0, scale: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0 + y, // Combine initial position with magnetic offset
        x, // Magnetic x position
      }}
      exit={{ opacity: 0, scale: 0, y: -20 }}
      transition={{ 
        opacity: { duration: 0.3, ease: "easeOut" },
        scale: { duration: 0.3, ease: "easeOut" },
        y: { 
          type: 'spring', 
          damping: 15, 
          stiffness: 150, 
          mass: 0.1,
          // Keep the fade-in animation smooth but allow magnetic movement
        },
        x: { type: 'spring', damping: 15, stiffness: 150, mass: 0.1 },
      }}
      onPointerMove={handleMagneticMove}
      onPointerOut={handleMagneticOut}
      whileHover={{ scale: 1.1 }}
    >
      <span className="relative z-1 block w-max">
        <div className="w-6 h-6 flex flex-col justify-center items-center relative">
          {/* Top line */}
          <motion.span
            className="block w-6 h-0.5 bg-white absolute"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 0 : -4,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          
          {/* Middle line */}
          <motion.span
            className="block w-6 h-0.5 bg-white absolute"
            animate={{
              opacity: isMenuOpen ? 0 : 1,
              scaleX: isMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          
          {/* Bottom line */}
          <motion.span
            className="block w-6 h-0.5 bg-white absolute"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? 0 : 4,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </span>
    </motion.button>
  );
}
