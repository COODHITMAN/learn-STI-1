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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <span className="section-icon">{num}</span>
      {children}
    </motion.h2>
  );
}
