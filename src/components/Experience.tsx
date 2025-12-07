const educations = [
  {
    id: 1,
    institution: "Universitas Harkat Negeri",
    major: "S1 Sistem Informasi",
    period: "2025 - 2029",
    gpa: "-",
    description: "Focus on Software Engineering, Web Development, and Database Management",
    status: "progress",
  },
  {
    id: 2,
    institution: "SMKN 01 Slawi",
    major: "Rekayasa Perangkat Lunak",
    period: "2019 - 2022",
    gpa: "85,07/100",
    description: "Sistem Komunikasi Digital, Pemrograman Beriorientasi Objek, dan Basis Data",
    status: "completed",
  },
];

const workExp = [
  {
    id: 1,
    institution: "PT. Integrasi Teknologi Unggas",
    major: "Admin Unit (Fulltime)",
    period: "Agst 2023 – Feb 2025",
    gpa: "-",
    description: "Microsoft Office, ERP Administration, Google Sheet",
    status: "completed",
  },
  {
    id: 2,
    institution: "Ssebowa",
    major: "Junior Front End Developer (Freelance)",
    period: "Des 2022 – Feb 2023",
    gpa: "-",
    description: "HTML, CSS, Javascript, ReactJS",
    status: "completed",
  },
];

export default function Experience() {
  return (
    <div className="bg-[var(--bg-primary)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-12 flex items-center gap-3">
              Education
            </h2>
            <div className="relative border-l border-[var(--border-subtle)] ml-3 space-y-12 pl-10 pb-4">
              {educations.map((edu) => (
                <div key={edu.id} className="relative group">
                  <span className="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-[var(--bg-primary)] bg-[var(--primary-accent)]"></span>
                  
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary-accent)] transition-colors inline-flex items-center gap-2">
                       {edu.institution}
                    </h3>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-[var(--text-primary)] font-medium text-md mb-2">
                    {edu.major}
                  </p>
                  
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>
                  
                  {edu.gpa !== "-" && (
                    <p className="text-xs text-[var(--text-secondary)] bg-[var(--bg-secondary)] inline-block px-2 py-1 rounded">
                      GPA: {edu.gpa}
                    </p>
                  )}
                  
                  {edu.status === "progress" && (
                    <div className="mt-3 flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                      <span className="text-xs font-medium text-[var(--text-secondary)]">Currently Studying</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-12 flex items-center gap-3">
              Work Experience
            </h2>
            <div className="relative border-l border-[var(--border-subtle)] ml-3 space-y-12 pl-10 pb-4">
              {workExp.map((exp) => (
                <div key={exp.id} className="relative group">
                   <span className="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-[var(--bg-primary)] bg-[var(--text-secondary)] group-hover:bg-[var(--primary-accent)] transition-colors"></span>
                  
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary-accent)] transition-colors">
                      {exp.institution}
                    </h3>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-[var(--text-primary)] font-medium text-md mb-2">
                    {exp.major}
                  </p>
                  
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
