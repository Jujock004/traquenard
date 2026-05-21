"use client";

import { useScrollAnimation, AnimationType } from "@/hooks/useScrollAnimation";

type HtmlTag =
  | "div"
  | "section"
  | "article"
  | "aside"
  | "header"
  | "footer"
  | "main"
  | "nav"
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "ul"
  | "ol"
  | "li"
  | "figure"
  | "figcaption";

interface RevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  start?: string;
  scrub?: boolean;
  className?: string;
  as?: HtmlTag;
}

export default function Reveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.9,
  staggerDelay = 0.12,
  start = "top 85%",
  scrub = false,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useScrollAnimation<HTMLElement>({
    animation,
    delay,
    duration,
    staggerDelay,
    start,
    scrub,
  });

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  );
}
