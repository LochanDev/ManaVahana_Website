export default function Problem() {
  return (
    <section id="problem" className="sp" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6px' }}>
          <span className="lbl reveal">The Reality</span>
          <h2 className="ttl reveal d1">Vehicle ownership shouldn't be<br /><em>this complicated.</em></h2>
        </div>
        <div className="prob-g">
          <div className="prob-c reveal d1">
            <div className="ico">⛽</div>
            <h3>Fuel Confusion</h3>
            <p className="q">"Where is all my fuel money going?"</p>
            <p>Tracking fuel manually makes real mileage and running costs difficult to understand.</p>
          </div>
          <div className="prob-c reveal d2">
            <div className="ico">🔧</div>
            <h3>Forgotten Maintenance</h3>
            <p className="q">"When was the last service?"</p>
            <p>Important service records and maintenance history are easy to forget over time.</p>
          </div>
          <div className="prob-c reveal d3">
            <div className="ico">📄</div>
            <h3>Expired Documents</h3>
            <p className="q">"Is my insurance or PUC about to expire?"</p>
            <p>Missing renewal dates can lead to unnecessary stress, fines, and penalties.</p>
          </div>
          <div className="prob-c reveal d4">
            <div className="ico">🗂️</div>
            <h3>Scattered Records</h3>
            <p className="q">"Where is that RC, invoice or service receipt?"</p>
            <p>Important vehicle information often exists across multiple places and apps.</p>
          </div>
        </div>
        <div className="bridge reveal">
          <h2>ManaVahana puts your entire vehicle lifecycle<br /><em>in one private garage.</em></h2>
        </div>
      </div>
    </section>
  );
}
