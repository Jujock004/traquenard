"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-full w-full items-center justify-center bg-white px-4 dark:bg-black">
      {/* ...existing code... */}
      <a href="#">
        <Image
          className="z-10 translate-y-4 dark:invert"
          src="/logos/Fichier 5@4x.png"
          alt="Logo"
          width={300}
          height={40}
        />
      </a>
      {/* Burger mobile */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="absolute right-4 z-30 -translate-y-6 inline-flex items-center justify-center rounded p-2 text-gray-700 md:hidden dark:text-gray-200"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Nav desktop */}
      <nav className="absolute right-4 hidden md:block">
        <ul className="flex space-x-8">
          <li>
            <a
              href="#"
              className="text-2xl text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              artists
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              events
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              gallery
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              contacts
            </a>
          </li>
        </ul>
      </nav>

      {/* Nav mobile */}
      {isOpen && (
        <nav className="absolute right-4 top-full z-20 mt-2 rounded-md border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur md:hidden dark:border-gray-700 dark:bg-black/95">
          <ul className="flex flex-col space-y-3 text-right">
            <li>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                artists
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                events
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                contacts
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
