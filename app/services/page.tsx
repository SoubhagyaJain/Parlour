import Link from "next/link";
import { FadeUp } from "@/components/motion";
import { services } from "@/data/content";

export default function ServicesPage() {
  return (
    <main className="section-pad container-luxe">
      <FadeUp><h1 className="text-4xl font-semibold">Services</h1><p className="mt-3 text-botanical/80">Luxury herbal beauty rituals, tailored for every mood and milestone.</p></FadeUp>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((s, i)=><FadeUp key={s.name} delay={i*0.03} className="rounded-3xl border border-sage/30 bg-white p-6 shadow-luxe"><h2 className="text-xl font-medium">{s.name}</h2><p className="mt-3 text-sm text-botanical/75">{s.description}</p><p className="mt-4 text-sm">Duration: {s.duration}</p><p className="text-sm">Starting: {s.price}</p><Link href="/contact" className="mt-5 inline-block rounded-full bg-botanical px-4 py-2 text-sm text-cream">Book This</Link></FadeUp>)}</div>
    </main>
  );
}
