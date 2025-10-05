'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

import { useMagnetic } from '../../hooks/use-magnetic';
import { cn } from '../../utils/cn';
import { MagneticItem } from './styled';
import { magneticVariance } from './variants';

export function MagneticButton({
  children,
  className,
  variant = 'default',
  size = 'default',
  ...props
}) {
  const elementRef = useRef(null);
  const {
    position: { x, y },
    handleMagneticMove,
    handleMagneticOut,
  } = useMagnetic(elementRef);

  return (
    <motion.button
      ref={elementRef}
      className={cn(magneticVariance({ variant, size }), className)}
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 150,
        mass: 0.1,
      }}
      onPointerMove={handleMagneticMove}
      onPointerOut={handleMagneticOut}
      whileHover={{ scale: 1.1 }}
      {...props}
    >
      <MagneticItem>{children}</MagneticItem>
    </motion.button>
  );
}