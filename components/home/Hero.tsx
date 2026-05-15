export default function Hero() {
  return (
    <section className="dykt-hero">
      {/* Vidéo background */}
      <video autoPlay muted playsInline loop className="dykt-hero__video">
        <source
          src="https://res.cloudinary.com/dgajrjjz8/video/upload/v1774885243/output-17s_xif10a.mp4"
          type="video/mp4"
        />
      </video>

      {/* Grain */}
      <div className="dykt-hero__grain" aria-hidden="true" />

      {/* Vignette */}
      <div className="dykt-hero__vignette" aria-hidden="true" />

      {/* Contenu */}
      <div className="dykt-hero__content">
        <p className="dykt-hero__eyebrow">Toulouse — collectif</p>
        <h1 className="dykt-hero__title">
          <span className="line1">From hip-hop</span>
          <span className="line2 text-yellow-500">to techno</span>
        </h1>
        <p className="dykt-hero__sub">
          Sound&nbsp;&nbsp;/&nbsp;&nbsp;Aesthetic&nbsp;&nbsp;/&nbsp;&nbsp;Chaos
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="dykt-hero__scroll" aria-hidden="true">
        <span>scroll</span>
        <div className="dykt-hero__scroll-line" />
      </div>

      {/* Damier bas */}
      <div className="dykt-hero__checker" aria-hidden="true" />
    </section>
  );
}
