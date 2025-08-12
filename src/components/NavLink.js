"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const base =
    "inline-flex items-center px-1 py-2 text-sm font-semibold transition-colors " +
    "hover:text-rust focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust/60 " +
    "rounded-md";

  const active = isActive
    ? "text-rust underline underline-offset-4"
    : "text-sand/90";

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`${base} ${active}`}
    >
      {children}
    </Link>
  );
}
