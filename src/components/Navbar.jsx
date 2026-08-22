import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (e, id) => {
    e.preventDefault();
    closeMenu();
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-in">
          <a href="#hero" className="nbrand" onClick={(e) => scrollTo(e, '#hero')}>
            <img src="/logo.png" alt="ManaVahana logo" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
            <span className="nbrand-en">ManaVahana</span>
            <span className="nbrand-te">మన వాహనం</span>
          </a>
          <ul className="nlinks">
            {[['#features','Features'],['#tour','App Tour'],['#how','How It Works'],['#privacy','Privacy'],['#themes','Themes'],['#footer-section','About']].map(([href, label]) => (
              <li key={href}><a href={href} onClick={(e) => scrollTo(e, href)}>{label}</a></li>
            ))}
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a href="#download" className="n-dl" id="nav-dl" onClick={(e) => scrollTo(e, '#download')}>Download App</a>
            <div
              className={`hbg${menuOpen ? ' open' : ''}`}
              id="hbg"
              role="button"
              aria-label="Menu"
              tabIndex={0}
              onClick={() => setMenuOpen(!menuOpen)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setMenuOpen(!menuOpen); }}
            >
              <span /><span /><span />
            </div>
          </div>
        </div>
      </nav>

      <div className={`mmenu${menuOpen ? ' open' : ''}`} id="mmenu">
        {[['#features','Features'],['#tour','App Tour'],['#how','How It Works'],['#privacy','Privacy'],['#themes','Themes'],['#footer-section','About']].map(([href, label]) => (
          <a key={href} href={href} className="ml" onClick={(e) => scrollTo(e, href)}>{label}</a>
        ))}
        <a
          href="https://play.google.com/store/apps/details?id=com.Lochan.ManaVahana&hl=en_IN"
          target="_blank" rel="noopener noreferrer"
          className="ml m-dl"
          onClick={closeMenu}
        >Download ManaVahana</a>
      </div>
    </>
  );
}
