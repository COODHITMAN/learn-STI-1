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
    previewRef.current.innerHTML = '';
    try {
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (e) {
      if (previewRef.current) {
        previewRef.current.textContent = '❌ Erreur : ' + (e as Error).message;
      }
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
