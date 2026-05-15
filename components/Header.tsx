"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "events", href: "/events" },
  { label: "gallery", href: "/gallery" },
  { label: "mixtapes", href: "/mixtapes" },
  { label: "contact", href: "/contact" },
];

function GlitchLink({
  href,
  label,
  onClick,
  className = "",
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`glitch-link ${className}`}
      data-text={label}
    >
      <span className="glitch-main">{label}</span>
      <span className="glitch-clone" aria-hidden="true">
        {label}
      </span>
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        .dykt-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1.5rem;
          transition: background 0.4s ease, backdrop-filter 0.4s ease;
        }

        .dykt-header.scrolled {
          background: rgba(0, 0, 0, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .dykt-header .logo-wrap {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          display: flex;
          align-items: flex-start;
          z-index: 10;
        }

        .dykt-header .logo-wrap img {
          transform: translateY(8px);
          transition: opacity 0.3s ease;
        }

        .dykt-header .logo-wrap img:hover {
          opacity: 0.8;
        }

        /* Desktop nav */
        .dykt-nav-desktop {
          position: absolute;
          right: 1.5rem;
          display: none;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        @media (min-width: 768px) {
          .dykt-nav-desktop {
            display: flex;
          }
        }

        /* Glitch link */
        .glitch-link {
          position: relative;
          display: inline-block;
          font-family: var(--font-avantgarde), ui-sans-serif, system-ui;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.75);
          overflow: visible;
          transition: color 0.2s ease;
        }

        .glitch-link:hover {
          color: #ffffff;
        }

        .glitch-main {
          display: block;
          position: relative;
          z-index: 1;
          transition: transform 0.15s ease;
        }

        .glitch-clone {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          color: rgba(255, 255, 255, 0.35);
          transform: translate(0px, 0px);
          opacity: 0;
          pointer-events: none;
          z-index: 0;
          transition: transform 0s, opacity 0.1s ease;
          white-space: nowrap;
        }

        .glitch-link:hover .glitch-main {
          transform: translate(-2px, -2px);
        }

        .glitch-link:hover .glitch-clone {
          opacity: 1;
          transform: translate(3px, 3px);
          transition: transform 0.15s ease, opacity 0.1s ease;
        }

        /* Burger button */
        .dykt-burger {
          position: absolute;
          right: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          z-index: 60;
        }

        @media (min-width: 768px) {
          .dykt-burger {
            display: none;
          }
        }

        .dykt-burger span {
          display: block;
          width: 100%;
          height: 1.5px;
          background: white;
          transform-origin: center;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
        }

        .dykt-burger.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }

        .dykt-burger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .dykt-burger.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        /* Mobile menu fullscreen */
        .dykt-mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 55;
          background: #000000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }

        .dykt-mobile-menu.open {
          opacity: 1;
          pointer-events: all;
        }

        /* Damier border top/bottom on mobile menu */
        .dykt-mobile-menu::before,
        .dykt-mobile-menu::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          height: 12px;
          background-image: repeating-linear-gradient(
            90deg,
            #ffffff 0px,
            #ffffff 12px,
            #000000 12px,
            #000000 24px
          );
          opacity: 0.15;
        }

        .dykt-mobile-menu::before { top: 0; }
        .dykt-mobile-menu::after { bottom: 0; }

        .dykt-mobile-nav {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .dykt-mobile-menu .glitch-link {
          font-size: clamp(2.5rem, 10vw, 4.5rem);
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 0.06em;
          padding: 0.15em 0;
          transform: translateY(20px);
          opacity: 0;
          transition: color 0.2s ease, transform 0.4s ease, opacity 0.4s ease;
        }

        .dykt-mobile-menu.open .glitch-link {
          transform: translateY(0);
          opacity: 1;
        }

        .dykt-mobile-menu.open li:nth-child(1) .glitch-link { transition-delay: 0.08s; }
        .dykt-mobile-menu.open li:nth-child(2) .glitch-link { transition-delay: 0.14s; }
        .dykt-mobile-menu.open li:nth-child(3) .glitch-link { transition-delay: 0.20s; }
        .dykt-mobile-menu.open li:nth-child(4) .glitch-link { transition-delay: 0.26s; }

        .dykt-mobile-menu .glitch-link:hover {
          color: #ffffff;
        }

        .dykt-mobile-menu .glitch-link:hover .glitch-main {
          transform: translate(-3px, -3px);
        }

        .dykt-mobile-menu .glitch-link:hover .glitch-clone {
          opacity: 1;
          transform: translate(4px, 4px);
        }

        /* Social in mobile menu */
        .dykt-mobile-social {
          position: absolute;
          bottom: 2.5rem;
          font-family: var(--font-avantgarde), ui-sans-serif, system-ui;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.3);
          opacity: 0;
          transition: opacity 0.4s ease 0.3s;
        }

        .dykt-mobile-menu.open .dykt-mobile-social {
          opacity: 1;
        }
      `}</style>

      <header
        ref={headerRef}
        className={`dykt-header${scrolled ? " scrolled" : ""}`}
        aria-label="Navigation principale"
      >
        {/* Logo centré */}
        <Link
          href="/"
          className="logo-wrap"
          aria-label="Do You Know Traquenard — accueil"
        >
          <Image
            src="/logos/Fichier 5@4x.png"
            alt="DYKT"
            width={260}
            height={38}
            priority
            className="dark:invert hover-shake"
          />
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navigation principale">
          <ul className="dykt-nav-desktop">
            {navItems.map((item) => (
              <li key={item.href}>
                <GlitchLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </nav>

        {/* Burger mobile */}
        <button
          type="button"
          className={`dykt-burger${isOpen ? " open" : ""}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile menu fullscreen */}
      <div
        id="mobile-menu"
        className={`dykt-mobile-menu${isOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        <nav aria-label="Navigation mobile">
          <ul className="dykt-mobile-nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <GlitchLink
                  href={item.href}
                  label={item.label}
                  onClick={() => setIsOpen(false)}
                />
              </li>
            ))}
          </ul>
        </nav>
        <p className="dykt-mobile-social">@traquenard_dyk</p>
      </div>
    </>
  );
}
