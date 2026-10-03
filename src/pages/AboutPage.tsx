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
          <img
            className="about-photo"
            src="/799200068_1107396998468723_3468948674525301521_n.jpg"
            alt="Blackcood47"
          />
          <div className="about-mark" aria-hidden="true">STI</div>
          <div className="about-eyebrow">À propos</div>
          <h1>About Blackcood47</h1>
          <p className="about-intro">
            Blackcood47 is a student of Sciences de l’Informatique who created STI to make learning easier by organizing helpful resources in one place.
          </p>
          <div className="about-divider" />
          <p>
            STI is a student project built for students, aiming to make study material easier to access and encourage more time learning and less time searching.
          </p>
          <Link to="/" className="about-home-button">Return to STI Learning <span aria-hidden="true">→</span></Link>
        </motion.section>
      </main>
    </PageLayout>
  );
}
