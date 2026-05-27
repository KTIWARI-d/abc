"use client";

import { useState } from "react";

const TABS = ["About Us", "Coaches", "Vision", "Mission"];

const STATS = [
  { value: "20", label: "courts" },
  { value: "12", label: "coaches" },
  { value: "17", label: "years" },
  { value: "10", label: "clubs" },
];

const IMAGES = [
  "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1530915365347-e35b749a0381?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=700&q=80",
];

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <section id="about" className="bg-white">
      {/* Tabs */}
      <div className="mx-auto max-w-[1200px] px-6">
        <nav className="flex flex-wrap justify-center gap-8 border-b border-gray-100 pb-2">
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={`relative pb-2 text-[15px] transition ${
                active === i
                  ? "font-semibold text-ink after:absolute after:inset-x-0 after:-bottom-[9px] after:h-[3px] after:rounded-full after:bg-brand"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {t}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="heading-dot text-3xl font-bold text-ink">About Us</h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-500">
            To be the first venue in the world to have 60 multi surface courts at one location
            and establish first one stop tennis academy in the Asia Pacific producing grand slam
            champions.
          </p>

          <div className="mt-10 grid max-w-md grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-brand">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>

          <button className="pill-btn mt-10">Read More</button>
        </div>

        {/* Right image grid */}
        <div className="grid grid-cols-[1.4fr_1fr] grid-rows-2 gap-4">
          <img src={IMAGES[0]} alt="" className="h-52 w-full rounded-md object-cover" />
          <img src={IMAGES[1]} alt="" className="h-52 w-full rounded-md object-cover" />
          <img src={IMAGES[2]} alt="" className="h-52 w-full rounded-md object-cover" />
          <img src={IMAGES[3]} alt="" className="h-52 w-full rounded-md object-cover" />
        </div>
      </div>
    </section>
  );
}
