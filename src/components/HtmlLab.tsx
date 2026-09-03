import { useState } from 'react';

interface Props {
  initialCode: string;
  label?: string;
  minHeight?: number;
}

export default function HtmlLab({ initialCode, label = 'Rendu HTML', minHeight = 60 }: Props) {
  const [code, setCode]         = useState(initialCode.trim());
  const [rendered, setRendered] = useState('');

  return (
    <div className="lab-wrap">
      {label && (
        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 6 }}>
          {label}
        </div>
      )}
      <textarea
        className="lab-textarea"
        value={code}
        onChange={e => setCode(e.target.value)}
        rows={Math.max(3, code.split('\n').length + 1)}
      />
      <button className="run-btn" onClick={() => setRendered(code)}>&#9654; Exécuter</button>
      {rendered && (
        <div
          className="lab-preview"
          style={{ minHeight, fontFamily: 'inherit', color: 'inherit', background: 'rgba(255,255,255,0.04)' }}
          dangerouslySetInnerHTML={{ __html: rendered }}
        />
      )}
    </div>
  );
}
