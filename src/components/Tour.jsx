import { useState, useRef } from 'react';
import PhoneMockup from './PhoneMockup';

const SCREENS = {
  profile:  { src: '/screenshots/profile.jpg',  alt: 'Vehicle profile',  title: 'Vehicle Profile',   desc: 'Your vehicle details at a glance. Registration info, purchase date, insurance renewal, PUC expiry, fuel type and odometer — organized and always accessible.' },
  fuel:     { src: '/screenshots/fuel.jpg',      alt: 'Fuel logs',        title: 'Fuel Logs',         desc: 'Every fuel fill logged with quantity, price, station name and odometer. Mileage is automatically calculated so you always know your real km/L.' },
  service:  { src: '/screenshots/service.jpg',   alt: 'Service history',  title: 'Service History',   desc: 'Build a complete maintenance log. Service center name, costs, odometer, mechanic notes — all in one place with next service tracking.' },
  expenses: { src: '/screenshots/expenses.jpg',  alt: 'Expense tracking', title: 'Expense Tracking',  desc: 'All vehicle expenses categorized. Fuel, repairs, toll, insurance, parking — see where your vehicle money goes with a clear, organized expense history.' },
  vault:    { src: '/screenshots/vault.jpg',     alt: 'Document vault',   title: 'Document Vault',    desc: 'Keep your RC, insurance, PUC and other important vehicle documents organized and secure. Expiry dates tracked. Biometric access protected.' },
};

const TABS = [
  { key: 'profile',  ico: '🚗', name: 'Profile',  sub: 'Vehicle details', id: 'tb-p' },
  { key: 'fuel',     ico: '⛽', name: 'Fuel',     sub: 'Track every fill', id: 'tb-f' },
  { key: 'service',  ico: '🔧', name: 'Service',  sub: 'Maintenance log', id: 'tb-s' },
  { key: 'expenses', ico: '💰', name: 'Expenses', sub: 'Spending overview', id: 'tb-e' },
  { key: 'vault',    ico: '🔒', name: 'Vault',    sub: 'Secure documents', id: 'tb-v' },
];

export default function Tour() {
  const [active, setActive] = useState('profile');
  const imgRef = useRef(null);

  const select = (key) => {
    if (key === active) return;
    const img = imgRef.current;
    if (img) {
      img.classList.add('fade');
      setTimeout(() => {
        setActive(key);
        img.classList.remove('fade');
      }, 300);
    } else {
      setActive(key);
    }
  };

  const current = SCREENS[active];

  return (
    <section id="tour" className="sp" style={{ background: 'var(--bg-dark2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span className="lbl lbl-dk reveal">Interactive Tour</span>
          <h2 className="ttl ttl-dk reveal d1">Take a Tour Inside <em className="gold">ManaVahana</em></h2>
          <p className="sub sub-dk reveal d2" style={{ margin: '12px auto 0', textAlign: 'center' }}>Tap any section to explore the real app screens.</p>
        </div>
        <div className="tour-g">
          <div className="reveal">
            <div className="t-sel" id="t-sel">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  id={tab.id}
                  className={`t-btn${active === tab.key ? ' on' : ''}`}
                  onClick={() => select(tab.key)}
                >
                  <div className="t-ico">{tab.ico}</div>
                  <div><div className="t-name">{tab.name}</div><div className="t-sub">{tab.sub}</div></div>
                  <span className="t-arr">›</span>
                </button>
              ))}
            </div>
            <div className="t-box" id="t-box">
              <div className="t-box-t" id="t-title">{current.title}</div>
              <div className="t-box-d" id="t-desc">{current.desc}</div>
            </div>
          </div>

          <div className="t-vis reveal d2">
            <div className="t-glow" />
            <div className="phone phone-lg">
              <div className="s-frame">
                <div className="s-vol-up" /><div className="s-vol-dn" /><div className="s-power" />
                <div className="s-screen">
                  <img ref={imgRef} src={current.src} alt={current.alt} id="t-screen" loading="lazy" className="s-img" />
                  <div className="s-camera-ring"><div className="s-lens" /></div>
                  <div className="s-pen-hint" />
                </div>
                <div className="s-bottom-edge"><div className="s-usbc" /><div className="s-spen-tip" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
