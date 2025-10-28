const educations = [
  {
    id: 1,
    institution: "Universitas Harkat Negeri",
    major: "S1 Sistem Informasi",
    period: "2025 - 2029",
    gpa: "-",
    description:
      "Focus on Software Engineering, Web Development, and Database Management",
    status: "progress",
  },
  {
    id: 2,
    institution: "SMKN 01 Slawi",
    major: "Rekayasa Perangkat Lunak",
    period: "2019 - 2022",
    gpa: "85,07/100",
    description:
      "Sistem Komunikasi Digital, Pemrograman Beriorientasi Objek, dan Basis Data",
    status: "completed",
  },
];

const workExp = [
  {
    id: 1,
    institution: "PT. Integrasi Teknologi Unggas",
    major: "Admin Unit (Fulltime)",
    period: "Agustus 2023 – Februari 2025",
    gpa: "-",
    description:
      "Bertanggung jawab dalam pengelolaan administrasi dan koordinasi operasional kemitraan peternakan ayam, mulai dari proses KYC peternak, distribusi pakan dan OVK, hingga panen. Melakukan input dan rekap data produksi ke sistem ERP serta spreadsheet, menyusun laporan mingguan dan bulanan, dan memastikan kelancaran proses pencairan hasil pemeliharaan. Selain itu, berkoordinasi dengan tim lapangan dan kepala unit untuk memantau performa ayam, pelaksanaan kontrak, serta jaminan peternak selama masa kemitraan.",
    status: "completed",
  },
  {
    id: 2,
    institution: "Ssebowa",
    major: "Junior Front End Developer (Freelance)",
    period: "Desember 2022 – Februari 2023",
    gpa: "-",
    description:
      "Bekerja sama dengan tim dalam menyelesaikan tugas yang disepakati bersama. Memastikan halaman web responsif di setiap device, mengoptimalkan pengalaman pengguna, membangun dan memelihara website, serta melakukan styling website sesuai dengan desain UI yang diberikan.",
    status: "completed",
  },
];

export default function Experience() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-white">
        <h2 className="title-font text-5xl text-center mb-10">Education</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

          <div className="space-y-12">
            {educations.map((edu) => (
              <div key={edu.id} className="relative pl-20">
                <div className="absolute left-0 flex items-center justify-center">
                  {edu.status === "completed" ? (
                    <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center ring-4 ring-gray-900">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="relative w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center ring-4 ring-gray-900 bg-gray-900">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-ping opacity-20"></div>
                    </div>
                  )}
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 ml-5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-blue-400 font-semibold text-lg mb-2">
                        {edu.major}
                      </p>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <span className="inline-block px-3 py-1 rounded-full text-md font-semibold bg-blue-500/20 text-blue-400 mb-2">
                        {edu.period}
                      </span>
                      {edu.gpa !== "-" && (
                        <p className="text-gray-300">
                          <span className="font-semibold text-white">GPA:</span>{" "}
                          {edu.gpa}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-200 text-lg leading-relaxed">
                    {edu.description}
                  </p>

                  {edu.status === "progress" && (
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        <div
                          className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                      <span className="text-blue-400 text-sm font-medium">
                        In Progress
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <h2 className="title-font text-5xl text-center m-15">
            Work Experience
          </h2>
          <div className="space-y-12">
            {workExp.map((exp) => (
              <div key={exp.id} className="relative pl-20">
                <div className="absolute left-0 flex items-center justify-center">
                  {exp.status === "completed" ? (
                    <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center ring-4 ring-gray-900">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="relative w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center ring-4 ring-gray-900 bg-gray-900">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-ping opacity-20"></div>
                    </div>
                  )}
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 ml-5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.institution}
                      </h3>
                      <p className="text-blue-400 font-semibold text-lg mb-2">
                        {exp.major}
                      </p>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <span className="inline-block px-3 py-1 rounded-full text-md font-semibold bg-blue-500/20 text-blue-400 mb-2">
                        {exp.period}
                      </span>
                      {exp.gpa !== "-" && (
                        <p className="text-gray-300">
                          <span className="font-semibold text-white">GPA:</span>{" "}
                          {exp.gpa}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-200 text-lg leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.status === "progress" && (
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        <div
                          className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                      <span className="text-blue-400 text-sm font-medium">
                        In Progress
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
