import type { ReactNode } from 'react';
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

export default function StudyPage({ accent, glow, badge, title, subtitle, toc, sections, prev, next }: Props) {
  return (
    <PageLayout accent={accent} glow={glow}>
      <header className="subject-header" style={{ '--subject-accent': accent } as React.CSSProperties}>
        <Link to="/" className="back-home">STI Learning</Link>
        <span className="subject-badge">{badge}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
      <nav className="sticky-nav">
        {toc.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
      </nav>
      <main className="page-container">
        {sections.map((section) => (
          <section key={section.id}>
            <SectionTitle num={section.icon} id={section.id}>{section.title}</SectionTitle>
            {section.content}
          </section>
        ))}
        <PageNav prev={prev} next={next} />
      </main>
      <footer className="site-footer">Created by Blackcood47</footer>
    </PageLayout>
  );
}
