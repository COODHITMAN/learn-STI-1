import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavLink {
  to: string;
  label: string;
}

interface Props {
  prev?: NavLink;
  next?: NavLink;
}

const navVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function PageNav({ prev, next }: Props) {
  return (
    <motion.nav
      className="page-nav"
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
    >
      {prev ? (
        <Link to={prev.to} className="nav-btn">
          <span style={{ fontSize: '1.2rem' }}>&#8592;</span>
          <span>
            <span className="nav-label">Précédent</span>
            <span className="nav-name">{prev.label}</span>
          </span>
        </Link>
      ) : <div />}
      {next ? (
        <Link to={next.to} className="nav-btn">
          <span>
            <span className="nav-label">Suivant</span>
            <span className="nav-name">{next.label}</span>
          </span>
          <span style={{ fontSize: '1.2rem' }}>&#8594;</span>
        </Link>
      ) : <div />}
    </motion.nav>
  );
}
