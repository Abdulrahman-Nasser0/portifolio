import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { AnimatePresence } from 'motion/react';
import { Header } from './header';
import { Offcanvas } from './offcanvas';
import { FloatingMenuButton } from '../ui/floating-menu-button';
import { useLenis } from "../hooks/use-lenis";

function Layout() {
  // Initialize smooth scrolling
  useLenis();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleNavigate = (href) => {
    navigate(href);
    handleMenuClose();
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
    <div className="min-h-screen">
      
      <Header onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
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
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Layout;