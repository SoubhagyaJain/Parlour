import Link from "next/link";
import Image from "next/image";
import { FadeUp } from "@/components/motion";
import { services, testimonials, gallery } from "@/data/content";

export default function Home() {
  return (
    <main>
      <section className="section-pad">
        <div className="container-luxe grid items-center gap-10 md:grid-cols-2">
          <FadeUp>
            <p className="mb-3 inline-block rounded-full border border-gold/60 px-4 py-1 text-xs tracking-[0.2em]">Trusted Herbal Luxury Since 2012</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Nature-inspired beauty, crafted with care.</h1>
            <p className="mt-6 max-w-xl text-botanical/80">Premium herbal treatments, bridal artistry, and wellness rituals designed to reveal your natural glow.</p>
            <div className="mt-8 flex gap-4"><Link href="/contact" className="rounded-full bg-botanical px-6 py-3 text-cream">Book Appointment</Link><Link href="/services" className="rounded-full border border-botanical px-6 py-3">Explore Services</Link></div>
          </FadeUp>
          <FadeUp delay={0.2} className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gold/20 blur-2xl" />
            <Image src={gallery[0].src} alt="Hero beauty" width={700} height={900} className="rounded-[2rem] object-cover shadow-luxe" />
          </FadeUp>
        </div>
      </section>

      <section className="section-pad bg-white/50"><div className="container-luxe"><FadeUp><h2 className="text-3xl font-semibold">Why Choose Us</h2></FadeUp><div className="mt-8 grid gap-4 md:grid-cols-3">{["Herbal treatments","Experienced artists","Premium hygiene","Bridal expertise","Personalized care","Relaxing ambience"].map((item, i)=><FadeUp key={item} delay={i*0.05} className="rounded-2xl border border-sage/30 bg-white p-5">{item}</FadeUp>)}</div></div></section>

      <section className="section-pad"><div className="container-luxe"><FadeUp><h2 className="text-3xl font-semibold">Signature Services</h2></FadeUp><div className="mt-8 grid gap-5 md:grid-cols-3">{services.slice(0,6).map((s,i)=><FadeUp key={s.name} delay={i*0.05} className="rounded-3xl bg-white p-6 shadow-luxe"><h3 className="font-medium">{s.name}</h3><p className="mt-3 text-sm text-botanical/75">{s.description}</p></FadeUp>)}</div></div></section>

      <section className="section-pad bg-botanical text-cream"><div className="container-luxe grid gap-8 md:grid-cols-2"><FadeUp><h2 className="text-3xl font-semibold">Bridal Beauty, Elevated</h2><p className="mt-4 text-cream/80">From pre-bridal skin prep to wedding-day glam, every ritual is bespoke, camera-ready, and long-lasting.</p></FadeUp><FadeUp delay={0.1}><Image src={gallery[1].src} alt="Bridal" width={700} height={500} className="rounded-3xl" /></FadeUp></div></section>

      <section className="section-pad"><div className="container-luxe"><h2 className="text-3xl font-semibold">Client Love</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{testimonials.map((t,i)=><FadeUp key={t.name} delay={i*0.08} className="rounded-2xl border border-sage/30 bg-white p-6"><p>“{t.quote}”</p><p className="mt-4 text-sm font-medium">{t.name}</p></FadeUp>)}</div></div></section>

      <section className="section-pad bg-white/50"><div className="container-luxe"><h2 className="text-3xl font-semibold">FAQ</h2><div className="mt-6 space-y-4">{[["Are products herbal?","Yes, we prioritize gentle botanical formulations."],["Do you take bridal bookings?","Yes, with personalized consultation and trial sessions."],["How to book quickly?","Use WhatsApp or the online appointment form."]].map(([q,a])=><div key={q} className="rounded-2xl border border-sage/30 bg-white p-5"><p className="font-medium">{q}</p><p className="mt-2 text-botanical/80">{a}</p></div>)}</div></div></section>

      <section className="section-pad"><div className="container-luxe rounded-[2rem] bg-gradient-to-r from-botanical to-olive p-10 text-center text-cream"><h2 className="text-3xl font-semibold">Ready for your herbal glow ritual?</h2><p className="mt-3 text-cream/80">Book your appointment or chat instantly on WhatsApp.</p><div className="mt-6"><Link className="rounded-full bg-cream px-6 py-3 text-botanical" href="/contact">Book Appointment</Link></div></div></section>
    </main>
  );
}
