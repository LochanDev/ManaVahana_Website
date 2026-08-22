import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

const THEME_CARDS = [
  { id: 'tc-h', key: 'heritage', cls: 'th',       name: 'Traditional Heritage', mood: 'Warm · Cultural · Grounded',       dots: ['#B45309','#FAF9F6','#065F46'], bar: 'linear-gradient(90deg,#B45309,#D97706)' },
  { id: 'tc-c', key: 'cyber',    cls: 'cy',        name: 'Cyber Dark Tech',      mood: 'Futuristic · Digital · EV',         dots: ['#FF5722','#1A1A1A','#FF9800'], bar: 'linear-gradient(90deg,#FF5722,#FF9800)' },
  { id: 'tc-s', key: 'sport',    cls: 'sp-theme',  name: 'Sport Carbon',         mood: 'Racing · Performance · Motorsport', dots: ['#D32F2F','#1A1A1A','#FF5252'], bar: 'linear-gradient(90deg,#D32F2F,#FF5252)' },
  { id: 'tc-e', key: 'eco',      cls: 'ec',        name: 'Eco Minimal',          mood: 'Clean · Calm · Sustainable',        dots: ['#065F46','#F0FDF4','#10B981'], bar: 'linear-gradient(90deg,#065F46,#10B981)' },
  { id: 'tc-r', key: 'retro',    cls: 'rt',        name: 'Retro Cruise',         mood: 'Classic · Vintage · Garage',        dots: ['#FF6D00','#FFF3E0','#E65100'], bar: 'linear-gradient(90deg,#FF6D00,#FFAB40)' },
  { id: 'tc-y', key: 'royal',    cls: 'ry',        name: 'Royal Gold',           mood: 'Luxury · Premium · Flagship',       dots: ['#FFD700','#1A1400','#FFC107'], bar: 'linear-gradient(90deg,#FFD700,#FFC107)' },
];

export default function Themes() {
  const [active, setActive] = useState('heritage');
  const { applyTheme } = useTheme();

  const handleSelect = (key) => {
    setActive(key);
    applyTheme(key);
  };

  return (
    <section id="themes" style={{ background: 'var(--bg-light)', padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="lbl reveal">Themes</span>
          <h2 className="ttl reveal d1">Your Garage. <em>Your Style.</em></h2>
          <p className="sub reveal d2" style={{ margin: '12px auto 0', textAlign: 'center' }}>Six hand-crafted themes to match your vehicle's personality.</p>
        </div>
        <div className="themes-g" id="themes-g">
          {THEME_CARDS.map((t, i) => (
            <div
              key={t.key}
              id={t.id}
              className={`tc ${t.cls}${active === t.key ? ' on' : ''} reveal d${(i % 3) + 1}`}
              role="button"
              tabIndex={0}
              onClick={() => handleSelect(t.key)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelect(t.key); }}
            >
              <div className="tc-dots">
                {t.dots.map((c) => <div key={c} className="tc-dot" style={{ background: c }} />)}
              </div>
              <div className="tc-name">{t.name}</div>
              <div className="tc-mood">{t.mood}</div>
              <div className="tc-bar" style={{ background: t.bar }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
