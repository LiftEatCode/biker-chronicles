export default function Footer() {
  return (
    <footer className="mt-20 border-t border-steel/60">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-sand/70 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Biker‑Chronicles</p>
        <nav className="flex gap-4">
          <a href="/about" className="hover:text-rust underline underline-offset-4">About</a>
          <a href="/blog" className="hover:text-rust underline underline-offset-4">Blog</a>
          <a href="/events" className="hover:text-rust underline underline-offset-4">Events</a>
          <a href="/shop" className="hover:text-rust underline underline-offset-4">Shop</a>
        </nav>
      </div>
    </footer>
  );
}