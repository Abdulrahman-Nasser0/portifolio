/** @type {import('framer-motion').Variants} */
export const slideFromBottom = {
  initial: {
    top: '100vh', // Start from bottom
  },
  enter: {
    top: 0, // Move to center
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    top: '-100vh', // Exit to top
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
  },
};

/** @type {import('framer-motion').Variants} */
export const fade = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.4 }, // Delay to show after slide in
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};