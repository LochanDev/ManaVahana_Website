export default function Reminders() {
  return (
    <section id="reminders" className="sp" style={{ background: 'var(--bg-dark3)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6px' }}>
          <span className="lbl lbl-dk reveal">Smart Reminders</span>
          <h2 className="ttl ttl-dk reveal d1">Never Miss an <em className="gold">Important Deadline.</em></h2>
          <p className="sub sub-dk reveal d2" style={{ margin: '12px auto 0', textAlign: 'center' }}>Track all time-sensitive deadlines and stay ahead of every renewal.</p>
        </div>
        <div className="rem-g">
          <div className="reveal d1">
            <div className="rem-c">
              <div className="rem-ico">🛡️</div>
              <div style={{ flex: 1 }}><div className="rem-t">Insurance Renewal</div><div className="rem-s">Hyundai i20 Asta · TS 09 EA 4321</div></div>
              <div><div className="rem-d">30 Jul 2026</div><div className="rem-dl">Due date</div></div>
            </div>
            <div className="rem-c">
              <div className="rem-ico">🌿</div>
              <div style={{ flex: 1 }}><div className="rem-t">PUC Certificate</div><div className="rem-s">Pollution check renewal due</div></div>
              <div><div className="rem-d urg">20 Jun 2026</div><div className="rem-dl">Due date</div></div>
            </div>
            <div className="rem-c">
              <div className="rem-ico">🔧</div>
              <div style={{ flex: 1 }}><div className="rem-t">Periodic Service</div><div className="rem-s">Next scheduled service due</div></div>
              <div><div className="rem-d ok">On track</div><div className="rem-dl">Status</div></div>
            </div>
            <div className="rem-c">
              <div className="rem-ico">💳</div>
              <div style={{ flex: 1 }}><div className="rem-t">Vehicle Tax / EMI</div><div className="rem-s">Track tax and loan payments</div></div>
              <div><div className="rem-d" style={{ color: 'rgba(255,255,255,.38)' }}>Set reminder</div><div className="rem-dl">Upcoming</div></div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }} className="reveal d2">
            <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', borderRadius: '18px', padding: '26px', maxWidth: '290px', width: '100%' }}>
              <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,.26)', marginBottom: '16px' }}>Track Reminders For</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                {[['🛡️','Insurance Renewal'],['🌿','PUC Certificate'],['🔧','Service Due'],['🏛️','Road Tax'],['💳','EMI Payments'],['📋','Warranty Expiry']].map(([ico, label]) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                    <span style={{ fontSize: '19px' }}>{ico}</span>
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,.68)', fontWeight: '600' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
