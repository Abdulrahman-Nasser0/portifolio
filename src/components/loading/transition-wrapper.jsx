'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTimeOut } from '../../hooks/use-time-out';
import { Preloader } from './index';

/** @param {import('react').PropsWithChildren<{ duration?: number }>} */
export function TransitionWrapper({ children, duration = 2000 }) {
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

  return (
    <div className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading ? <Preloader /> : null}
      </AnimatePresence>
      {!isLoading ? (
        <div className='min-h-screen bg-white'>
          {children}
        </div>
      ) : null}
    </div>
  );
}