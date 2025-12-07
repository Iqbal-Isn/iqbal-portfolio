"use client";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-[var(--bg-primary)] transition-colors duration-300">
      <style>{`
        .bg-dot-pattern {
          background-image: radial-gradient(var(--text-secondary) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
      
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-20"></div>
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-[var(--primary-accent)] opacity-10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-purple-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-[var(--text-secondary)] ring-1 ring-[var(--border-subtle)] hover:ring-[var(--text-secondary)] transition-all bg-[var(--bg-secondary)] backdrop-blur-sm">
              <span className="text-[var(--primary-accent)] mr-2">●</span>
              Available for new projects
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-7xl mb-6 sm:mb-8">
            Building digital products, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">one pixel at a time.</span>
          </h1>
          
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-[var(--text-secondary)] max-w-xl mx-auto">
            I'm Iqbal Isnaeni Herlambang, a creative developer focused on building high-quality, user-centric web applications.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-full bg-[var(--text-primary)] px-8 py-3.5 text-sm font-semibold text-[var(--bg-primary)] shadow-sm hover:bg-[var(--text-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)] transition-all"
            >
              Hire Me
            </a>
            <a href="#about" className="text-sm font-semibold leading-6 text-[var(--text-primary)] flex items-center gap-2 group">
              Learn more <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
