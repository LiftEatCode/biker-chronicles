"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "@/components/NavLink";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle shadow/border once the user scrolls a bit
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-50 backdrop-blur border-b " +
        (scrolled ? "bg-oil/95 border-steel shadow-md" : "bg-oil/90 border-steel/80")
      }
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/biker-chronicles-logo.png"
            alt="Biker Chronicles Logo"
            width={180}        // intrinsic size for optimization
            height={180}
            sizes="(max-width: 640px) 140px, 180px"
            className="h-14 w-auto sm:h-16" // visual size control
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-4 sm:gap-6" aria-label="Main navigation">
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/shop">Shop</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}
