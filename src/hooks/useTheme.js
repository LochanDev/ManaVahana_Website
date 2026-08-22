import { useCallback } from 'react';

export const THEMES = {
  heritage: {
    '--primary':        '#B45309',
    '--primary-lt':     '#D97706',
    '--primary-dk':     '#92400E',
    '--secondary':      '#065F46',
    '--secondary-lt':   '#059669',
    '--bg-light':       '#FAF9F6',
    '--bg-dark':        '#12110E',
    '--bg-dark2':       '#1C1A16',
    '--bg-dark3':       '#252219',
    '--tx-dark':        '#1A1714',
    '--tx-med':         '#4A4540',
    '--border-l':       'rgba(180,83,9,.12)',
    '--accent-glow':    'rgba(180,83,9,.18)',
    '--btn-shadow':     '0 4px 20px rgba(180,83,9,.3)',
    '--btn-shadow-h':   '0 8px 32px rgba(180,83,9,.42)',
    '--card-bg':        '#FFFFFF',
    '--card-h3':        '#1A1714',
  },
  cyber: {
    '--primary':        '#FF5722',
    '--primary-lt':     '#FF7043',
    '--primary-dk':     '#E64A19',
    '--secondary':      '#FF9800',
    '--secondary-lt':   '#FFB300',
    '--bg-light':       '#0D0D0D',
    '--bg-dark':        '#050505',
    '--bg-dark2':       '#0A0A0A',
    '--bg-dark3':       '#111111',
    '--tx-dark':        '#F0F0F0',
    '--tx-med':         '#AAAAAA',
    '--border-l':       'rgba(255,87,34,.18)',
    '--accent-glow':    'rgba(255,87,34,.22)',
    '--btn-shadow':     '0 4px 20px rgba(255,87,34,.35)',
    '--btn-shadow-h':   '0 8px 32px rgba(255,87,34,.5)',
    '--card-bg':        'rgba(255,255,255,.06)',
    '--card-h3':        '#F0F0F0',
  },
  sport: {
    '--primary':        '#D32F2F',
    '--primary-lt':     '#EF5350',
    '--primary-dk':     '#B71C1C',
    '--secondary':      '#FF5252',
    '--secondary-lt':   '#FF6D6D',
    '--bg-light':       '#0E0808',
    '--bg-dark':        '#080303',
    '--bg-dark2':       '#0F0505',
    '--bg-dark3':       '#160808',
    '--tx-dark':        '#F5EEEE',
    '--tx-med':         '#AA9999',
    '--border-l':       'rgba(211,47,47,.2)',
    '--accent-glow':    'rgba(211,47,47,.22)',
    '--btn-shadow':     '0 4px 20px rgba(211,47,47,.35)',
    '--btn-shadow-h':   '0 8px 32px rgba(211,47,47,.5)',
    '--card-bg':        'rgba(255,255,255,.06)',
    '--card-h3':        '#F5EEEE',
  },
  eco: {
    '--primary':        '#065F46',
    '--primary-lt':     '#059669',
    '--primary-dk':     '#064E3B',
    '--secondary':      '#10B981',
    '--secondary-lt':   '#34D399',
    '--bg-light':       '#F0FDF4',
    '--bg-dark':        '#052E1C',
    '--bg-dark2':       '#063824',
    '--bg-dark3':       '#07422A',
    '--tx-dark':        '#052E1C',
    '--tx-med':         '#1E6B45',
    '--border-l':       'rgba(6,95,70,.15)',
    '--accent-glow':    'rgba(6,95,70,.2)',
    '--btn-shadow':     '0 4px 20px rgba(6,95,70,.3)',
    '--btn-shadow-h':   '0 8px 32px rgba(6,95,70,.45)',
    '--card-bg':        '#FFFFFF',
    '--card-h3':        '#052E1C',
  },
  retro: {
    '--primary':        '#FF6D00',
    '--primary-lt':     '#FF8F00',
    '--primary-dk':     '#E65100',
    '--secondary':      '#FFAB40',
    '--secondary-lt':   '#FFD180',
    '--bg-light':       '#FFF8F0',
    '--bg-dark':        '#1A0E00',
    '--bg-dark2':       '#231200',
    '--bg-dark3':       '#2C1700',
    '--tx-dark':        '#2C1A00',
    '--tx-med':         '#6B3E00',
    '--border-l':       'rgba(255,109,0,.15)',
    '--accent-glow':    'rgba(255,109,0,.2)',
    '--btn-shadow':     '0 4px 20px rgba(255,109,0,.32)',
    '--btn-shadow-h':   '0 8px 32px rgba(255,109,0,.48)',
    '--card-bg':        '#FFFBF4',
    '--card-h3':        '#2C1A00',
  },
  royal: {
    '--primary':        '#C8900A',
    '--primary-lt':     '#FFD700',
    '--primary-dk':     '#A07008',
    '--secondary':      '#FFC107',
    '--secondary-lt':   '#FFE082',
    '--bg-light':       '#0E0C00',
    '--bg-dark':        '#080600',
    '--bg-dark2':       '#100D00',
    '--bg-dark3':       '#181300',
    '--tx-dark':        '#FFF8DC',
    '--tx-med':         '#C8A800',
    '--border-l':       'rgba(255,215,0,.18)',
    '--accent-glow':    'rgba(255,215,0,.2)',
    '--btn-shadow':     '0 4px 20px rgba(200,144,10,.38)',
    '--btn-shadow-h':   '0 8px 32px rgba(200,144,10,.55)',
    '--card-bg':        'rgba(255,255,255,.06)',
    '--card-h3':        '#FFF8DC',
  },
};

