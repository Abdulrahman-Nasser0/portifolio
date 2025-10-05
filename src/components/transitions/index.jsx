import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { useLenis } from '../hooks/use-lenis';
import { useTimeOut } from '../hooks/use-time-out';
import { Preloader } from './preloader';


/** @param {import('react').PropsWithChildren<{duration?: number}>} */
export function PageTransition({ children, duration = 2000 }) {
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  // Optional: Remove if you don't want smooth scrolling
  useLenis();

  useTimeOut({
    callback: () => {
      setLoading(false);
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    },
    duration,
    deps: [], // Important: Empty deps array so it only runs on mount
  });

  return (
    <div key={location.pathname} className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading ? <Preloader /> : null}
      </AnimatePresence>
      {children}
    </div>
  );
}