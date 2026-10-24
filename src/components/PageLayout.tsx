import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, x: 60, filter: 'blur(8px)' },
  in:      { opacity: 1, x: 0,  filter: 'blur(0px)' },
  out:     { opacity: 0, x: -60, filter: 'blur(8px)' },
};
const transition = { type: 'tween' as const, ease: [0.22, 1, 0.36, 1] as const, duration: 0.45 };

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
