// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { slide } from './variants';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
];

export function NavigationLinks({ onLinkClick }) {
  return (
    <div className="flex flex-col gap-3">
      {navItems.map((data, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={slide}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <a
            href={data.href}
            onClick={(e) => {
              e.preventDefault();
              onLinkClick?.(data.href);
            }}
            className="relative text-6xl md:text-8xl font-light text-white hover:text-gray-300 transition-colors duration-300 overflow-hidden group"
          >
            <span className="block transform transition-transform duration-300 group-hover:-translate-y-full">
              {data.title}
            </span>
            <span className="absolute top-full left-0 transform transition-transform duration-300 group-hover:-translate-y-full text-blue-400">
              {data.title}
            </span>
          </a>
        </motion.div>
      ))}
    </div>
  );
}