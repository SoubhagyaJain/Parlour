"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { gallery } from "@/data/content";

const categories = ["all","salon","bridal","facial","hair","nail"];

export default function GalleryPage() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = useMemo(() => active === "all" ? gallery : gallery.filter((g) => g.category === active), [active]);

  return (
    <main className="section-pad container-luxe">
      <h1 className="text-4xl font-semibold">Gallery</h1>
      <div className="mt-6 flex flex-wrap gap-3">{categories.map((cat)=><button key={cat} onClick={()=>setActive(cat)} className={`rounded-full px-4 py-2 text-sm capitalize ${active===cat?"bg-botanical text-cream":"border border-sage/40"}`}>{cat}</button>)}</div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((item, i)=><button key={i} onClick={()=>setLightbox(item.src)} className="group overflow-hidden rounded-2xl"><Image src={item.src} alt={item.alt} width={500} height={700} className="h-80 w-full object-cover transition duration-500 group-hover:scale-110" /></button>)}</div>
      {lightbox && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6" onClick={()=>setLightbox(null)}><Image src={lightbox} alt="Expanded" width={900} height={1000} className="max-h-[90vh] w-auto rounded-2xl object-contain" /></div>}
    </main>
  );
}