export const THEME_NAMES = {
  heritage: 'Traditional Heritage',
  cyber:    'Cyber Dark Tech',
  sport:    'Sport Carbon',
  eco:      'Eco Minimal',
  retro:    'Retro Cruise',
  royal:    'Royal Gold',
};

/**
 * useTheme — returns an applyTheme(name) callback that sets
 * CSS custom properties on :root and shows a toast notification.
 */
export function useTheme() {
  const applyTheme = useCallback((name) => {
    const palette = THEMES[name];
    if (!palette) return;

    const root = document.documentElement;
    Object.entries(palette).forEach(([prop, val]) => {
      root.style.setProperty(prop, val);
    });
    root.dataset.theme = name;

    // Show toast
    let toast = document.getElementById('theme-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'theme-toast';
      Object.assign(toast.style, {
        position: 'fixed', bottom: '28px', right: '28px', zIndex: '9999',
        background: 'rgba(18,17,14,0.92)', backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px',
        padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '10px',
        fontSize: '14px', fontWeight: '700', color: '#fff',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        opacity: '0', transform: 'translateY(8px)',
        transition: 'opacity .3s ease, transform .3s ease',
        pointerEvents: 'none', fontFamily: 'Inter, sans-serif',
      });
      document.body.appendChild(toast);
    }

    toast.innerHTML = `<span style="width:12px;height:12px;border-radius:50%;background:${palette['--primary']};display:inline-block;flex-shrink:0;box-shadow:0 0 8px ${palette['--primary']}60;"></span><span>${THEME_NAMES[name]} applied</span>`;
    toast.style.borderColor = palette['--primary'] + '44';
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
    }, 2500);

    // Add transition style once
    if (!document.getElementById('theme-transition')) {
      const s = document.createElement('style');
      s.id = 'theme-transition';
      s.textContent = [
        'body,section,nav,footer,',
        '.btn-p,.btn-s,.n-dl,',
        '.prob-c,.ben-c,.prv-c,.tc,',
        '.feat-row,.rem-c,.rep-card,',
        '.pr-b,.vault-row,.ex-c,.vs-b,',
        '.tl-dot,.step-n,.s-tag,',
        '.lbl,.lbl-dk,.f-num,',
        '.rep-v.a,.rep-pl,.rem-d,',
        '.fc-ico,.f-glow,.t-glow,',
        '.tc-bar,.theme-bar,.foot-b',
        '{ transition: background .4s ease, background-color .4s ease,',
        '  color .4s ease, border-color .4s ease,',
        '  box-shadow .4s ease !important; }',
      ].join('');
      document.head.appendChild(s);
    }
  }, []);

  return { applyTheme };
}
