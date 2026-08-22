const GP_URL = 'https://play.google.com/store/apps/details?id=com.Lochan.ManaVahana&hl=en_IN';

const scrollTo = (e, id) => {
  e.preventDefault();
  const el = document.querySelector(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer id="footer-section">
      <div className="container">
        <div className="foot-g">
          <div>
            <div className="f-brand-n">ManaVahana</div>
            <div className="f-brand-te">మన వాహనం</div>
            <p className="f-brand-d">Your Complete Smart Garage, Mileage Tracker &amp; Biometric Vehicle Locker. Built for Indian vehicle owners.</p>
          </div>

          <div>
            <div className="fc-t">Product</div>
            <ul className="flinks">
              {[['#features','Features'],['#features','Fuel Tracking'],['#features','Service Tracking'],['#features','Expense Analytics'],['#features','Document Vault'],['#report','Reports']].map(([href, label]) => (
                <li key={label}><a href={href} onClick={(e) => scrollTo(e, href)}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="fc-t">Security</div>
            <ul className="flinks">
              {[['#privacy','Privacy'],['#privacy','Offline First'],['#privacy','Encrypted Backup'],['#privacy','Biometric Protection']].map(([href, label]) => (
                <li key={label}><a href={href} onClick={(e) => scrollTo(e, href)}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="fc-t">Language</div>
            <ul className="flinks">
              <li><a href="#">English</a></li>
              <li><a href="#" style={{ fontFamily: 'var(--font-te)' }}>తెలుగు</a></li>
            </ul>
            <div style={{ marginTop: '20px' }}>
              <div className="fc-t">App</div>
              <ul className="flinks">
                <li><a href={GP_URL} target="_blank" rel="noopener noreferrer">Download on Google Play</a></li>
                <li><a href="#tour" onClick={(e) => scrollTo(e, '#tour')}>App Tour</a></li>
                <li><a href="#themes" onClick={(e) => scrollTo(e, '#themes')}>Themes</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="foot-b">
          <span className="foot-c">&#169; 2026 ManaVahana. All rights reserved.</span>
          <span className="foot-tg">Your Vehicle. Your Data. Your Control.</span>
        </div>
      </div>
    </footer>
  );
}
