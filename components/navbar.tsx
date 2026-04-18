"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = ["about", "services", "gallery", "pricing", "testimonials", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-cream/95 shadow-md backdrop-blur" : "bg-transparent"}`}>
      <nav className="container-luxe flex items-center justify-between py-4">
        <Link href="/" className="font-semibold tracking-wide">New Dolly Herbal Beauty Parlour</Link>
        <div className="hidden gap-5 text-sm capitalize md:flex">
          {links.map((l) => <Link key={l} href={`/${l}`}>{l}</Link>)}
        </div>
        <Link href="/contact" className="rounded-full bg-botanical px-4 py-2 text-sm text-cream">Book Now</Link>
      </nav>
    </header>
  );
}
