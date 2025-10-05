'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ContentSlideUp({ 
  children, 
  delay = 1.5,
  duration = 0.8,
  startY = 500,
  autoStart = null 
}) {
  const [startAnimation, setStartAnimation] = useState(autoStart !== null ? autoStart : false);

  useEffect(() => {
    if (autoStart === null) {
      // Auto start animation after delay
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, delay * 1000);

      return () => clearTimeout(timer);
    } else {
      setStartAnimation(autoStart);
    }
  }, [delay, autoStart]);

  const variants = {
    initial: {
      y: startY,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate={startAnimation ? 'animate' : 'initial'}
    >
      {children}
    </motion.div>
  );
}
