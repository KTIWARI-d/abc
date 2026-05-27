import { MoveRight } from "lucide-react";

export default function CoachesEvents() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-[1280px] md:grid-cols-2">
        {/* Our Coaches — image background */}
        <div className="relative min-h-[230px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=80"
            alt="Coaches"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative px-10 py-14 text-white">
            <h3 className="text-2xl font-bold">Our Coaches</h3>
            <p className="mt-3 max-w-xs text-sm text-white/80">
              Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s,
            </p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Read More <MoveRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Events — green panel with racquet watermark */}
        <div className="relative min-h-[230px] overflow-hidden bg-brand">
          <svg
            className="pointer-events-none absolute right-4 top-1/2 h-[200px] -translate-y-1/2 opacity-20"
            viewBox="0 0 120 220"
            fill="none"
          >
            <ellipse cx="60" cy="60" rx="42" ry="52" stroke="#fff" strokeWidth="6" />
            <path d="M60 112v92M44 204h32" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
            <path
              d="M30 40h60M26 60h68M26 80h68M40 28v64M60 24v76M80 28v64"
              stroke="#fff"
              strokeWidth="2"
            />
          </svg>
          <div className="relative px-10 py-14 text-white">
            <h3 className="heading-dot text-2xl font-bold">Events</h3>
            <p className="mt-3 max-w-xs text-sm text-white/85">
              Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s,
            </p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Read More <MoveRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
