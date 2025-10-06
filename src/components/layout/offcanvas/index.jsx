// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { MenuBody } from "./components/body";
import { MenuFooter } from "./components/footer";
import { slideLeft, opacity } from "./variants";

export function Offcanvas({ isOpen, onClose, onNavigate }) {
  const handleLinkClick = (href) => {
    onNavigate?.(href);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-opacity-50 z-10"
        variants={opacity}
        initial="initial"
        animate="enter"
        exit="exit"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <motion.div
        className="fixed top-0 right-0 h-full w-full md:max-w-[70%] lg:max-w-[50%] bg-[var(--main-black)] text-white z-50 flex flex-col"
        variants={slideLeft}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {/* Header */}
        <div className="flex justify-center items-center p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">Navigation</h2>
        </div>
        <div className="py-[15vh] px-[7.5vw] pb-[10vh]">
          {/* Body */}
          <div className="flex-1 scrollbar-hide ">
            <MenuBody onLinkClick={handleLinkClick} />
          </div>

          {/* Footer */}
          <MenuFooter />
        </div>
      </motion.div>
    </>
  );
}
