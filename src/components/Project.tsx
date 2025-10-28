const projects = [
  {
    id: 1,
    name: "Lokerkotakita",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    description: "Job portal website for local communities",
    technologies: [
      "https://img.icons8.com/?size=100&id=1489&format=png&color=FFFFFF",
      "https://img.icons8.com/?size=100&id=DktcWqISuWqW&format=png&color=FFFFFF ",
      "https://img.icons8.com/?size=100&id=39856&format=png&color=FFFFFF",
    ],
    liveUrl: "https://lokerkotakita.com",
  },
  {
    id: 2,
    name: "Nontonin",
    imageSrc:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
    description: "Modern e-commerce solution with payment integration",
    technologies: [
      "https://img.icons8.com/?size=100&id=047WZAFDnkVp&format=png&color=FFFFFF",
      "https://img.icons8.com/?size=100&id=UpSCHTwpywad&format=png&color=FFFFFF",
      "https://img.icons8.com/?size=100&id=8864&format=png&color=FFFFFF",
    ],
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
  },
  {
    id: 3,
    name: "Portfolio Website",
    imageSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    description: "Personal portfolio with modern design",
    technologies: [
      "https://img.icons8.com/?size=100&id=047WZAFDnkVp&format=png&color=FFFFFF",
      "https://img.icons8.com/?size=100&id=UpSCHTwpywad&format=png&color=FFFFFF",
    ],
    liveUrl: "https://myportfolio.com",
  },
];

function Project() {
  return (
    <>
      <div className="bg-gray-900 text-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-white">
          <div className="title">
            <h2 className="title-font text-5xl text-center">portfolio</h2>
            <p className="text-lg pt-2 text-center text-gray-200">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
            {projects.map((project) => (
              <div key={project.id} className="card-project">
                <div className="img-card overflow-hidden rounded-lg">
                  <img
                    src={project.imageSrc}
                    alt={project.name}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <div className="title-card flex justify-between items-start pt-6">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold tracking-tight">
                        {project.name}
                      </h4>
                      <div className="tech pt-4 flex gap-3">
                        {project.technologies.map((tech, index) => (
                          <img
                            key={index}
                            src={tech}
                            alt={`Technology ${index + 1}`}
                            className="w-8"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 rounded-full p-3 hover:bg-gray-600 transition-colors flex items-center justify-center w-12 h-12 flex-shrink-0"
                          title="View on GitHub"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      ) : null}

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 rounded-full p-3 hover:bg-blue-600 transition-colors flex items-center justify-center w-12 h-12 flex-shrink-0"
                        title="Live Demo"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
