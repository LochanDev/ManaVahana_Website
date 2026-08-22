/**
 * PhoneMockup — Samsung Galaxy S26 Ultra style frame.
 * Screenshot fills the full screen; punch-hole camera overlaid on top.
 *
 * Props:
 *   src      — image source URL
 *   alt      — img alt text
 *   size     — 'sm' | 'md' | 'lg'  (default: 'md')
 *   id       — optional id for the inner <img>
 *   imgStyle — optional inline style for the img
 */
export default function PhoneMockup({ src, alt, size = 'md', id, imgStyle }) {
  const sizeClass = size === 'lg' ? 'phone-lg' : size === 'sm' ? 'phone-sm' : '';

  return (
    <div className={`phone ${sizeClass}`}>
      {/* ── Outer titanium frame ── */}
      <div className="s-frame">

        {/* ── Left side: volume up + volume down ── */}
        <div className="s-vol-up" />
        <div className="s-vol-dn" />

        {/* ── Right side: power / side key ── */}
        <div className="s-power" />

        {/* ── Screen — full-bleed screenshot ── */}
        <div className="s-screen">
          <img src={src} alt={alt} loading="lazy" id={id} className="s-img" style={imgStyle} />

          {/* Punch-hole camera floating on top of screenshot */}
          <div className="s-camera-ring">
            <div className="s-lens" />
          </div>

          {/* S Pen slot hint at bottom-right */}
          <div className="s-pen-hint" />
        </div>

        {/* ── Bottom edge: USB-C port + S Pen slot ── */}
        <div className="s-bottom-edge">
          <div className="s-usbc" />
          <div className="s-spen-tip" />
        </div>
      </div>
    </div>
  );
}
