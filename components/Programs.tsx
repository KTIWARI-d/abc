const PROGRAMS = [
  {
    title: "Academy",
    subtitle: "Live and train with us",
    img: "https://images.unsplash.com/photo-1530915365347-e35b749a0381?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Camps",
    subtitle: "Train like a pro with us",
    img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Performance",
    subtitle: "Elevate your game with us",
    img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=700&q=80",
  },
];

export default function Programs() {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-lg">
            <h2 className="heading-dot text-3xl font-bold text-ink">Programs</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
            </p>
          </div>
          <button className="pill-btn">Register Now</button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROGRAMS.map((p) => (
            <div
              key={p.title}
              className="group relative h-72 overflow-hidden rounded-lg"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-1 text-xs text-white/80">{p.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
