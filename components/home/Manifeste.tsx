import { Playfair_Display } from "next/font/google";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import "@/styles/manifeste.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export default function Manifeste() {
  return (
    <section className={`dykt-manifeste ${playfair.variable}`}>
      <div className="dykt-manifeste__checker-top" aria-hidden="true" />

      <Reveal
        animation="fadeIn"
        start="top bottom"
        scrub
        className="dykt-manifeste__num"
      >
        01
      </Reveal>

      <div className="dykt-manifeste__inner">
        <Reveal animation="slideLeft" duration={0.8}>
          <div className="dykt-manifeste__divider" />
        </Reveal>
        <div className="dykt-manifeste__title">
          <SplitText
            as="h2"
            className="dykt-manifeste__title"
            duration={1}
            start="top 88%"
          >
            Créer sans permission.
          </SplitText>
        </div>

        <Reveal animation="fadeUp" delay={0.1} start="top 82%">
          <div className="dykt-manifeste__card">
            <div className="dykt-manifeste__body">
              <Reveal animation="fadeUp" delay={0.15} start="top 82%">
                <p>
                  Il y a des espaces qui ne se contentent pas
                  d&rsquo;exister&nbsp;: ils dérangent, ils bousculent, ils
                  provoquent. Do You Know Traquenard est né de cette nécessité
                  de secouer les lignes, de créer sans filtre, sans permission
                  et sans peur.
                </p>
              </Reveal>

              <Reveal animation="fadeUp" delay={0.25} start="top 82%">
                <p>
                  Musique, mode, danse, graphisme — on touche à tout, on
                  mélange, on bouscule. Nos soirées se veulent des zones libres.
                  Pas de format, pas de dogme. On passe de Jeff Mills à Pharrell
                  Williams sans prévenir. Tu danses, tu vibres, tu lâches prise.
                </p>
              </Reveal>

              <Reveal
                animation="revealMask"
                delay={0.1}
                duration={1.1}
                start="top 85%"
              >
                <div className="dykt-manifeste__punch">
                  <blockquote>
                    &ldquo;Tu viens, tu tombes dedans,
                    <br />
                    et tu en ressors différent.&rdquo;
                  </blockquote>
                  <cite>l&rsquo;équipe DYKT</cite>
                </div>
              </Reveal>
            </div>

            <Reveal animation="fadeIn" delay={0.4} start="top 80%">
              <p className="dykt-manifeste__sig">Toulouse — depuis 2022</p>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
