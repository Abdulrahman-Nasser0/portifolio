// eslint-disable-next-line no-unused-vars
import { motion, useTransform, useScroll } from 'motion/react';

export function ParallaxElements() {
  const { scrollY } = useScroll();
  
  // Transform scroll values for different parallax speeds
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -300]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 180]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Floating shapes with parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full"
      />
      
      <motion.div
        style={{ y: y2, rotate }}
        className="absolute top-1/2 left-1/6 w-24 h-24 border border-white/20 rounded-lg"
      />
      
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-1/3 right-1/6 w-16 h-16 bg-white/10 rounded-full"
      />
      
      {/* Parallax lines */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-1/3 w-px h-40 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
      />
      
      <motion.div
        style={{ y: y2 }}
        className="absolute top-20 right-1/3 w-px h-60 bg-gradient-to-b from-transparent via-white/20 to-transparent"
      />
    </div>
  );
}
