const PRIVACY = [
  { ico: '📱', title: '100% Offline',             text: 'Core vehicle records are designed to work without an internet connection. Your data lives on your device — not on a remote server.' },
  { ico: '🚫', title: 'No Cloud Tracking',        text: 'The product is designed around keeping vehicle information private. No background sync, no usage analytics, no data collection.' },
  { ico: '🔐', title: 'AES-256 Encrypted Backup', text: 'Create password-protected, encrypted backups of your complete vehicle data. Restore on any device when needed.' },
  { ico: '👆', title: 'Biometric Protection',      text: 'Use Android fingerprint or face authentication to protect access to your document vault and sensitive vehicle records.' },
];

export default function Privacy() {
  return (
    <section id="privacy" className="sp" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="lbl lbl-dk reveal">Privacy &amp; Security</span>
          <h2 className="ttl ttl-dk reveal d1">Your Data Stays <em className="gold">Yours.</em></h2>
          <p className="sub sub-dk reveal d2" style={{ margin: '13px auto 0', textAlign: 'center' }}>ManaVahana follows an offline-first approach so your core vehicle records remain on your device.</p>
        </div>
        <div className="prv-g">
          {PRIVACY.map((p, i) => (
            <div key={p.title} className={`prv-c reveal d${i + 1}`}>
              <div className="pi">{p.ico}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
