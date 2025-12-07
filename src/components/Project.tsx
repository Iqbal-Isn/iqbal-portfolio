import lokerkotakita from "../../public/img/lokerkotakita.png";
import nontonin from "../../public/img/Nontonin.png";
import portfolio from "../../public/img/portfolio.png";

const projects = [
  {
    id: 1,
    name: "Lokerkotakita",
    imageSrc: `${lokerkotakita}`,
    description: "Job portal website for local communities",
    technologies: [
      "https://img.icons8.com/?size=100&id=1489&format=png&color=000000",
      "https://img.icons8.com/?size=100&id=DktcWqISuWqW&format=png&color=000000",
      "https://img.icons8.com/?size=100&id=39856&format=png&color=000000",
    ],
    liveUrl: "https://lokerkotakita.com",
  },
  {
    id: 2,
    name: "Nontonin",
    imageSrc: `${nontonin}`,
    description: "Modern e-commerce solution with payment integration",
    technologies: [
      "https://img.icons8.com/?size=100&id=047WZAFDnkVp&format=png&color=000000",
      "https://img.icons8.com/?size=100&id=UpSCHTwpywad&format=png&color=000000",
      "https://img.icons8.com/?size=100&id=8864&format=png&color=000000",
    ],
    githubUrl: "https://github.com/Iqbal-Isn/nontonin",
    liveUrl: "https://nontonin.online",
  },
  {
    id: 3,
    name: "Portfolio Website",
    imageSrc: `${portfolio}`,
    description: "Personal portfolio with modern design",
    technologies: [
      "https://img.icons8.com/?size=100&id=047WZAFDnkVp&format=png&color=000000",
      "https://img.icons8.com/?size=100&id=UpSCHTwpywad&format=png&color=000000",
    ],
    githubUrl: "https://github.com/Iqbal-Isn/iqbal-portfolio",
    liveUrl: "https://iqbal-portfolio-53mhmfwmn-iqbalisns-projects.vercel.app/",
  },
];

function Project() {
  return (
    <div id="portfolio" className="bg-[var(--bg-primary)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">Selected Work</h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-secondary)]">
            A collection of projects exploring the boundaries of design and development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col overflow-hidden bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-subtle)] card-hover">
              <div className="aspect-[16/9] w-full overflow-hidden bg-gray-200 relative">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors"></div>
              </div>
              
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {project.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[var(--border-subtle)]">
                   <div className="flex gap-2 mr-auto">
                    {project.technologies.map((tech, index) => (
                      <img
                        key={index}
                        src={tech}
                        alt="Tech"
                        className="w-5 h-5 tech-icon opacity-60 hover:opacity-100 transition-opacity"
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
