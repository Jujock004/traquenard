"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type HtmlHeadingTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

interface SplitTextProps {
  children: string;
  as?: HtmlHeadingTag;
  className?: string;
  delay?: number;
  duration?: number;
  start?: string;
}

export default function SplitText({
  children,
  as: Tag = "h2",
  className = "",
  delay = 0,
  duration = 1,
  start = "top 88%",
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const words = children.split(" ");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const wordEls = el.querySelectorAll(".split-word");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordEls,
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          stagger: 0.06,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, [children, delay, duration, start]);

  // Cast explicite pour éviter l'erreur "union type too complex"
  const El = Tag as "h2";

  return (
    <El
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
      aria-label={children}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            verticalAlign: "bottom",
            marginRight: i < words.length - 1 ? "0.25em" : 0,
            paddingBottom: "0.15em",
          }}
        >
          <span className="split-word" style={{ display: "inline-block" }}>
            {word}
          </span>
        </span>
      ))}
    </El>
  );
}
