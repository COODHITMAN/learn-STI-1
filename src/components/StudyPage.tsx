import { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import PageNav from './PageNav';
import SectionTitle from './SectionTitle';

export interface StudySection {
  id: string;
  title: string;
  icon: string;
  content: ReactNode;
}

interface Props {
  accent: string;
  glow?: string;
  badge: string;
  title: string;
  subtitle: string;
  toc: Array<{ id: string; label: string }>;
  sections: StudySection[];
  prev?: { to: string; label: string };
  next?: { to: string; label: string };
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function StudyPage({ accent, glow, badge, title, subtitle, toc, sections, prev, next }: Props) {
  const [activeSection, setActiveSection] = useState(toc[0]?.id ?? '');

  useEffect(() => {
    const sectionElements = toc
      .map(item => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);
    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visibleSection = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: 0 },
    );

    sectionElements.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [toc]);

  return (
    <PageLayout accent={accent} glow={glow}>
      <motion.header
        className="subject-header"
        style={{ '--subject-accent': accent } as React.CSSProperties}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="subject-badge">{badge}</span>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      </motion.header>
      <motion.nav
        className="sticky-nav"
        aria-label="Sections du cours"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link to="/" className="nav-home-link">STI <span>⌂</span></Link>
        <span className="nav-separator" aria-hidden="true" />
        <div className="nav-sections">
          {toc.map((item) => (
            <button
              key={item.id}
              className={`nav-link-btn${activeSection === item.id ? ' active' : ''}`}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={() => {
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.nav>
      <main className="page-container">
        {sections.map((section) => (
          <section key={section.id}>
            <SectionTitle num={section.icon} id={section.id}>{section.title}</SectionTitle>
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
            >
              {section.content}
            </motion.div>
          </section>
        ))}
        <PageNav prev={prev} next={next} />
      </main>
      <footer className="site-footer"><Link to="/about" className="creator-link">Created by Blackcood47 <span aria-hidden="true">↗</span></Link></footer>
    </PageLayout>
  );
}
