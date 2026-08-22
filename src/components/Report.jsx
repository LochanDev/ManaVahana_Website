const scrollTo = (e, id) => {
  e.preventDefault();
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

export default function Report() {
  return (
    <section id="report" style={{ background: 'var(--bg-light)', padding: '100px 0' }}>
      <div className="container">
        <div className="rep-g">
          <div className="reveal">
            <span className="lbl">Vehicle Health Report</span>
            <h2 className="ttl">Your Vehicle's Complete History.<br /><em>One Professional Report.</em></h2>
            <p className="sub" style={{ margin: '18px 0 22px' }}>Generate a professional vehicle health report with your complete service history, fuel statistics, and expense summary.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '26px' }}>
              {[['📋','Complete service and maintenance history'],['⛽','Fuel statistics and mileage history'],['💰','Expense summary and category breakdown'],['🔑','Useful for vehicle resale and documentation']].map(([ico, text]) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                  <span style={{ fontSize: '16px' }}>{ico}</span>
                  <span style={{ fontSize: '14px', color: 'var(--tx-med)', fontWeight: '600' }}>{text}</span>
                </div>
              ))}
            </div>
            <a href="#download" className="btn-p" id="rep-btn" onClick={(e) => scrollTo(e, '#download')}>Generate Vehicle Report</a>
          </div>

          <div className="reveal d2">
            <div className="rep-card">
              <div className="rep-h">
                <div><div className="rep-bn">ManaVahana</div><div className="rep-bte">మన వాహనం</div></div>
                <span className="rep-pill">VEHICLE REPORT</span>
              </div>
              <div className="rep-b">
                <div className="rep-vn">Hyundai i20 Asta IVT</div>
                <div className="rep-pl">TS 09 EA 4321</div>
                {[
                  ['Vehicle Type','Car — Petrol',''],
                  ['Purchase Date','16 Jan 2025',''],
                  ['Current Odometer','24,700 km','a'],
                  ['Latest Mileage','16.90 km/L','a'],
                  ['Service Records','1 logged','g'],
                  ['Insurance Valid','30 Jul 2026','g'],
                  ['PUC Valid','20 Jun 2026',''],
                  ['Total Fuel Logged','₹7,323.75','a'],
                ].map(([k, v, cls]) => (
                  <div key={k} className="rep-r">
                    <span className="rep-k">{k}</span>
                    <span className={`rep-v${cls ? ' '+cls : ''}`}>{v}</span>
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
