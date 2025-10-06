
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import { MagneticButton } from '../../ui/magnetic-button';

export function Header({ onMenuToggle, isMenuOpen }) {
  return (
    <header
      className="w-full px-4"
    >
      <nav className="">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Home button */}
          <div className="flex-shrink-0">
            <MagneticButton 
              to="/" 
              className="flex items-center space-x-3 transition-colors"
              intensity={0.2}
            >
              <img 
                src="/logo-white.png" 
                alt="Abdulrahman Nasser Logo" 
                className="h-8 w-8"
              />
             
            </MagneticButton>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <MagneticButton
                to="/about"
                className="px-4 transition-colors"
                intensity={0.3}
              >
                About
              </MagneticButton>
              <MagneticButton
                to="/projects"
                className="px-4 transition-colors"
                intensity={0.3}
              >
                Projects
              </MagneticButton>
              <MagneticButton
                to="/contact"
                className="px-4 transition-colors"
                intensity={0.3}
              >
                Contact
              </MagneticButton>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MagneticButton
              onClick={onMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              intensity={0.3}
            >
              <span className="sr-only">Open main menu</span>
              <Menu size={20} />
              <span className="ml-2 text-sm font-medium">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
            </MagneticButton>
          </div>
        </div>
      </nav>
    </header>
  );
}