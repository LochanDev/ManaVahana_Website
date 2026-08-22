import { useEffect, useRef } from 'react';
import PhoneMockup from './PhoneMockup';

const SCREENS = [
  '/screenshots/profile.jpg',
  '/screenshots/fuel.jpg',
  '/screenshots/expenses.jpg',
  '/screenshots/vault.jpg',
];

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.18 23.76c.3.17.64.24.99.19l12.5-11.95-3.14-3.14L3.18 23.76zm17.64-13.3L17.7 8.62l-3.35 3.38 3.35 3.36 3.15-1.85c.9-.52.9-1.73-.03-2.25zM2.05 1.16C1.84 1.37 1.72 1.7 1.72 2.1v19.8c0 .4.12.73.33.94l.09.08 11.08-11.08v-.26L2.14 1.08l-.09.08zm10.44 10.01l3.22-3.22-10.5-6.11 7.28 9.33z"/>
  </svg>
);

export default function Hero() {
  const imgRef = useRef(null);
  const idxRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % SCREENS.length;
      const img = imgRef.current;
      if (!img) return;
      img.style.transition = 'opacity .5s ease';
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = SCREENS[idxRef.current];
        img.style.opacity = '1';
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-g">
          <div>
            <div className="reveal" style={{ marginBottom: '20px' }}>
              <span style={{ display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(180,83,9,.1)',border:'1px solid rgba(180,83,9,.25)',color:'var(--primary)',padding:'8px 16px',borderRadius:'100px',fontSize:'13px',fontWeight:'600' }}>
                🚗 Your Vehicle. Your Data. Your Control.
              </span>
            </div>
            <h1 className="h-title reveal d1">The Smart Garage That Keeps Your Vehicle <em>Organized.</em></h1>
            <p className="h-sub reveal d2">Manage fuel, mileage, servicing, expenses, documents and reminders — all from one private, offline-first app.</p>
            <div className="h-tags reveal d2">
              <span className="h-tag"><span className="dot" />100% Offline</span>
              <span className="h-tag"><span className="dot dot-a" />Privacy First</span>
              <span className="h-tag"><span className="dot" />English + తెలుగు</span>
            </div>
            <div className="h-cta reveal d3">
              <a href="https://play.google.com/store/apps/details?id=com.Lochan.ManaVahana&hl=en_IN" target="_blank" rel="noopener noreferrer" className="btn-p btn-lg" id="hero-dl">
                <PlayIcon /> Get on Google Play
              </a>
              <a href="#features" className="btn-s btn-lg" id="hero-ex" onClick={(e) => scrollTo(e, '#features')}>Explore Features ↓</a>
            </div>
          </div>

          <div className="h-visual">
            <div className="h-phone">
              <div className="fc fc1 fc-w"><div className="fc-ico r">🛡️</div><div><div className="fc-v">Insurance</div><div className="fc-l">30 Jul 2026</div></div></div>
              <div className="fc fc2"><div className="fc-ico g">💰</div><div><div className="fc-v">₹7,323</div><div className="fc-l">Fuel Logged</div></div></div>
              <div className="fc fc3"><div className="fc-ico a">⛽</div><div><div className="fc-v">16.90 km/L</div><div className="fc-l">Real Mileage</div></div></div>
              <div className="fc fc4"><div className="fc-ico a">🔧</div><div><div className="fc-v">₹7,500</div><div className="fc-l">Last Service</div></div></div>
              <div className="phone phone-lg">
                <div className="s-frame">
                  <div className="s-vol-up" /><div className="s-vol-dn" /><div className="s-power" />
                  <div className="s-screen">
                    <img ref={imgRef} src="/screenshots/profile.jpg" alt="ManaVahana — vehicle profile" loading="eager" id="hero-scr" className="s-img" />
                    <div className="s-camera-ring"><div className="s-lens" /></div>
                    <div className="s-pen-hint" />
                  </div>
                  <div className="s-bottom-edge"><div className="s-usbc" /><div className="s-spen-tip" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
