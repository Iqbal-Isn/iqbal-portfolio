import { useEffect, useRef, useState } from "react";

// Using placeholder icons or real social icons. 
// Assuming the user wants to keep the same logic but clean up the design.
const socialLinks = [
  {
    id: 1,
    name: "Linkedin",
    imageSrc: "https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
  },
  {
    id: 2,
    name: "Instagram",
    imageSrc: "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000",
  },
  {
    id: 3,
    name: "Github",
    imageSrc: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
  },
];

const Profile = "/img/iqbal.JPG";

function About() {
  const profileRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (profileRef.current) observer.observe(profileRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-[var(--bg-primary)] overflow-hidden py-24 sm:py-32" id="about">

      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-16">
        
        {/* Profile Image Section */}
        <div className="relative flex-1 flex justify-center lg:justify-end w-full max-w-sm lg:max-w-none">
          <div className="absolute top-0 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
          
          <div
            ref={profileRef}
            className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ease-out transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="aspect-[4/5] w-full max-w-md lg:max-w-sm text-center bg-gray-200">
               <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl mb-6">About Me</h2>
          
          <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore reprehenderit sed animi rerum eligendi deleniti officia
              quae ducimus error! Recusandae, consectetur!
            </p>
            <p>
              Modi officia hic assumenda illo quis sed dolorum porro dignissimos recusandae.
              Focusing on building intuitive interactions and solid engineering foundations.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <div
                  key={link.id}
                  className="group relative rounded-xl border border-[var(--border-subtle)] p-3 hover:bg-[var(--bg-secondary)] cursor-pointer w-14 h-14 flex items-center justify-center bg-[var(--bg-primary)]"
                >
                  <img
                    alt={link.name}
                    src={link.imageSrc}
                    className="about-icon w-8 h-8 object-contain opacity-70 group-hover:opacity-100"
                  /> 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
