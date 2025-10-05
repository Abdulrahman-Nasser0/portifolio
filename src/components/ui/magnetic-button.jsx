'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

export function MagneticButton({ 
  children, 
  to, 
  href, 
  className = '',
  intensity = 0.3,
  resetDuration = 0.4,
  ...props 
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const x = (clientX - (left + width / 2)) * intensity;
    const y = (clientY - (top + height / 2)) * intensity;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const motionProps = {
    ref,
    animate: { x: position.x, y: position.y },
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 30,
      duration: resetDuration 
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: cn(
      'inline-block cursor-pointer transition-all duration-200',
      className
    ),
    ...props
  };

  // If it's an internal link, use React Router Link
  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className="block w-full h-full">
          {children}
        </Link>
      </motion.div>
    );
  }

  // If it's an external link, use regular anchor
  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  // If it's just a button/div
  return (
    <motion.div {...motionProps}>
      {children}
    </motion.div>
  );
}
