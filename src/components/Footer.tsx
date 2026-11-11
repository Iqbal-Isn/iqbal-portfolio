import SelectionBadge from "./SelectionBadge";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Dark CTA Block (Matches Bottom-Right Reference Image) */}
      <div className="bg-[#0D0D0D] py-14 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white text-center sm:text-left">
            Have an Interesting Idea?
          </h2>

          {/* Right Handle Box + Green Elbow Connector + Pill Tag */}
          <div className="relative inline-flex flex-col items-start">
            <a
              href="mailto:iqbalissn20@gmail.com"
              className="group inline-block transition-transform hover:-translate-y-0.5"
            >
              <SelectionBadge className="px-5 py-2 text-sm font-bold">
                iqbalissn20@gmail.com
              </SelectionBadge>
            </a>

            {/* Elbow Line & Green Pill Badge */}
            <div className="mt-3 flex items-center pl-4">
              <span className="inline-flex items-center rounded-full bg-[#00D67E] px-3.5 py-1 text-[11px] font-bold text-[#0D0D0D]">
                Email Me
              </span>
              {/* L-shaped Green Connector Line */}
              <svg
                className="w-16 h-7 -mt-3 -ml-1 text-[#00D67E]"
                viewBox="0 0 64 28"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 20H54C57.3137 20 60 17.3137 60 14V2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* White Copyright Bar */}
      <div className="bg-white py-6 border-t border-[#E4E4E7]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8E93]">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/iqbal-isn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0D0D0D] transition-colors font-medium"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/iqbalisn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0D0D0D] transition-colors font-medium"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://instagram.com/iqbalisn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0D0D0D] transition-colors font-medium"
            >
              Instagram
            </a>
          </div>
          <p className="text-center sm:text-right">
            Copyright &copy; {new Date().getFullYear()} Iqbal Isnaeni
            Herlambang. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
