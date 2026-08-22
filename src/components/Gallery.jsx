const GALLERY_ITEMS = [
  { src: '/screenshots/profile.jpg',  alt: 'Vehicle Profile',  label: 'Vehicle Profile' },
  { src: '/screenshots/fuel.jpg',     alt: 'Fuel Logs',        label: 'Fuel Logs' },
  { src: '/screenshots/service.jpg',  alt: 'Service History',  label: 'Service History' },
  { src: '/screenshots/expenses.jpg', alt: 'Expenses',         label: 'Expense Tracking' },
  { src: '/screenshots/vault.jpg',    alt: 'Document Vault',   label: 'Document Vault' },
  { src: '/screenshots/fuel.jpg',     alt: 'Mileage',          label: 'Mileage Tracking',  imgStyle: { objectPosition: 'bottom' } },
  { src: '/screenshots/expenses.jpg', alt: 'Cost Analysis',    label: 'Cost Analysis',     imgStyle: { objectPosition: 'bottom' } },
];

export default function Gallery() {
  return (
    <section id="gallery" className="sp-sm" style={{ background: 'var(--bg-dark3)' }}>
      <div className="container">
        <span className="lbl lbl-dk reveal" style={{ textAlign: 'center', display: 'block', marginBottom: '5px' }}>App Gallery</span>
        <h2 className="ttl ttl-dk reveal d1" style={{ textAlign: 'center' }}>Real Screens from <em className="gold">ManaVahana</em></h2>
      </div>
      <div
        className="gal-row reveal"
        style={{ paddingLeft: 'max(24px,calc((100vw - 1200px)/2))', paddingRight: '24px', marginTop: '26px' }}
      >
        {GALLERY_ITEMS.map((item, i) => (
          <div key={i} className="gal-item">
            <div style={{ width: '172px' }}>
              <div className="s-frame" style={{ borderRadius: '34px', padding: '5px' }}>
                <div className="s-vol-up" style={{ top: '18%', height: '40px' }} />
                <div className="s-vol-dn" style={{ top: 'calc(18% + 50px)', height: '40px' }} />
                <div className="s-power" style={{ top: '22%', height: '52px' }} />
                <div className="s-screen" style={{ borderRadius: '30px' }}>
                  <img src={item.src} alt={item.alt} loading="lazy" className="s-img" style={item.imgStyle} />
                  <div className="s-camera-ring" style={{ width: '10px', height: '10px', top: '8px' }}>
                    <div className="s-lens" style={{ width: '4px', height: '4px' }} />
                  </div>
                  <div className="s-pen-hint" style={{ width: '18px', bottom: '6px', right: '8px' }} />
                </div>
                <div className="s-bottom-edge" style={{ height: '5px', gap: '20px' }}>
                  <div className="s-usbc" style={{ width: '16px', height: '4px' }} />
                  <div className="s-spen-tip" style={{ width: '4px', height: '4px' }} />
                </div>
              </div>
            </div>
            <div className="gal-lbl">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
