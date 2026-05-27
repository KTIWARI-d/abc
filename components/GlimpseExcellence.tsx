export default function GlimpseExcellence() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="heading-dot text-3xl font-bold text-ink">A Glimpse of Excellence</h2>
            <p className="mt-3 text-sm text-gray-500">
              Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s.
            </p>
          </div>
          <button className="pill-btn">Register Now</button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-[1fr_1.5fr]">
          <img
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=700&q=80"
            alt="Player on court"
            className="h-[280px] w-full rounded-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1530915365347-e35b749a0381?auto=format&fit=crop&w=1100&q=80"
            alt="Aerial view of tennis courts"
            className="h-[280px] w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
