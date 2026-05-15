"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-8 px-6 font-avantgarde border-t border-zinc-800">
      <div>
        {/* L'Impact Typographique */}
        <div className="mb-20 overflow-hidden">
          <h2 className="text-[14vw] leading-[0.85] font-bold uppercase tracking-tighter hover:italic transition-all duration-500 cursor-default">
            DO YOU KNOW <br />
            <span className="text-zinc-800 hover:text-white transition-colors duration-700">
              TRAQUENARD
            </span>
          </h2>
        </div>

        {/* Le Grid d'infos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 uppercase text-[10px] md:text-xs tracking-widest border-t border-zinc-900 pt-10">
          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-zinc-500">Navigation</span>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="hover:text-zinc-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/artists" className="hover:text-zinc-400">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-zinc-400">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-zinc-400">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <span className="text-zinc-500">Socials</span>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="https://www.instagram.com/traquenard_dyk/"
                  target="_blank"
                  className="hover:line-through"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:line-through">
                  Soundcloud
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 col-span-2 md:col-span-2 md:items-end">
            <span className="text-zinc-500">Booking / Inquiries</span>
            <Link
              href="mailto:contact@collectif.com"
              className="text-xl md:text-2xl hover:italic underline decoration-zinc-800 underline-offset-8 hover:decoration-white transition-all"
            >
              contact@collectif.com
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex justify-between items-center text-[10px] text-zinc-600 uppercase">
          <p>©2026 Do You Know Traquenard</p>
          <p className="hidden md:block">Designed for the underground</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
