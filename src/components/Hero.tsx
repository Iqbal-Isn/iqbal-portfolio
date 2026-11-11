import SelectionBadge from "./SelectionBadge";

const marqueeItems = [
  "Web Development",
  "UI/UX Design",
  "Astro.js & React",
  "Frontend Engineering",
  "High Performance Web",
  "Clean Architecture",
];

export default function Hero() {
  const repeatedMarquee = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section id="home" className="relative bg-white pt-6 pb-8 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 pt-4 pb-16 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left">
            <div className="mb-6">
              <SelectionBadge>
                Hi everyone 👋, I&apos;m Iqbal Isnaeni
              </SelectionBadge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#0D0D0D] leading-[1.14] mb-6">
              Frontend Developer <br />
              Based in Indonesia
            </h1>

            <p className="text-sm sm:text-base text-[#666666] leading-[1.7] max-w-[470px] mb-9">
              I&apos;m a creative frontend developer &amp; UI/UX enthusiast
              passionate about crafting web applications that not only meet
              functional requirements but also delight users and evoke seamless
              digital experiences.
            </p>

            {/* Primary & Secondary CTA Row */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <a href="#contact" className="btn-brutalist">
                <span>Get In Touch</span>
                <svg
                  className="w-4 h-4 text-[#00D67E]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H8M17 7V16"
                  />
                </svg>
              </a>

              <a
                href="/CV2026_Iqbal_Isnaeni_Herlambang.pdf"
                download="CV2026_Iqbal Isnaeni Herlambang.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0D0D] hover:text-[#00BF70] transition-colors py-2.5 px-2 group cursor-pointer"
              >
                <span>Download CV</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
                  />
                </svg>
              </a>
            </div>

            {/* Social Media Row */}
            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm font-semibold text-[#0D0D0D] mr-2">
                Find me on :
              </span>

              {/* GitHub / Website */}
              <a
                href="https://github.com/iqbal-isn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4D4D8] bg-white text-[#0D0D0D] transition-all hover:bg-[#00D67E] hover:border-[#111111] hover:shadow-[2px_2px_0px_#111111]"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/iqbalisn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4D4D8] bg-white text-[#0D0D0D] transition-all hover:bg-[#00D67E] hover:border-[#111111] hover:shadow-[2px_2px_0px_#111111]"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn (Active Highlighted Style from Reference) */}
              <a
                href="https://linkedin.com/in/iqbalisn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[#111111] bg-[#00D67E] text-[#0D0D0D] font-bold text-xs shadow-[2px_2px_0px_#111111] transition-transform hover:-translate-y-0.5"
              >
                in
              </a>
            </div>
          </div>

          {/* Right Column: Framed Portrait & Geometric Accents */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative inline-block my-4 mr-4 sm:mr-8">
              {/* Top-left Black Zig-Zag Squiggle */}
              <svg
                className="absolute -top-3 -left-9 sm:-left-12 w-12 h-8 text-[#0D0D0D] z-20 pointer-events-none"
                viewBox="0 0 56 32"
                fill="none"
                 aria-hidden="true"
              >
                <path
                  d="M3 26L14 7L27 22L39 6L52 18"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Bottom-Right Diagonal Mint Green Brush Strokes */}
              <svg
                className="absolute -bottom-10 -right-12 sm:-right-16 w-64 h-48 z-0 pointer-events-none"
                viewBox="0 0 260 190"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M25 160L225 45"
                  stroke="#00D67E"
                  strokeWidth="32"
                  strokeLinecap="round"
                />
                <path
                  d="M95 168L240 92"
                  stroke="#00D67E"
                  strokeWidth="32"
                  strokeLinecap="round"
                />
              </svg>

              {/* Main Portrait Box with Brutalist Hard Offset Shadow */}
              <div className="relative z-10 w-[260px] sm:w-[310px] aspect-[4/5] bg-[#EEEDE9] border-2 border-[#111111] shadow-[8px_8px_0px_#111111] overflow-hidden">
                <img
                  src="/img/iqbal.webp"
                  alt="Iqbal Isnaeni Herlambang"
                  width={720}
                  height={900}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Bottom-Left Circular Rotating Scroll Badge */}
              <a
                href="#about"
                aria-label="Explore more about me"
                className="group absolute bottom-3 -left-11 sm:-left-16 z-20 flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-sm"
              >
                <svg
                  className="h-full w-full animate-spin-slow text-[#0D0D0D]"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text className="text-[8.8px] font-semibold uppercase tracking-[0.14em] fill-[#333333]">
                    <textPath href="#circlePath" startOffset="0%">
                      • explore more about me • explore more
                    </textPath>
                  </text>
                </svg>
                <span className="absolute flex h-9 w-9 items-center justify-center rounded-full border border-[#111111] bg-white text-[#0D0D0D] transition-transform group-hover:translate-y-0.5">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 5v14m0 0l-5-5m5 5l5-5"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Crossed / Tilted Marquee Banner */}
      <div className="relative w-full py-6 mt-4 select-none overflow-hidden">
        {/* Backing Green Strip */}
        <div
          className="absolute left-[-3%] top-1/2 -translate-y-1/2 w-[106%] h-14 sm:h-16 bg-[#00D67E] rotate-[1.6deg] z-0"
          aria-hidden="true"
        />

        {/* Foreground Black Marquee Strip */}
        <div className="relative left-[-3%] w-[106%] h-14 sm:h-16 bg-[#0D0D0D] -rotate-[1.1deg] z-10 flex items-center overflow-hidden border-y border-[#111111]">
          <div className="animate-marquee flex items-center">
            {repeatedMarquee.map((item, idx) => (
              <div key={idx} className="flex items-center shrink-0">
                <span className="text-white font-semibold text-base sm:text-lg tracking-wide px-7">
                  {item}
                </span>
                <svg
                  className="w-4 h-4 text-white shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 1L14.8 9.2L23 12L14.8 14.8L12 23L9.2 14.8L1 12L9.2 9.2L12 1Z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
