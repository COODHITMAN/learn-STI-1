import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  num: number | string;
  children: ReactNode;
  id?: string;
}

export default function SectionTitle({ num, children, id }: Props) {
  return (
    <motion.h2
      className="section-title"
      id={id}
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="section-icon">{num}</span>
      {children}
    </motion.h2>
  );
}
