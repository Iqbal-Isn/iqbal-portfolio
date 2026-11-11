import { useState } from "react";
import portfolioData from "../data/portfolio.json";

type TabKey = "education" | "skills" | "experience";

const { educations, skills, experiences } = portfolioData;

export default function About() {
  const [activeTab, setActiveTab] = useState<TabKey>("education");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "education", label: "Education" },
    { key: "skills", label: "Skills" },
    { key: "experience", label: "Work Experience" },
  ];

  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        {/* Centered Editorial Manifesto Statement */}
        <h2 className="mx-auto max-w-[780px] text-center text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-[#0D0D0D] leading-[1.3]">
          Design a user-friendly and visual-exciting experience that offers
          seamless functionality!
        </h2>

        {/* Centered Interactive Neo-Brutalist Tab Buttons */}
        <div
          role="tablist"
          aria-label="Credentials tabs"
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-2.5 border-[1.5px] border-[#111111] px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0D0D0D] text-white shadow-[4px_4px_0px_#00D67E] -translate-y-0.5"
                    : "bg-white text-[#0D0D0D] shadow-[3px_3px_0px_#111111] hover:bg-[#00D67E] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#111111] active:translate-y-0"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    isActive
                      ? "bg-[#00D67E]"
                      : "bg-[#111111]"
                  }`}
                />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Summary Paragraph */}
        <p className="mx-auto mt-8 max-w-[600px] text-center text-sm sm:text-base text-[#666666] leading-[1.75]">
          {activeTab === "education" &&
            "I am a Software Engineering graduate from SMKN 01 Slawi and currently pursuing a Bachelor's degree in Information Systems at Universitas Harkat Negeri, providing me with a strong foundation in modern web development."}
          {activeTab === "skills" &&
            "Equipped with a modern frontend and fullstack toolkit, I focus on writing clean, maintainable code and translating UI designs into fast, accessible digital products."}
          {activeTab === "experience" &&
            "From freelance frontend engineering to enterprise ERP administration, my professional journey blends technical execution with structured problem-solving."}
        </p>

        {/* Dynamic Tab Content Panel */}
        <div className="mx-auto mt-10 max-w-[820px]">
          {activeTab === "education" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  className="border-[1.5px] border-[#111111] bg-white p-6 shadow-[4px_4px_0px_#111111] transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#111111] bg-[#F7F8FA] px-3 py-0.5 text-xs font-semibold text-[#0D0D0D]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00D67E]" />
                      {edu.period}
                    </span>
                    <span className="text-xs font-semibold text-[#00BF70]">
                      {edu.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0D0D0D]">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-semibold text-[#333333] mt-0.5">
                    {edu.major}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group inline-flex items-center gap-2.5 border-[1.5px] border-[#111111] bg-white px-4 py-2.5 shadow-[3px_3px_0px_#111111] transition-all hover:bg-[#00D67E]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#00D67E] border border-[#111111] group-hover:bg-white" />
                  <span className="text-sm font-bold text-[#0D0D0D]">
                    {skill.name}
                  </span>
                  <span className="rounded-full border border-[#111111]/30 bg-[#F7F8FA] px-2 py-0.5 text-[11px] font-medium text-[#666666] group-hover:bg-white group-hover:text-[#0D0D0D]">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "experience" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="border-[1.5px] border-[#111111] bg-white p-6 shadow-[4px_4px_0px_#111111] transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#111111] bg-[#F7F8FA] px-3 py-0.5 text-xs font-semibold text-[#0D0D0D]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00D67E]" />
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0D0D0D]">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-[#333333] mt-0.5">
                    {exp.company}
                  </p>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {exp.description}
                  </p>
                  <p className="mt-3 pt-3 border-t border-[#E4E4E7] text-xs font-semibold text-[#0D0D0D]">
                    {exp.stack}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
