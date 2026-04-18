import { services } from "@/data/content";

export default function PricingPage() {
  return (
    <main className="section-pad container-luxe">
      <h1 className="text-4xl font-semibold">Pricing & Packages</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-3">{services.slice(0,9).map((s)=><article key={s.name} className="rounded-3xl border border-sage/30 bg-white p-6"><h2 className="font-medium">{s.name}</h2><p className="mt-3 text-botanical/75">{s.price}</p></article>)}</div>
      <div className="mt-12 rounded-3xl bg-botanical p-8 text-cream"><h2 className="text-2xl font-semibold">Featured Pre-Bridal Luxe Package</h2><p className="mt-3 text-cream/80">6 sessions • Skin prep • Hair spa • Body polishing • Trial makeup.</p><p className="mt-4 text-3xl">₹24,999</p></div>
    </main>
  );
}
