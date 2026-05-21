"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Playfair_Display } from "next/font/google";
import { teamMembers, TeamMember } from "@/data/team";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import "@/styles/artists.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
  variable: "--font-playfair",
});

type PhotoCell = { type: "photo"; member: TeamMember };
type EmptyCell = { type: "empty"; label: string };
type GridCell = PhotoCell | EmptyCell;

function buildCheckerGrid(members: TeamMember[]): GridCell[] {
  return [
    { type: "photo", member: members[0] },
    { type: "empty", label: "01" },
    { type: "photo", member: members[1] },
    { type: "empty", label: "02" },
    { type: "empty", label: "03" },
    { type: "photo", member: members[2] },
    { type: "empty", label: "04" },
    { type: "photo", member: members[3] },
  ];
}

export default function Artists() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const grid = gridRef.current;
    if (!grid) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        grid.querySelectorAll(".artist-card"),
        { opacity: 0, y: 50, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        grid.querySelectorAll(".artist-empty"),
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  const cells = buildCheckerGrid(teamMembers);

  return (
    <section className={`dykt-artists ${playfair.variable}`}>
      <div className="dykt-artists__checker-top" aria-hidden="true" />

      <Reveal
        animation="fadeIn"
        start="top bottom"
        scrub
        className="dykt-artists__num"
      >
        02
      </Reveal>

      <div className="dykt-artists__inner">
        <div className="dykt-artists__header">
          <Reveal animation="fadeUp" duration={0.6}>
            <p className="dykt-artists__eyebrow">Le collectif</p>
          </Reveal>

          <SplitText
            as="h2"
            className="dykt-artists__title"
            duration={1}
            start="top 88%"
          >
            Les artistes
          </SplitText>

          <Reveal animation="slideLeft" duration={0.8} delay={0.2}>
            <div className="dykt-artists__divider" />
          </Reveal>
        </div>

        <div className="dykt-artists__grid" ref={gridRef}>
          {cells.map((cell, i) => {
            if (cell.type === "photo") {
              const { member } = cell;
              return (
                <div
                  key={`photo-${member.id}`}
                  className={`artist-card cell-${i}`}
                  style={{ transform: `rotate(${member.rotation}deg)` }}
                >
                  <div className="artist-card__img-wrap">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      style={{ opacity: 0.75 }}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="artist-card__overlay" />
                  <div className="artist-card__info">
                    <span className="artist-card__role">{member.role}</span>
                    <h3 className="artist-card__name">{member.name}</h3>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={`empty-${i}`}
                className={`artist-empty cell-${i}`}
                aria-hidden="true"
              >
                <span className="artist-empty__label">{cell.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
