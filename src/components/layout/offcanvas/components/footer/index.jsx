// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { slideUp } from './variants';

export function MenuFooter() {
  return (
    <motion.div
      className="p-6 border-t border-gray-700"
      variants={slideUp}
      initial="initial"
      animate="enter"
    >
      <div className="flex justify-between items-center text-sm text-gray-400">
        <span>© 2025 Abdulrahman Nasser</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Twitter  
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </motion.div>
  );
}