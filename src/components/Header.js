"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "@/components/NavLink";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Shadow/border after slight scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close with Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={
        "sticky top-0 z-50 backdrop-blur border-b transition-all duration-300 " +
        (scrolled ? "bg-oil/95 border-steel shadow-md py-1" : "bg-oil/90 border-steel/80 py-2")
      }
    >
      {/* Top bar */}
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/biker-chronicles-logo.png"
            alt="Biker Chronicles Logo"
            width={180}
            height={180}
            sizes="(max-width: 640px) 140px, 180px"
            className={`
              w-auto h-16 sm:h-16
              transition-transform duration-300
              ease-[cubic-bezier(0.2,0.8,0.2,1)]
              ${scrolled ? "scale-[0.875]" : "scale-100"}
              motion-reduce:transition-none motion-reduce:transform-none
            `}
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-sand/90 hover:text-rust focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust/60"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {/* Hamburger */}
          <svg
            className={`h-6 w-6 ${menuOpen ? "hidden" : "block"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {/* X (close) */}
          <svg
            className={`h-6 w-6 ${menuOpen ? "block" : "hidden"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-4 sm:gap-6" aria-label="Main navigation">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/shop">Shop</NavLink>
        </nav>
      </div>

      {/* Mobile slide-down panel */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`
          sm:hidden border-t border-steel/60 origin-top transform transition duration-200
          ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}
        `}
      >
        <nav className="mx-auto max-w-6xl px-4 py-3 grid gap-2" aria-label="Mobile navigation">
          <Link
            href="/about"
            className="py-2 text-sm font-semibold text-sand/90 hover:text-rust underline underline-offset-4"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="py-2 text-sm font-semibold text-sand/90 hover:text-rust underline underline-offset-4"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/events"
            className="py-2 text-sm font-semibold text-sand/90 hover:text-rust underline underline-offset-4"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/shop"
            className="py-2 text-sm font-semibold text-sand/90 hover:text-rust underline underline-offset-4"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
        </nav>
      </div>
    </header>
  );
}
