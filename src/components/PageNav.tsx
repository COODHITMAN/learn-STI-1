import { Link } from 'react-router-dom';

interface NavLink {
  to: string;
  label: string;
}

interface Props {
  prev?: NavLink;
  next?: NavLink;
}

export default function PageNav({ prev, next }: Props) {
  return (
    <nav className="page-nav">
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
    </nav>
  );
}
