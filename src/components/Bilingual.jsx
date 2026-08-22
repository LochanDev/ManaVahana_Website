export default function Bilingual() {
  return (
    <section id="bilingual" className="sp" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="lbl lbl-dk reveal">Language</span>
          <h2 className="ttl ttl-dk reveal d1">Built for India. <em className="gold">In Your Language.</em></h2>
          <p className="sub sub-dk reveal d2" style={{ margin: '12px auto 0', textAlign: 'center' }}>Complete English and Telugu support — not just translated labels, but a fully native experience.</p>
        </div>
        <div className="bi-g">
          <div className="lang-pairs reveal">
            {[
              ['Your Garage',            'మీ గ్యారేజ్'],
              ['Add Fuel',               'ఇంధనం జోడించండి'],
              ['Service Due',            'సర్వీస్ గడువు'],
              ['Document Vault',         'పత్రాల వాల్ట్'],
            ].map(([en, te]) => (
              <div key={en} className="lang-pair">
                <div className="lc en"><div className="lc-l">English</div><div className="lc-t">{en}</div></div>
                <div className="lc te"><div className="lc-l">తెలుగు</div><div className="lc-t te">{te}</div></div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }} className="reveal d2">
            <div style={{ background: 'rgba(180,83,9,.1)', border: '1px solid rgba(180,83,9,.2)', borderRadius: '16px', padding: '22px' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>🇮🇳</div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', marginBottom: '7px' }}>Indian-First Design</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.46)', lineHeight: '1.6' }}>Indian number formats, rupee (₹) currency, Indian fuel stations, and Telugu language support make ManaVahana feel native.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', borderRadius: '16px', padding: '22px' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px', fontFamily: 'var(--font-te)' }}>అ</div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', marginBottom: '7px' }}>Native Telugu Typography</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.46)', lineHeight: '1.6' }}>The entire app experience is available in clean, readable Telugu with properly rendered script throughout.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
