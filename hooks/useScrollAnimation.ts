"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type AnimationType =
  | "fadeUp"
  | "fadeIn"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "stagger"
  | "revealMask"
  | "counterUp";

interface ScrollAnimationOptions {
  animation: AnimationType;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  start?: string;
  scrub?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    if (!el) return;

    const {
      animation,
      delay = 0,
      duration = 0.9,
      staggerDelay = 0.12,
      start = "top 85%",
      scrub = false,
    } = options;

    const ctx = gsap.context(() => {
      const trigger = {
        trigger: el,
        start,
        toggleActions: scrub ? undefined : "play none none none",
        scrub: scrub ? 1 : false,
      };

      const common = {
        delay,
        duration,
        ease: "power3.out",
        scrollTrigger: trigger,
      };

      switch (animation) {
        case "fadeUp":
          gsap.fromTo(
            el,
            { opacity: 0, y: 48 },
            { opacity: 1, y: 0, ...common },
          );
          break;
        case "fadeIn":
          gsap.fromTo(el, { opacity: 0 }, { opacity: 1, ...common });
          break;
        case "slideLeft":
          gsap.fromTo(
            el,
            { opacity: 0, x: -60 },
            { opacity: 1, x: 0, ...common },
          );
          break;
        case "slideRight":
          gsap.fromTo(
            el,
            { opacity: 0, x: 60 },
            { opacity: 1, x: 0, ...common },
          );
          break;
        case "scaleUp":
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.88 },
            { opacity: 1, scale: 1, ...common },
          );
          break;
        case "revealMask":
          gsap.fromTo(
            el,
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", ...common, ease: "expo.out" },
          );
          break;
        case "stagger": {
          const children = Array.from(el.children);
          gsap.fromTo(
            children,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, stagger: staggerDelay, ...common },
          );
          break;
        }
        case "counterUp": {
          const target = parseInt(el.textContent || "0", 10);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            ...common,
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toString();
            },
          });
          break;
        }
      }
    });

    return () => ctx.revert();
  }, [options]);

  return ref;
}
