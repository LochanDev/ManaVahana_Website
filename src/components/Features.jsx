import PhoneMockup from './PhoneMockup';

export default function Features() {
  return (
    <section id="features" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ padding: '80px 0 0', textAlign: 'center' }}>
          <span className="lbl lbl-dk reveal">Feature Overview</span>
          <h2 className="ttl ttl-dk reveal d1">Everything Your Vehicle Needs.<br /><em>In One App.</em></h2>
        </div>

        {/* 01 — GARAGE */}
        <div className="feat-row reveal">
          <div>
            <p className="f-num">01 — GARAGE</p>
            <h3 className="f-ttl">Manage Your <em>Entire Garage</em></h3>
            <p className="f-desc">Keep every vehicle profile, registration detail, fuel type and odometer reading organized in one place. From motorcycles to EVs, ManaVahana handles your entire fleet.</p>
            <ul className="f-list">
              <li>Motorcycles, Scooters &amp; Cars</li>
              <li>Autos, Trucks &amp; Commercial Vehicles</li>
              <li>Electric Vehicles (EV)</li>
              <li>Full registration &amp; ownership records</li>
              <li>Vehicle photo, fuel type &amp; odometer</li>
            </ul>
          </div>
          <div className="f-vis">
            <div className="f-glow" />
            <PhoneMockup src="/screenshots/profile.jpg" alt="Vehicle profile screen" />
          </div>
        </div>

        {/* 02 — FUEL & MILEAGE */}
        <div className="feat-row rev reveal">
          <div>
            <p className="f-num">02 — FUEL &amp; MILEAGE</p>
            <h3 className="f-ttl">Know Your <em>Real Mileage</em></h3>
            <p className="f-desc">Every fill-up logged. Every rupee tracked. ManaVahana automatically calculates km/L and monthly fuel spend so you always know the true cost of running your vehicle.</p>
            <ul className="f-list">
              <li>Fuel type, quantity, price &amp; total amount</li>
              <li>Odometer &amp; fuel station details</li>
              <li>Full tank and partial fill tracking</li>
              <li>Auto-calculated km/L per fill</li>
            </ul>
            <div className="f-stats">
              <div><div className="f-sv">16.90</div><div className="f-sl">km/L (from app)</div></div>
              <div><div className="f-sv">₹3,851</div><div className="f-sl">Last fill cost</div></div>
              <div><div className="f-sv">35.5L</div><div className="f-sl">Last fill quantity</div></div>
            </div>
          </div>
          <div className="f-vis">
            <div className="f-glow" />
            <PhoneMockup src="/screenshots/fuel.jpg" alt="Fuel logs screen" />
          </div>
        </div>

        {/* 03 — SERVICE & MAINTENANCE */}
        <div className="feat-row reveal">
          <div>
            <p className="f-num">03 — SERVICE &amp; MAINTENANCE</p>
            <h3 className="f-ttl">Never Lose Your <em>Maintenance History</em></h3>
            <p className="f-desc">Build a complete service history from day one. Log every oil change, brake job, tyre replacement and service center visit — with costs, notes, and next service date.</p>
            <div className="tl">
              <div className="tl-item">
                <div className="tl-dot ok">✓</div>
                <div><div className="tl-t">General Service</div><div className="tl-s">Hyundai Kun Motor Service · 12 Mar 2026</div></div>
                <div className="tl-c">₹7,500</div>
              </div>
              <div className="tl-item">
                <div className="tl-dot">🔧</div>
                <div><div className="tl-t">Oil Filter Replacement</div><div className="tl-s">Replaced during general service</div></div>
                <div className="tl-c">—</div>
              </div>
              <div className="tl-item">
                <div className="tl-dot">📋</div>
                <div><div className="tl-t">Multi-point Security Check</div><div className="tl-s">Comprehensive inspection completed</div></div>
                <div className="tl-c">—</div>
              </div>
            </div>
          </div>
          <div className="f-vis">
            <div className="f-glow" />
            <PhoneMockup src="/screenshots/service.jpg" alt="Service history screen" />
          </div>
        </div>

        {/* 04 — EXPENSE ANALYTICS */}
        <div className="feat-row rev reveal">
          <div>
            <p className="f-num">04 — EXPENSE ANALYTICS</p>
            <h3 className="f-ttl">Understand the <em>True Cost</em> of Ownership</h3>
            <p className="f-desc">Track every vehicle expense across categories. See monthly trends, total spending, and cost per kilometer so you always know where your money goes.</p>
            <div className="ex-g">
              <div className="ex-c"><span>⛽</span><span>Fuel</span></div>
              <div className="ex-c"><span>🔧</span><span>Periodic Service</span></div>
              <div className="ex-c"><span>🛣️</span><span>Toll / FASTag</span></div>
              <div className="ex-c"><span>🔩</span><span>Spare Parts</span></div>
              <div className="ex-c"><span>🛡️</span><span>Insurance</span></div>
              <div className="ex-c"><span>🅿️</span><span>Parking</span></div>
            </div>
          </div>
          <div className="f-vis">
            <div className="f-glow" />
            <PhoneMockup src="/screenshots/expenses.jpg" alt="Expense tracking screen" />
          </div>
        </div>

        {/* 05 — DOCUMENT VAULT */}
        <div className="feat-row reveal">
          <div>
            <p className="f-num">05 — DOCUMENT VAULT</p>
            <h3 className="f-ttl">Your Documents. <em>Always Within Reach.</em></h3>
            <p className="f-desc">Keep important vehicle documents organized and protected with biometric authentication. No more searching through WhatsApp or physical folders for your RC or insurance paper.</p>
            <div className="vault-list">
              <div className="vault-row">
                <div className="vault-ico">📋</div>
                <div><div className="vault-t">i20 Registration Smart Card</div><div className="vault-s">Category: RC</div></div>
              </div>
              <div className="vault-row">
                <div className="vault-ico">🌿</div>
                <div style={{ flex: 1 }}><div className="vault-t">i20 PUC Green Slip</div><div className="vault-s">Category: Pollution Certificate</div></div>
                <div className="vault-exp">Exp: 20 Jun 2026</div>
              </div>
            </div>
            <div className="vault-sec">
              <div className="vs-b"><div className="vi">👆</div><div className="vl">Fingerprint</div></div>
              <div className="vs-b"><div className="vi">🔒</div><div className="vl">Local Storage</div></div>
              <div className="vs-b"><div className="vi">⏰</div><div className="vl">Expiry Track</div></div>
            </div>
          </div>
          <div className="f-vis">
            <div className="f-glow" />
            <PhoneMockup src="/screenshots/vault.jpg" alt="Document vault screen" />
          </div>
        </div>
      </div>
    </section>
  );
}
