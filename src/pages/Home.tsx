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

export default function Home() {
  return (
    <PageLayout accent="#00e5a3" glow="#00e5a344">
      <main className="home-page">
        <section className="hero-section">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <div className="hero-kicker">Bac Sciences Informatiques</div>
            <h1>STI <span>Learning</span></h1>
            <p>Toutes les annexes du programme<br />en un seul endroit.</p>
            <div className="hero-rule"><span /> Programme 2024–2025 <span /></div>
          </motion.div>
        </section>
        <section className="subjects-section">
          <div className="section-eyebrow">Choisir une matière</div>
          <div className="subject-grid">
            {subjects.map((subject, index) => (
              <motion.div key={subject.path} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 * index, duration: .45 }}>
                <Link to={subject.path} className="subject-card" style={{ '--subject-accent': subject.accent } as React.CSSProperties}>
                  <div className="subject-glow" />
                  <div className="subject-icon">{subject.icon}</div>
                  <div className="subject-meta">{subject.label}</div>
                  <h2>{subject.name}</h2>
                  <p>{subject.description}</p>
                  <span className="card-arrow">Ouvrir <b>→</b></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">Created by Blackcood47</footer>
    </PageLayout>
  );
}
