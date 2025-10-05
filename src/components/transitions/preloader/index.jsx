'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';

import { Center } from '../../ui/center';
import { preloaderWords } from './preloader-words';
import { useDimensions } from '../../hooks/use-dimensions';
import { useTimeOut } from '../../hooks/use-time-out';
import { fade, slideFromBottom } from './variants';

const MotionComponent = motion(Center);

export function Preloader() {
  const [index, setIndex] = useState(0);
  const { width, height } = useDimensions();

  useTimeOut({
    callback: () => {
      setIndex(prevIndex => prevIndex + 1);
    },
    duration: index === 0 ? 500 : 250,
    deps: [index],
  });

  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${
    height + 300
  } 0 ${height}  L0 0`;
  const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${
    width / 2
  } ${height} 0 ${height}  L0 0`;

  /** @type {import('framer-motion').Variants} */
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <MotionComponent
      className='fixed z-50 h-screen w-screen cursor-wait'
      style={{
        backgroundColor: '#1F2937', // Dark background - adjust to your theme
        color: '#FFFFFF', // White text - adjust to your theme
      }}
      variants={slideFromBottom}
      initial='initial'
      exit='exit'
    >
      {width > 0 ? (
        <>
          <MotionComponent
            className='text-3xl md:text-4xl'
            style={{
              color: '#FFFFFF', // White text - adjust to your theme
            }}
            variants={fade}
            initial='initial'
            animate='enter'
          >
            <Dot size={48} style={{ marginRight: '12px' }} />
            <p>{preloaderWords[index]}</p>
          </MotionComponent>
          <motion.svg className='absolute top-0 -z-10 h-[calc(100%+300px)] w-full'>
            <motion.path
              style={{
                fill: '#1F2937', // Same as background - adjust to your theme
              }}
              variants={curve}
              initial='initial'
              exit='exit'
            />
          </motion.svg>
        </>
      ) : null}
    </MotionComponent>
  );
}