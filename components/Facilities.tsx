import { Play } from "lucide-react";

const FACILITIES = [
  {
    title: "Tennis",
    tags: ["9 Clay Courts", "4 Hard Courts"],
    img: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Accommodation",
    tags: ["5 Star Hotel"],
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Fitness",
    tags: ["Gym", "Fitness Room"],
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Recovery",
    tags: ["Spa", "Pool", "Massage"],
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=700&q=80",
  },
];

function FacilityBlock({ f }: { f: (typeof FACILITIES)[number] }) {
  return (
    <div>
      <div className="group relative h-56 overflow-hidden rounded-lg">
        <img
          src={f.img}
          alt={f.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand shadow">
            <Play className="h-5 w-5 translate-x-[1px] fill-brand" />
          </span>
        </div>
      </div>

      <h3 className="mt-5 text-xl font-bold text-white">{f.title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {f.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-brand px-3 py-1 text-xs font-medium text-white"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="mt-3 max-w-sm text-sm text-white/70">
        Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s,
      </p>
    </div>
  );
}

export default function Facilities() {
  return (
    <section className="relative overflow-hidden">
      {/* Heading on white */}
      <div className="bg-white pt-4">
        <div className="mx-auto max-w-[1200px] px-6 pb-10">
          <h2 className="heading-dot text-3xl font-bold text-ink">Facilities</h2>
          <p className="mt-3 max-w-sm text-sm text-gray-500">
            Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s,
          </p>
        </div>
      </div>

      {/* Gradient band with facilities */}
      <div className="relative bg-gradient-to-r from-teal-deep via-[#1f5a44] to-brand">
        {/* trophy watermark */}
        <svg
          className="pointer-events-none absolute right-6 top-1/2 hidden h-[420px] -translate-y-1/2 opacity-15 lg:block"
          viewBox="0 0 200 260"
          fill="none"
        >
          <path
            d="M55 20h90v34a45 45 0 0 1-90 0V20Z"
            stroke="#fff"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <path
            d="M55 30H30a18 18 0 0 0 25 28M145 30h25a18 18 0 0 1-25 28"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M100 99v54M72 200h56M80 200v-26h40v26"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="relative mx-auto grid max-w-[1200px] gap-x-14 gap-y-14 px-6 py-16 md:grid-cols-2">
          {FACILITIES.map((f) => (
            <FacilityBlock key={f.title} f={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
