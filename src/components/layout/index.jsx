import { useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { AnimatePresence } from 'motion/react';
import { Header } from './header';
import { Offcanvas } from './offcanvas';
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

  return (
    <div className="min-h-screen">
      
      <Header onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <main>
        <Outlet />
      </main>
      
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