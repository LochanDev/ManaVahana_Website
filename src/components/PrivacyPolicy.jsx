import { useEffect } from 'react';

const THIRD_PARTY_LINKS = [
  { label: 'Google Play Services', url: 'https://www.google.com/policies/privacy/' },
];

const SECTIONS = [
  {
    title: 'Information Collection and Use',
    content: `The Application collects information when you download and use it. This information may include:

• Your device's Internet Protocol address
• The pages of the Application that you visit, the time and date of your visit, the time spent on those pages
• The time spent on the Application
• Your mobile operating system you use`,
  },
  {
    title: 'Cookies and Tracking Technologies',
    content: `The Application or its third-party SDKs may use cookies, SDKs, pixels, and similar technologies to support functionality, analytics, or service delivery. Where required by applicable law, the Service Provider will obtain consent before using non-essential tracking technologies.`,
  },
  {
    title: 'Your Rights',
    content: `You may request access to, correction of, or deletion of your personal data held by the Service Provider. To exercise these rights, or to withdraw consent where processing is based on consent, contact the Service Provider at sublarilochan123@gmail.com.`,
  },
  {
    title: 'Your California Privacy Rights (CCPA/CPRA)',
    content: `If you are a California resident, you have the right to know what personal information is collected, the right to delete personal information, the right to opt out of the sale or sharing of personal information, and the right to non-discrimination for exercising these rights.

To exercise your CCPA/CPRA rights, contact the Service Provider at sublarilochan123@gmail.com.

The Service Provider may use the information you provide to send important information, required notices, and, where permitted by law, marketing communications.

For a better experience while using the Application, the Service Provider may require you to provide certain personally identifiable information. The information the Service Provider requests will be retained and used as described in this privacy policy.`,
  },
  {
    title: 'Third Party Access',
    content: `Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways described in this privacy statement.

The Service Provider may disclose User Provided and Automatically Collected Information:

• As required by law, such as to comply with a subpoena, or similar legal process
• When they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request
• With their trusted service providers who work on their behalf, do not have an independent use of the information the Service Provider discloses to them, and have agreed to adhere to the rules set forth in this privacy statement`,
  },
  {
    title: 'International Data Transfers',
    content: `The Service Provider or its third-party service providers may transfer personal data to countries outside your country of residence, including outside the European Economic Area (EEA). Where applicable law requires safeguards for international transfers, the Service Provider will use appropriate mechanisms:

• Standard Contractual Clauses (SCCs) approved by the European Commission
• Adequacy decisions or other legally recognized transfer mechanisms
• Your consent, where required and legally permitted

Data protection laws in other countries may differ from those in your jurisdiction. Where required by law, the Service Provider will apply appropriate safeguards and obtain any consent required for the transfer.`,
  },
  {
    title: 'Opt-Out Rights',
    content: `You can stop further collection of information from your mobile device by uninstalling the Application. Uninstalling will stop the Application from collecting data from your device, but it does not automatically delete information that has already been transmitted to the Service Provider or to third parties.

To request deletion of your personal data, to withdraw consent, or to exercise any of your rights, contact the Service Provider at sublarilochan123@gmail.com.`,
  },
  {
    title: 'Data Retention Policy',
    content: `The Service Provider retains personal data based on its necessity for the stated purposes:

• User Provided Data: Retained for the duration of your use of the Application plus 12 months thereafter, unless longer retention is required by law
• Automatically Collected Data: Retained for up to 24 months from collection, unless longer retention is required for legal compliance
• Aggregated and Anonymized Data: Retained indefinitely as it no longer identifies you
• Data required for legal compliance: Retained as long as required by applicable law

You may request deletion of your personal data, subject to any legal obligation to retain it. If you want the Service Provider to delete User Provided Data, please contact them at sublarilochan123@gmail.com. Please note that some User Provided Data may be required for the Application to function properly.`,
  },
  {
    title: 'Children',
    content: `The Application is not intended for children under 20 years of age, or such higher age as required by applicable law. The Service Provider does not knowingly solicit data from children or market the Application to them.

Where parental or guardian consent is required under applicable law, the Application is not intended for use without that consent. The Service Provider does not knowingly collect personally identifiable information from children under 20 years of age in violation of applicable law.

In the event the Service Provider discovers that a child has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided the Service Provider with personal information, please contact the Service Provider at sublarilochan123@gmail.com.`,
  },
  {
    title: 'Security',
    content: `The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.`,
  },
  {
    title: 'Data Breach Notification',
    content: `If a data breach occurs that affects your personal data, the Service Provider will notify you in accordance with applicable legal requirements, including, where required, providing information about the nature of the breach and the steps being taken to address it.`,
  },
  {
    title: 'Changes',
    content: `The Service Provider may update this Privacy Policy from time to time. The Service Provider will notify you of material changes by posting the updated Privacy Policy with an effective date. Where required by law, the Service Provider will seek your consent to material changes before they take effect.

Previous versions of this Privacy Policy will be maintained and made available upon request by contacting the Service Provider at sublarilochan123@gmail.com.`,
  },
  {
    title: 'Your Consent',
    content: `Where processing is based on consent, you provide that consent by affirmatively opting in to the relevant feature or action. You may withdraw consent at any time without affecting processing carried out before withdrawal. Processing based on other lawful bases is carried out as described above.`,
  },
  {
    title: 'Contact Us',
    content: `If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at sublarilochan123@gmail.com.`,
  },
];

export default function PrivacyPolicy({ onClose }) {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="pp-overlay" role="dialog" aria-modal="true" aria-label="Privacy Policy" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="pp-modal">

        {/* Header */}
        <div className="pp-head">
          <div className="pp-head-inner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/logo.png" alt="ManaVahana" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
              <div>
                <div className="pp-title">Privacy Policy</div>
                <div className="pp-sub">ManaVahana — మన వాహనం</div>
              </div>
            </div>
            <button className="pp-close" onClick={onClose} aria-label="Close privacy policy">✕</button>
          </div>
          <div className="pp-updated">Last Updated: August 2026 &nbsp;·&nbsp; Effective for app version 1.0+</div>
        </div>

        {/* Intro banner */}
        <div className="pp-banner">
          <span className="pp-ban-ico">🔐</span>
          <div>
            <div className="pp-ban-t">Your data never leaves your device.</div>
            <div className="pp-ban-d">ManaVahana is 100% offline-first. We do not collect, transmit, or sell your vehicle data. Everything stays on your phone.</div>
          </div>
        </div>

        {/* Sections */}
        <div className="pp-body">
          {SECTIONS.map((s) => (
            <div key={s.title} className="pp-section">
              <h3 className="pp-s-title">{s.title}</h3>
              <div className="pp-s-text">
                {s.content.split('\n').map((line, i) =>
                  line.trim() === '' ? <br key={i} /> : <p key={i}>{line}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer bar */}
        <div className="pp-foot">
          <span>© 2026 ManaVahana. All rights reserved.</span>
          <button className="btn-p" style={{ padding: '10px 22px', fontSize: '14px' }} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
