// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { slide } from './variants';
import { MagneticButton } from '../../../../../ui/magnetic-button';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
];

export function NavigationLinks({ onLinkClick }) {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="flex flex-col gap-8 items-start ">
      {navItems.map((data, index) => {
        const active = isActive(data.href);
        const showDot = active || hoveredIndex === index;

        return (
          <motion.div
            key={index}
            custom={index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ width: 'fit-content' }}
          >
            <MagneticButton
              href={data.href}
              onClick={(e) => {
                e.preventDefault();
                onLinkClick?.(data.href);
              }}
              intensity={0.2}
              className="relative text-6xl md:text-7xl transition-colors duration-300 group pl-8"
            >
              {/* Animated Dot Indicator - Absolutely Positioned */}
              <motion.span
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white"
                initial={{ scale: 0 }}
                animate={{
                  scale: showDot ? 1 : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 25,
                }}
                style={{ width: '1rem', height: '1rem' }}
              />
              {data.title}
            </MagneticButton>
          </motion.div>
        );
      })}
    </nav>
  );
}