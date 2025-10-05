'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTimeOut } from '../hooks/use-time-out';
import { Preloader } from './index';

/** @param {import('react').PropsWithChildren<{ duration?: number }>} */
export function TransitionWrapper({ children, duration = 1000 }) {
  const [isLoading, setLoading] = useState(true);

  useTimeOut({
    callback: () => {
      setLoading(false);
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    },
    duration,
    deps: [],
  });

  /** @type {import('framer-motion').Variants} */
  const pageContentSlideUp = {
    initial: {
      y: '100%',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.76, 0, 0.24, 1],
        delay: 0.1 // Small delay after preloader exits
      },
    },
  };

  return (
    <div className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading ? <Preloader /> : null}
      </AnimatePresence>
      {!isLoading ? (
        <motion.div 
          className='min-h-screen'
          variants={pageContentSlideUp}
          initial='initial'
          animate='animate'
        >
          {children}
        </motion.div>
      ) : null}
    </div>
  );
}