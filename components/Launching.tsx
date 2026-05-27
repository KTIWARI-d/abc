"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

const CONNECTIVITY = [
  ["Hunter Valley Golf And Country Club", "220m"],
  ["Rydges Resort Hunter Valley", "550m"],
  ["Cressnock Airport", "1.7km"],
  ["Cressnock CBD", "7km"],
  ["Nulkaba Public School", "4.8km"],
  ["Cressnock Hospital", "7.3km"],
  ["Mcdonalds, KFC, Oporto", "7km"],
];

const SLIDES = [
  "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1100&q=80",
];

export default function Launching() {
  const [slide, setSlide] = useState(0);

  return (
    <section className="bg-white py-6">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-none md:grid-cols-[420px_1fr]">
        {/* Left dark gradient panel */}
        <div className="relative bg-gradient-to-br from-teal-deep via-[#1f5740] to-brand p-10 text-white">
          <p className="text-xs font-semibold tracking-[0.25em] text-white/80">LAUNCHING</p>
          <h3 className="mt-3 text-3xl font-bold leading-tight">
            Signature Slam Academy
            <br />
            Hunter Valley
          </h3>

          <p className="mt-8 text-sm font-semibold tracking-wide">SSA Connectivity</p>

          <ul className="mt-5 space-y-4">
            {CONNECTIVITY.map(([name, dist]) => (
              <li key={name} className="flex items-center gap-3 text-[13px]">
                <MapPin className="h-4 w-4 shrink-0 text-white/70" />
                <span className="whitespace-nowrap">{name}</span>
                <span className="mx-2 flex-1 border-b border-dotted border-white/40" />
                <span className="whitespace-nowrap text-white/90">{dist}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right image carousel */}
        <div className="relative min-h-[480px]">
          <img
            src={SLIDES[slide]}
            alt="Aerial view of Hunter Valley"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-5 right-6 flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  slide === i ? "w-6 bg-white" : "w-2.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
