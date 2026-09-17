import { useState, useRef } from 'react';

interface Props {
  outId: string;
  initialCode: string;
  isBox?: boolean;
}

export default function JsLab({ outId, initialCode, isBox = false }: Props) {
  const [code, setCode] = useState(initialCode.trim());
  const previewRef = useRef<HTMLDivElement>(null);

  const run = () => {
    if (!previewRef.current) return;
    const preview = previewRef.current;
    preview.innerHTML = '';
    const log = (...args: unknown[]) => {
      const line = document.createElement('div');
      line.textContent = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
      preview.appendChild(line);
    };
    const sandboxConsole = { log, error: log, warn: log, info: log };
    try {
      const fn = new Function('console', 'output', code);
      fn(sandboxConsole, preview);
    } catch (e) {
      const errLine = document.createElement('div');
      errLine.textContent = '❌ Erreur : ' + (e as Error).message;
      errLine.style.color = '#ef9a9a';
      preview.appendChild(errLine);
    }
  };

  return (
    <div className="lab-wrap">
      <textarea
        className="lab-textarea"
        value={code}
        onChange={e => setCode(e.target.value)}
        rows={Math.max(3, code.split('\n').length + 1)}
      />
      <button className="run-btn" onClick={run}>&#9654; Exécuter</button>
      <div
        id={outId}
        ref={previewRef}
        className="lab-preview"
        style={isBox ? { padding: '8px', borderRadius: '7px', background: 'rgba(255,255,255,0.04)' } : undefined}
      >
        Cliquez Exécuter pour voir le résultat.
      </div>
    </div>
  );
}
