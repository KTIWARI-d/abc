const PROS = [
  {
    name: "Craig Tiley",
    role: "CEO Tennis Australia & Australian Open",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Stephen Farrow",
    role: "Director - Tournament, Players & International Relations",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Cameron Pearson",
    role: "Head Major Events - Tennis Australia",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Professionals() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-md">
            <h2 className="heading-dot text-3xl font-bold text-ink">Meet our professionals</h2>
            <p className="mt-3 text-sm text-gray-500">
              Lorem Ipsum has been the industry&rsquo;s standard dummy text since the 1500s,
            </p>
          </div>
          <button className="pill-btn">View All</button>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PROS.map((p) => (
            <div key={p.name}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-80 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{p.name}</h3>
              <p className="mt-1 text-sm italic text-gray-500">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
