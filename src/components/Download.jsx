import PhoneMockup from './PhoneMockup';

const PlayIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.18 23.76c.3.17.64.24.99.19l12.5-11.95-3.14-3.14L3.18 23.76zm17.64-13.3L17.7 8.62l-3.35 3.38 3.35 3.36 3.15-1.85c.9-.52.9-1.73-.03-2.25zM2.05 1.16C1.84 1.37 1.72 1.7 1.72 2.1v19.8c0 .4.12.73.33.94l.09.08 11.08-11.08v-.26L2.14 1.08l-.09.08zm10.44 10.01l3.22-3.22-10.5-6.11 7.28 9.33z"/>
  </svg>
);

const PlayIconSmall = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#4CAF50" aria-hidden="true">
    <path d="M3.18 23.76c.3.17.64.24.99.19l12.5-11.95-3.14-3.14L3.18 23.76zm17.64-13.3L17.7 8.62l-3.35 3.38 3.35 3.36 3.15-1.85c.9-.52.9-1.73-.03-2.25zM2.05 1.16C1.84 1.37 1.72 1.7 1.72 2.1v19.8c0 .4.12.73.33.94l.09.08 11.08-11.08v-.26L2.14 1.08l-.09.08zm10.44 10.01l3.22-3.22-10.5-6.11 7.28 9.33z"/>
  </svg>
);

const scrollTo = (e, id) => {
  e.preventDefault();
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

const GP_URL = 'https://play.google.com/store/apps/details?id=com.Lochan.ManaVahana&hl=en_IN';

export default function Download() {
  return (
    <section id="download" className="sp">
      <div className="container">
        <div className="dl-g">
          <div className="reveal">
            <div className="dl-en">ManaVahana</div>
            <span className="dl-te">మన వాహనం</span>
            <h2 className="dl-t">Your Vehicle Deserves More Than a Notebook.</h2>
            <p className="dl-s">Track it. Protect it. Understand it.</p>
            <div className="dl-act">
              <a href={GP_URL} target="_blank" rel="noopener noreferrer" className="btn-p btn-lg" id="dl-main">
                <PlayIcon /> Get on Google Play
              </a>
              <a href="#tour" className="btn-s btn-s-dk btn-lg" id="dl-tour" onClick={(e) => scrollTo(e, '#tour')}>Explore the App</a>
            </div>
            <a
              href={GP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display:'inline-flex',alignItems:'center',gap:'10px',marginTop:'18px',background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.14)',borderRadius:'12px',padding:'11px 18px',transition:'all .25s' }}
              onMouseOver={e => e.currentTarget.style.background='rgba(255,255,255,.12)'}
              onMouseOut={e => e.currentTarget.style.background='rgba(255,255,255,.06)'}
            >
              <PlayIconSmall />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize:'10px',color:'rgba(255,255,255,.4)',fontWeight:'500',lineHeight:'1' }}>GET IT ON</div>
                <div style={{ fontSize:'15px',color:'#fff',fontWeight:'700',lineHeight:'1.3' }}>Google Play</div>
              </div>
            </a>
          </div>

          <div className="dl-vis reveal d2">
            <div className="dl-ph">
              <PhoneMockup src="/screenshots/vault.jpg" alt="ManaVahana document vault" size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
