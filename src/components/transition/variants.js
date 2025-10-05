/** @type {import('framer-motion').Variants} */
export const slideUp = {
  initial: {
    y: '100vh', // Start completely below screen
  },
  animate: {
    y: 0, // Cover entire screen
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: '-100vh', // Slide up off screen
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

/** @type {import('framer-motion').Variants} */

export const fade = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.8 }, // Delay until after cover animation
  },
};