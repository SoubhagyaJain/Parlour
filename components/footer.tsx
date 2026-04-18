import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-sage/30 bg-botanical text-cream">
      <div className="container-luxe grid gap-8 py-12 md:grid-cols-3">
        <div><h3 className="text-lg font-semibold">New Dolly Herbal Beauty Parlour</h3><p className="mt-2 text-sm text-cream/80">Nature-inspired rituals for timeless beauty and confidence.</p></div>
        <div className="text-sm"><p className="font-medium">Visit</p><p className="text-cream/80">123 Serenity Lane, Your City</p><p className="mt-3 font-medium">Hours</p><p className="text-cream/80">Mon-Sun: 9:00 AM - 8:00 PM</p></div>
        <div className="space-y-2 text-sm">{["About","Services","Pricing","Contact"].map((i)=><Link className="block text-cream/80" key={i} href={`/${i.toLowerCase()}`}>{i}</Link>)}</div>
      </div>
    </footer>
  );
}
