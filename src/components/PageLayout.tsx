import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, x: 50 },
  in:      { opacity: 1, x: 0  },
  out:     { opacity: 0, x: -50 },
};
const transition = { type: 'tween' as const, ease: 'anticipate' as const, duration: 0.35 };

interface Props {
  children: ReactNode;
  accent: string;
  glow?: string;
}

export default function PageLayout({ children, accent, glow }: Props) {
  return (
    <motion.div
      className="page-layout"
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
      style={{ '--accent-color': accent, '--accent-glow': glow ?? accent + '18' } as React.CSSProperties}
    >
      {children}
    </motion.div>
  );
}
