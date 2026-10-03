import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

export default function AboutPage() {
  return (
    <PageLayout accent="#00e5a3" glow="#00e5a344">
      <main className="about-page">
        <motion.section
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link to="/" className="about-back">← STI Learning</Link>
          <div className="about-mark" aria-hidden="true">STI</div>
          <div className="about-eyebrow">À propos</div>
          <h1>About Blackcood47</h1>
          <p className="about-intro">
            A student who created STI with the goal of helping students learn Sciences de l’Informatique more easily.
          </p>
          <div className="about-divider" />
          <p>
            STI brings Bac Sciences de l’Informatique annexes and useful revision resources together in one place.
          </p>
          <p>
            Its purpose is simple: make learning and revision easier, with a resource made by a student to help other students.
          </p>
          <Link to="/" className="about-home-button">Return to STI Learning <span aria-hidden="true">→</span></Link>
        </motion.section>
      </main>
    </PageLayout>
  );
}
