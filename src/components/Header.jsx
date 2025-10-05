import { Link } from "react-router-dom";
import { MagneticButton } from "./ui/magnetic-button";

function Header() {
  return (
    <header className="w-full">
      <nav className="px-4 sm:px-6 lg:px-8">
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MagneticButton
              to="/about"
              className=" block px-3 py-2 rounded-md text-base font-medium transition-colors"
              intensity={0.25}
            >
              About
            </MagneticButton>
            <MagneticButton
              to="/projects"
              className=" block px-3 py-2 rounded-md text-base font-medium transition-colors"
              intensity={0.25}
            >
              Projects
            </MagneticButton>
            <MagneticButton
              to="/contact"
              className=" block px-3 py-2 rounded-md text-base font-medium transition-colors"
              intensity={0.25}
            >
              Contact
            </MagneticButton>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
