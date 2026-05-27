import { Facebook, Twitter, Instagram, Youtube, Phone, Mail } from "lucide-react";

const NAV = [
  ["About Us", "Programs"],
  ["Coaches", "Amenities"],
  ["News", "Blogs"],
  ["Matches"],
  ["Events"],
  ["FAQs"],
];

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Nav links */}
      <div className="mx-auto max-w-[1200px] px-6 pt-12">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-gray-600">
          {NAV.flat().map((item) => (
            <a key={item} href="#" className="transition hover:text-brand">
              {item}
            </a>
          ))}
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="grid gap-10 md:grid-cols-[1fr_1fr_1fr]">
          {/* Logo block */}
          <div className="flex items-center gap-3">
            <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
              <path d="M14 8h20v6a10 10 0 0 1-20 0V8Z" stroke="#1A1A1A" strokeWidth="2.2" />
              <path
                d="M14 11H9a4 4 0 0 0 5 6M34 11h5a4 4 0 0 1-5 6"
                stroke="#1A1A1A"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M24 24v8M18 40h12M20 40v-4h8v4"
                stroke="#1A1A1A"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
            <div>
              <p className="text-xl font-extrabold tracking-tight">SSA</p>
              <p className="text-[10px] tracking-[0.2em] text-gray-400">
                ADOPT · NURTURE · DELIVER
              </p>
            </div>
          </div>

          {/* Address */}
          <div>
            <p className="font-bold text-brand">Signature Slam Academy</p>
            <p className="mt-4 text-sm text-gray-600">30 Wills Hill Road, Lovedale, NSW</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-4 w-4 text-brand" /> +91 5642589752
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <Mail className="h-4 w-4 text-brand" /> info@ssagroup.com
            </p>
          </div>

          {/* Socials */}
          <div>
            <p className="font-bold text-brand">Connect with us</p>
            <div className="mt-4 flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-gray-600 transition hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 bg-gradient-to-r from-teal-900 to-brand">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-6 py-3 text-xs text-white/90 sm:flex-row">
          <a href="#" className="hover:underline">
            Terms And Condition
          </a>
          <p>© 2023 All Rights Reserved www.signatureslamacademy.com</p>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
