import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const subjects = [
  { path: '/html', name: 'HTML5', label: 'Rappel', accent: '#ff8a65', icon: '</>', description: 'Structure, balises sémantiques et formulaires.' },
  { path: '/css', name: 'CSS3', label: 'Rappel', accent: '#2196f3', icon: '#', description: 'Sélecteurs, mise en page et responsive design.' },
  { path: '/js', name: 'JavaScript', label: 'Rappel', accent: '#fbbf24', icon: 'JS', description: 'Variables, fonctions, DOM et événements.' },
  { path: '/sql', name: 'SQL', label: 'Rappel', accent: '#22c55e', icon: 'DB', description: 'Requêtes, filtres, jointures et agrégations.' },
  { path: '/php', name: 'PHP', label: 'Rappel', accent: '#c084fc', icon: 'PHP', description: 'Types, fonctions, MySQLi et CRUD.' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Home() {
  return (
    <PageLayout accent="#00e5a3" glow="#00e5a344">
      <main className="home-page">
        <section className="hero-section">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
            }}
          >
            <motion.span
              className="hero-badge"
              variants={{ hidden: { opacity: 0, y: -16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } } }}
            >
              <span className="hero-badge-dot" />
              Bac Sciences Informatiques
            </motion.span>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 22, filter: 'blur(6px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } } }}
            >STI <span>Learning</span></motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } } }}
            >Toutes les annexes du programme<br />en un seul endroit.</motion.p>
            <motion.div
              className="hero-rule"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }}
            ><span /> Programme 2024–2025 <span /></motion.div>
          </motion.div>
        </section>
        <motion.section className="subjects-section" variants={container} initial="hidden" animate="show">
          <div className="section-eyebrow">Choisir une matière</div>
          <div className="subject-grid">
            {subjects.map((subject) => (
              <motion.div key={subject.path} variants={item}>
                <Link to={subject.path} className="subject-card" style={{ '--subject-accent': subject.accent } as React.CSSProperties}>
                  <div className="subject-glow" />
                  <div className="subject-card-blur" />
                  <div className="subject-icon">{subject.icon}</div>
                  <div className="subject-meta">{subject.label}</div>
                  <h2>{subject.name}</h2>
                  <p>{subject.description}</p>
                  <span className="card-arrow">Ouvrir <b>→</b></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <footer className="site-footer"><Link to="/about" className="creator-link">Created by Blackcood47 <span aria-hidden="true">↗</span></Link></footer>
    </PageLayout>
  );
}
