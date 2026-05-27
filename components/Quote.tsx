export default function Quote() {
  return (
    <section className="relative overflow-hidden bg-[#e9ebee]">
      {/* wavy line texture */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        preserveAspectRatio="none"
        viewBox="0 0 1200 460"
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <path
            key={i}
            d={`M-50 ${30 + i * 34} C 300 ${-20 + i * 34}, 800 ${120 + i * 34}, 1300 ${
              10 + i * 34
            }`}
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
          />
        ))}
      </svg>

      {/* dark gradient on the lower-left where the photo sits */}
      <div className="absolute bottom-0 left-0 h-2/3 w-1/2 bg-gradient-to-tr from-black/35 to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-6 py-24">
        <blockquote className="max-w-3xl text-2xl font-semibold leading-snug text-white/90 md:text-[28px]">
          <span className="text-brand">&rdquo;</span> We have created an environment ideal for
          building craft. Our goal is to be recognized as the best tennis performance centre in
          the world.&rdquo;
        </blockquote>
        <div className="mt-8">
          <p className="font-semibold text-white">John Doe</p>
          <p className="text-sm text-white/70">Chairman</p>
        </div>
      </div>
    </section>
  );
}
