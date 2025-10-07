import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function SectionReveal({ 
  children, 
  delay = 0,
  duration = 0.6,
  y = 50,
  once = true
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const variants = {
    initial: {
      opacity: 0,
      y: y,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
    >
      {children}
    </motion.div>
  );
}
