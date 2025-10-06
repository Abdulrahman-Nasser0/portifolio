// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { NavigationLinks } from './links';
import { opacity } from './variants';

export function MenuBody({ onLinkClick }) {
  return (
    <motion.div
      className="flex flex-col justify-between h-full"
      variants={opacity}
      initial="initial"
      animate="enter"
    >
      {/* Navigation Links */}
      <div className="flex-1 flex items-center justify-center">
        <nav className="text-center">
          <NavigationLinks onLinkClick={onLinkClick} />
        </nav>
      </div>

      {/* Additional content can go here */}
    </motion.div>
  );
}