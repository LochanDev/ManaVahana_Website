const BENEFITS = [
  { ico: '📊', title: 'Know Your Mileage',         text: 'Stop guessing your real fuel economy. Track every fill and see your actual km/L — calculated automatically from your odometer and fuel quantity.' },
  { ico: '💸', title: 'Control Your Costs',         text: 'Understand where your vehicle money goes. Every rupee of fuel, service, toll, and insurance tracked in one clear expense history.' },
  { ico: '🔔', title: 'Never Miss Renewals',        text: 'Stay ahead of insurance and PUC expiry. ManaVahana tracks every deadline so you never face a surprise renewal or fine.' },
  { ico: '📚', title: 'Keep Every Record',          text: 'Build a complete, permanent service history. Every oil change, repair, and inspection logged with costs and notes.' },
  { ico: '🔒', title: 'Protect Important Documents', text: 'Keep your digital vehicle documents organized and accessible. RC, insurance, PUC — always within reach, protected by biometrics.' },
  { ico: '🤝', title: 'Improve Resale Confidence',  text: 'Show buyers a clear maintenance and ownership history. A complete vehicle report supports a fair asking price.' },
];

export default function Benefits() {
  return (
    <section id="benefits" style={{ background: 'var(--bg-light)', padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="lbl reveal">Why ManaVahana</span>
          <h2 className="ttl reveal d1">Why Vehicle Owners Choose <em>ManaVahana</em></h2>
        </div>
        <div className="ben-g">
          {BENEFITS.map((b, i) => (
            <div key={b.title} className={`ben-c reveal d${(i % 3) + 1}`}>
              <div className="bi">{b.ico}</div>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
