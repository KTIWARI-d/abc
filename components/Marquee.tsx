const WORDS = ["ADOPT", "NURTURE", "DELIVER"];

export default function Marquee() {
  // duplicate the sequence so the loop is seamless
  const sequence = [...WORDS, ...WORDS, ...WORDS, ...WORDS];

  return (
    <section className="overflow-hidden bg-white py-12">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center">
            {sequence.map((w, i) => (
              <span key={`${dup}-${i}`} className="flex items-center">
                <span
                  className={`px-8 text-5xl font-extrabold tracking-tight md:text-6xl ${
                    i % 2 === 0
                      ? "text-brand"
                      : "text-transparent [-webkit-text-stroke:2px_#99B81B]"
                  }`}
                >
                  {w}
                </span>
                <span className="text-2xl text-brand">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
