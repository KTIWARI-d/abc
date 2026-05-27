import { ChevronsLeft, ChevronDown } from "lucide-react";

function WidgetTab({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-end gap-2">
      <ChevronsLeft className="h-4 w-4 text-brand-light" strokeWidth={2.5} />
      <span className="text-xs font-semibold tracking-[0.18em] text-white">
        {label}
      </span>
      <span className="ml-1 hidden h-px w-10 bg-brand md:inline-block" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative">
      {/* Background image + overlays */}
      <div className="relative h-[640px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1600&q=80"
          alt="Tennis courts at Hunter Valley"
          className="h-full w-full object-cover"
        />
        {/* warm sunset wash + dark base */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-200/30 via-black/35 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/20 via-transparent to-black/40" />

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-10 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.42em] text-white/90">
            SSA HUNTER VALLEY
          </p>
          <h1 className="max-w-4xl text-3xl font-light tracking-wide text-white sm:text-4xl md:text-[44px]">
            GROW YOUR GAME WITH THE
          </h1>
          <h1 className="mt-1 text-4xl font-extrabold tracking-wide text-white sm:text-5xl md:text-[56px]">
            PROFESSIONALS
          </h1>

          <div className="mt-5 h-px w-72 bg-white/60" />

          <p className="mt-5 text-sm font-medium tracking-[0.32em] text-white sm:text-base">
            ADOPT&nbsp;&nbsp;<span className="text-brand-light">•</span>&nbsp;&nbsp;NURTURE&nbsp;&nbsp;
            <span className="text-brand-light">•</span>&nbsp;&nbsp;DELIVER
          </p>

          <button className="pill-outline mt-7">Register Now</button>
        </div>

        {/* scroll arrow */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
          <ChevronDown className="h-6 w-6 animate-bounce text-white/80" />
        </div>

        {/* Right-side widgets */}
        <div className="absolute right-6 top-1/2 hidden w-[270px] -translate-y-1/2 flex-col gap-5 lg:flex">
          <WidgetTab label="WEATHER" />

          {/* Weather card */}
          <div className="rounded-md bg-brand/85 p-5 text-white shadow-lg backdrop-blur-sm">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-white" />
              Hunter Valley
            </p>
            <div className="flex items-end justify-between">
              <span className="text-5xl font-bold leading-none">
                19<sup className="text-2xl font-semibold">°C</sup>
              </span>
              <div className="text-right">
                <p className="font-semibold">Weather</p>
                <p className="text-xs text-white/80">Saturday, 8 pm</p>
              </div>
            </div>
          </div>

          <WidgetTab label="ONGOING MATCHES" />
          <WidgetTab label="SCORE" />
        </div>
      </div>

      {/* Intro line with faint big "A" watermark */}
      <div className="relative bg-white">
        <span className="pointer-events-none absolute -top-10 left-0 select-none text-[230px] font-extrabold leading-none text-brand/10">
          A
        </span>
        <div className="mx-auto max-w-3xl px-6 py-20 text-center text-lg leading-relaxed text-ink/80">
          To be the first venue in the world to have{" "}
          <span className="font-semibold text-brand">60 multi surface courts</span> at one
          location and establish first one stop tennis academy in the Asia Pacific producing
          grand slam champions.
        </div>
      </div>
    </section>
  );
}
