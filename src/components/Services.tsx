import SelectionBadge from "./SelectionBadge";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Crafting visually stunning, fast, and user-friendly personal portfolios, marketing sites, and full-stack web applications with modern architectures.",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "Creating sleek, intuitive, and conversion-focused user interfaces with high visual contrast, structured typography, and delightful micro-interactions.",
  },
  {
    id: "03",
    title: "Fullstack Web App",
    description:
      "Building scalable digital products from robust database architectures and REST APIs to responsive, accessible, and high-performance frontends.",
  },
];

export default function Services() {
  const handleServiceSelect = (title: string) => {
    const messageInput = document.getElementById(
      "message"
    ) as HTMLTextAreaElement | null;
    if (messageInput) {
      messageInput.value = `Halo Iqbal, saya tertarik untuk mendiskusikan project terkait layanan ${title}.`;
      messageInput.focus();
    }
  };

  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="mb-12 flex flex-col items-start sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="mb-4">
              <SelectionBadge>Services</SelectionBadge>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#0D0D0D]">
              What I Can Do For You
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[#666666] leading-relaxed">
            Delivering clean code, crisp visual systems, and responsive web
            experiences tailored to your goals.
          </p>
        </div>

        {/* Services List (Full Width Clean Rows) */}
        <div className="divide-y divide-[#111111] border-b border-t border-[#111111]">
          {services.map((service) => (
            <div
              key={service.id}
              className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors hover:bg-[#F7F8FA] px-2 sm:px-4"
            >
              <div className="flex items-start gap-5 max-w-2xl">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-md border-[1.5px] border-[#111111] bg-white text-[#0D0D0D] shadow-[2px_2px_0px_#111111] transition-all group-hover:bg-[#00D67E] group-hover:text-white group-hover:shadow-[3px_3px_0px_#111111]">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2L14.6 9.4L22 12L14.6 14.6L12 22L9.4 14.6L2 12L9.4 9.4L12 2Z" />
                  </svg>
                </span>

                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#8E8E93]">
                      {service.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0D0D0D] group-hover:text-[#00BF70] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-[#666666] leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Neo-brutalist Action Button (Connect to Contact) */}
              <a
                href="#contact"
                onClick={() => handleServiceSelect(service.title)}
                className="inline-flex items-center gap-3 self-end md:self-center group/btn py-1"
                aria-label={`Discuss ${service.title} project`}
              >
                <span className="text-xs font-bold text-[#666666] group-hover/btn:text-[#0D0D0D] transition-colors">
                  Discuss project
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-[#111111] bg-white text-[#0D0D0D] shadow-[1.5px_1.5px_0px_#111111] transition-all group-hover/btn:bg-[#00D67E] group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:shadow-[2.5px_2.5px_0px_#111111]">
                  <svg
                    className="w-4 h-4 text-[#0D0D0D]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H8M17 7V16"
                    />
                  </svg>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
