// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Dot, Menu } from "lucide-react";
import { MagneticButton } from "../../ui/magnetic-button";

export function Header({ onMenuToggle }) {

  return (
    <header className="w-full px-4">
      <nav className="">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Home button */}

          <div className="flex-shrink-0">
           
            <MagneticButton
              className="flex items-center space-x-3"
              to="/"
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
              >
                About
              </MagneticButton>
              <MagneticButton
                to="/projects"
              >
                Projects
              </MagneticButton>
              <MagneticButton
                to="/contact"
              >
                Contact
              </MagneticButton>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MagneticButton
              onClick={onMenuToggle}
            >
              <span className="flex items-center ml-2 text-sm font-medium">
                <Dot className="-mr-1" />
                Menu
              </span>
            </MagneticButton>
          </div>
        </div>
      </nav>
    </header>
  );
}
