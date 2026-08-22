const BADGES = [
  ['📱','Offline First'],
  ['🚫','No Cloud Tracking'],
  ['🔐','Encrypted Backups'],
  ['👆','Biometric Protection'],
  ['🚫','No Ads'],
  ['🇮🇳','English + తెలుగు'],
];

export default function Promise() {
  return (
    <section id="promise" className="sp-sm" style={{ background: 'var(--bg-dark2)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="lbl lbl-dk reveal" style={{ display: 'block', textAlign: 'center' }}>Our Promise</span>
        <h2 className="ttl ttl-dk reveal d1" style={{ textAlign: 'center' }}>Built Different. <em className="gold">Built Private.</em></h2>
        <div className="pr-badges reveal d2">
          {BADGES.map(([ico, label]) => (
            <div key={label} className="pr-b">
              <span className="pr-bi">{ico}</span>
              <span className="pr-bt">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
