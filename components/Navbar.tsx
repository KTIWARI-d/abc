"use client";

import { useEffect, useState } from "react";

function Logo({ dark = false }: { dark?: boolean }) {
  const c = dark ? "#1A1A1A" : "#1A1A1A";
  return (
    <div className="flex items-center gap-2">
      <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
        <path
          d="M14 8h20v6a10 10 0 0 1-20 0V8Z"
          stroke={c}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M14 11H9a4 4 0 0 0 5 6M34 11h5a4 4 0 0 1-5 6"
          stroke={c}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path d="M24 24v8M18 40h12M20 40v-4h8v4" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-lg font-extrabold tracking-tight" style={{ color: c }}>
        SSA
      </span>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6">
        <Logo />
        <button className="rounded-full border border-brand/70 px-7 py-2 text-sm font-medium text-ink transition hover:bg-brand hover:text-white">
          Register Now
        </button>
      </div>
    </header>
  );
}
