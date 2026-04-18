"use client";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/content";

export default function TestimonialsPage() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % testimonials.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="section-pad container-luxe">
      <h1 className="text-4xl font-semibold">Testimonials</h1>
      <div className="mt-10 rounded-3xl bg-white p-10 shadow-luxe">
        <p className="text-lg">“{testimonials[index].quote}”</p>
        <p className="mt-5 font-medium">{testimonials[index].name}</p>
        <p className="text-gold">★★★★★</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">{testimonials.map((t)=><div key={t.name} className="rounded-2xl border border-sage/30 bg-white p-5"><p>{t.quote}</p><p className="mt-3 text-sm font-medium">{t.name}</p></div>)}</div>
    </main>
  );
}
