export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <section className="space-y-4">
        <h1 className="font-heading text-5xl tracking-wide">Biker‑Chronicles</h1>
        <p className="max-w-2xl text-lg text-sand/80">
          Road stories, wrench tips, and gear reviews — plus limited‑run merch built for real miles.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/blog" className="rounded-xl bg-rust px-5 py-2 font-semibold no-underline">
            Read the blog
          </a>
          <a href="/shop" className="rounded-xl border border-steel px-5 py-2 font-semibold no-underline">
            Shop merch
          </a>
        </div>
      </section>
    </main>
  );
}
