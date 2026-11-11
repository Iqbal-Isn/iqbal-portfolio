import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = navigation.map((item) => ({
        name: item.name,
        el: document.querySelector(item.href),
      }));

      const scrollPosition = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (
          section.el &&
          (section.el as HTMLElement).offsetTop <= scrollPosition
        ) {
          setActiveNav(section.name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
        scrolled ? "border-b border-[#E4E4E7] py-3.5" : "py-5"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[1200px] items-center justify-between px-6 lg:px-12"
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={() => setActiveNav("Home")}
          className="inline-flex items-center gap-3 group"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00D67E] border-[1.5px] border-[#111111] shadow-[2px_2px_0px_#111111] transition-transform group-hover:-translate-y-0.5">
            <svg
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M13.5 2L5 13.5h6.5L10.5 22L19 10.5h-6.5L13.5 2z" />
            </svg>
          </span>
          <span className="text-xl font-bold tracking-tight text-[#0D0D0D]">
            Iqbal
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:items-center md:gap-x-8">
          {navigation.map((item) => {
            const isActive = activeNav === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveNav(item.name)}
                className={`inline-flex items-center text-sm transition-colors ${
                  isActive
                    ? "font-bold text-[#0D0D0D]"
                    : "font-medium text-[#666666] hover:text-[#0D0D0D]"
                }`}
              >
                {isActive && (
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#00D67E]" />
                )}
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center border-[1.5px] border-[#111111] bg-white p-2 text-[#0D0D0D] shadow-[2px_2px_0px_#00D67E]"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Toggle navigation menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-[1.5px] border-[#111111] bg-white px-6 py-5">
          <div className="flex flex-col space-y-3">
            {navigation.map((item) => {
              const isActive = activeNav === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveNav(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`inline-flex items-center py-1.5 text-base ${
                    isActive
                      ? "font-bold text-[#0D0D0D]"
                      : "font-medium text-[#666666]"
                  }`}
                >
                  {isActive && (
                    <span className="mr-2.5 h-2 w-2 rounded-full bg-[#00D67E]" />
                  )}
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
