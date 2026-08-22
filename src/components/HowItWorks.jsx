export default function HowItWorks() {
  return (
    <section id="how" style={{ background: 'var(--bg-light)', padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="lbl reveal">Getting Started</span>
          <h2 className="ttl reveal d1">Start in <em>3 Simple Steps</em></h2>
          <p className="sub reveal d2" style={{ margin: '12px auto 0', textAlign: 'center' }}>Simple to begin. Powerful over time.</p>
        </div>
        <div className="steps-g">
          <div className="step reveal d1">
            <div className="step-n">01</div>
            <h3>Add Your Vehicle</h3>
            <p>Enter your vehicle's core details to get started immediately.</p>
            <div className="step-tags">
              {['Vehicle Details','Registration','Fuel Type','Odometer'].map(t => <span key={t} className="s-tag">{t}</span>)}
            </div>
          </div>
          <div className="step reveal d2">
            <div className="step-n">02</div>
            <h3>Track Your Vehicle</h3>
            <p>Log every activity as it happens — quickly and easily.</p>
            <div className="step-tags">
              {['Fuel Fills','Service Visits','Expenses','Documents'].map(t => <span key={t} className="s-tag">{t}</span>)}
            </div>
          </div>
          <div className="step reveal d3">
            <div className="step-n">03</div>
            <h3>Understand Your Vehicle</h3>
            <p>ManaVahana turns your records into clear, useful insights.</p>
            <div className="step-tags">
              {['Mileage','Cost/km','Expenses','Upcoming Service'].map(t => <span key={t} className="s-tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
