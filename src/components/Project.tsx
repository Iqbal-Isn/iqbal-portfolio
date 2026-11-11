import { useState } from "react";
import SelectionBadge from "./SelectionBadge";
import portfolioData from "../data/portfolio.json";

const filterCategories = ["All", "Astro.js", "React", "PHP / Laravel"];

export default function Project() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projectList, setProjectList] = useState(portfolioData.projects);

  const filteredProjects = projectList.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Astro.js") {
      return project.techStack.includes("Astro.js");
    }
    if (activeFilter === "React") {
      return (
        project.techStack.includes("React") ||
        project.techStack.includes("React.js")
      );
    }
    if (activeFilter === "PHP / Laravel") {
      return (
        project.techStack.includes("PHP") ||
        project.techStack.includes("Laravel")
      );
    }
    return true;
  });

  const handleCyclePrev = () => {
    setProjectList((prev) => {
      if (prev.length <= 1) return prev;
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [last, ...rest];
    });
  };

  const handleCycleNext = () => {
    setProjectList((prev) => {
      if (prev.length <= 1) return prev;
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <section id="projects" className="bg-[#F7F8FA] py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        {/* Centered Eyebrow & Heading */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <SelectionBadge>Projects</SelectionBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#0D0D0D]">
            My Latest Projects
          </h2>
        </div>

        {/* Sub-header Row: Description on Left, Contact Me Button on Right */}
        <div className="mt-8 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="max-w-md text-xs sm:text-sm text-[#666666] leading-relaxed">
            Here are some of the recent projects I&apos;ve been immersed in,
            built with modern frameworks like Astro.js &amp; React to ensure
            maximum speed and high visual fidelity.
          </p>

          <div className="shrink-0">
            <a href="#contact" className="btn-brutalist">
              <span>Contact Me</span>
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
          </div>
        </div>

        {/* Filter Pills & Arrows Row (Sejajar dengan Filter) */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Left: Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D0D0D] mr-1">
              Filter :
            </span>
            {filterCategories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "border-[1.5px] border-[#111111] bg-[#0D0D0D] text-white shadow-[2px_2px_0px_#00D67E] -translate-y-0.5"
                      : "border border-[#111111] bg-white text-[#0D0D0D] shadow-[1.5px_1.5px_0px_#111111] hover:bg-[#00D67E] hover:-translate-y-0.5"
                  }`}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00D67E]" />
                  )}
                  {category}
                </button>
              );
            })}
          </div>

          {/* Right: Navigation Arrow Buttons (Sejajar dengan Filter) */}
          {filteredProjects.length > 1 && (
            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
              <button
                type="button"
                onClick={handleCyclePrev}
                aria-label="Previous project"
                title="Previous Project"
                className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-[#111111] bg-white text-[#0D0D0D] shadow-[2px_2px_0px_#111111] transition-all hover:bg-[#00D67E] hover:-translate-x-0.5 cursor-pointer"
              >
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
                    d="M19 12H5m0 0l7 7m-7-7l7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleCycleNext}
                aria-label="Next project"
                title="Next Project"
                className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-[#111111] bg-white text-[#0D0D0D] shadow-[2px_2px_0px_#111111] transition-all hover:bg-[#00D67E] hover:translate-x-0.5 cursor-pointer"
              >
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
                    d="M5 12h14m0 0l-7-7m7 7l-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* 3-Column Project Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.id} className="group flex flex-col">
              {/* Sharp Framed Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-[1.5px] border-[#111111] bg-white">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  width={900}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Content */}
              <div className="mt-5 flex flex-1 flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-[#0D0D0D] leading-snug">
                  {project.name}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Pills & Action Links */}
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E4E4E7]">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block rounded-full border border-[#111111] bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#0D0D0D] shadow-[1px_1px_0px_#111111]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} GitHub repository`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#111111] bg-white text-[#0D0D0D] transition-colors hover:bg-[#00D67E]"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#111111] bg-white text-[#0D0D0D] transition-colors hover:bg-[#00D67E]"
                      >
                        <svg
                          className="w-3.5 h-3.5"
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
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
