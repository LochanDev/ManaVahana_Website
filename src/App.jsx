import { useState } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';

import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import Problem       from './components/Problem';
import Features      from './components/Features';
import Reminders     from './components/Reminders';
import Tour          from './components/Tour';
import HowItWorks    from './components/HowItWorks';
import Report        from './components/Report';
import Bilingual     from './components/Bilingual';
import Themes        from './components/Themes';
import Gallery       from './components/Gallery';
import Benefits      from './components/Benefits';
import Privacy       from './components/Privacy';
import Promise       from './components/Promise';
import Download      from './components/Download';
import Footer        from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  useScrollReveal();
  const [showPolicy, setShowPolicy] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Reminders />
      <Tour />
      <HowItWorks />
      <Report />
      <Bilingual />
      <Themes />
      <Gallery />
      <Benefits />
      <Privacy />
      <Promise />
      <Download />
      <Footer onPrivacyClick={() => setShowPolicy(true)} />
      {showPolicy && <PrivacyPolicy onClose={() => setShowPolicy(false)} />}
    </>
  );
}
