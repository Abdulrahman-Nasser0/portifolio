import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { AnimatePresence } from 'motion/react';
import { Header } from './header';
import { Offcanvas } from './offcanvas';
import { FloatingMenuButton } from '../ui/floating-menu-button';
import { useLenis } from "../hooks/use-lenis";
import { TransitionWrapper } from '../loading/transition-wrapper';

function Layout() {
  // Initialize smooth scrolling
  useLenis();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <TransitionWrapper>
    <div className="min-h-screen">
      <Header onMenuToggle={handleMenuToggle} />
      <main>
        <Outlet />
      </main>
      
      {/* Floating Menu Button */}
      <FloatingMenuButton 
        isMenuOpen={isMenuOpen} 
        onToggle={handleMenuToggle} 
      />
      
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <Offcanvas
            isOpen={isMenuOpen}
            onClose={handleMenuClose}
          />
        )}
      </AnimatePresence>
    </div>
    </TransitionWrapper>
  );
}

export default Layout;