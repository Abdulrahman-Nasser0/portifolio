import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export function MouseFollowElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Mouse-following gradient */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.3) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: mousePosition.x + '%',
          y: mousePosition.y + '%',
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />
      
      {/* Secondary following element */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: (mousePosition.x * 0.5) + '%',
          y: (mousePosition.y * 0.5) + '%',
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 150,
        }}
      />
    </div>
  );
}
