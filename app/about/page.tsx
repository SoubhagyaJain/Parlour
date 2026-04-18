import { FadeUp } from "@/components/motion";

export default function AboutPage() {
  return (
    <main className="section-pad container-luxe space-y-12">
      <FadeUp><h1 className="text-4xl font-semibold">Our Story</h1><p className="mt-4 max-w-3xl text-botanical/80">New Dolly Herbal Beauty Parlour began with one vision: blend time-honored herbal care with modern luxury artistry, creating calm spaces where every woman feels radiant and seen.</p></FadeUp>
      <div className="grid gap-6 md:grid-cols-2">
        <FadeUp className="rounded-3xl bg-white p-8 shadow-luxe"><h2 className="text-2xl font-semibold">Natural Beauty Philosophy</h2><p className="mt-3 text-botanical/80">We believe elegance starts with skin health, mindful rituals, and personalized care that enhances your natural features.</p></FadeUp>
        <FadeUp delay={0.1} className="rounded-3xl bg-white p-8 shadow-luxe"><h2 className="text-2xl font-semibold">Hygiene & Trust</h2><p className="mt-3 text-botanical/80">Sterile tools, premium products, and trained specialists ensure every appointment feels safe and indulgent.</p></FadeUp>
      </div>
    </main>
  );
}
