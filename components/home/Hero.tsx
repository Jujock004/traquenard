export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* La Vidéo Background */}
      <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src="/videos/output-17s.mp4" type="video/mp4" />
        {/* Ajoute une image de fallback pour le chargement ou les vieux navigateurs */}
      </video>

      {/* Le Contenu (Texte en Avant Garde) */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12">
        <h1 className="font-avantgarde text-6xl font-bold uppercase tracking-tighter text-white md:text-8xl lg:text-[10vw] leading-[0.9]">
          From hip-hop <br /> to techno
        </h1>
        <p className="font-avantgarde mt-4 text-lg text-white/80 md:text-2xl uppercase">
          Sound / Esthetic / Chaos
        </p>
      </div>

      {/* Overlay de grain ou de texture (optionnel pour la DA) */}
      <div className="absolute inset-0 z-5 pointer-events-none bg-[url('/noise.png')] opacity-[0.03]"></div>
    </section>
  );
}
