import { MoveRight } from "lucide-react";

const FEATURES = [
  "First venue in the world",
  "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
  "First one stop tennis academy in Asia Pacific",
];

function FeatureItem({ text, bold }: { text: string; bold?: boolean }) {
  return (
    <li className="flex gap-3">
      <MoveRight className="mt-1 h-4 w-4 shrink-0 text-brand" strokeWidth={2.4} />
      <span
        className={`text-sm leading-relaxed ${
          bold ? "font-semibold text-ink" : "text-gray-500"
        }`}
      >
        {text}
      </span>
    </li>
  );
}

export default function KeyFeatures() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* faint topographic lines on the left edge */}
      <svg
        className="pointer-events-none absolute -left-20 top-0 h-full w-72 opacity-30"
        viewBox="0 0 300 800"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <path
            key={i}
            d={`M${-40 + i * 18} 0 C ${120 + i * 18} 250, ${-20 + i * 18} 500, ${
              160 + i * 18
            } 800`}
            fill="none"
            stroke="#99B81B"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="heading-dot text-3xl font-bold text-ink">key Features</h2>
            <p className="mt-3 text-sm text-gray-500">
              Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s.
            </p>
          </div>
          <button className="pill-btn">Register Now</button>
        </div>

        <div className="mt-12 grid gap-x-16 gap-y-7 md:grid-cols-2">
          <ul className="space-y-7">
            {FEATURES.map((f, i) => (
              <FeatureItem key={i} text={f} bold={i === 2} />
            ))}
          </ul>
          <ul className="space-y-7">
            {FEATURES.map((f, i) => (
              <FeatureItem key={i} text={f} bold={i === 1} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
