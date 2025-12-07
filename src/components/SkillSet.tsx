const technologies = [
  {
    id: 1,
    name: "React",
    imageSrc: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
  },
  {
    id: 2,
    name: "TypeScript",
    imageSrc: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
  },
  {
    id: 3,
    name: "JavaScript",
    imageSrc: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    id: 4,
    name: "PHP",
    imageSrc: "https://img.icons8.com/?size=100&id=YrKoPXb4jv9l&format=png&color=000000",
  },
  {
    id: 5,
    name: "Tailwind",
    imageSrc: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
  },
  {
    id: 6,
    name: "Bootstrap",
    imageSrc: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
  },
  {
    id: 7,
    name: "Github",
    imageSrc: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
  },
  {
    id: 8,
    name: "Figma",
    imageSrc: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
  },
    {
    id: 9,
    name: "Laravel",
    imageSrc: "https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000",
  },
];

const duplicatedTechnologies = [...technologies, ...technologies];

export default function SkillSet() {
  return (
    <div className="bg-[var(--bg-primary)] py-24 sm:py-32 overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-[var(--text-primary)] mb-16">
          Trusted by modern technology stacks
        </h2>
        
        <div className="relative -mx-6 mt-8 sm:mx-0 sm:rounded-2xl overflow-hidden">
           <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none"></div>
           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none"></div>
           
           <div className="flex gap-4 sm:gap-8 animate-scroll w-max">
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={`${tech.id}-${index}`}
                className="group relative flex items-center justify-center rounded-2xl border border-[var(--border-subtle)] p-4 sm:p-6 hover:bg-[var(--bg-secondary)] transition-colors w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-[var(--bg-primary)]"
              >
                <img
                  alt={tech.name}
                  src={tech.imageSrc}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
