import React, { useEffect, useRef, useState } from "react";

const products = [
  {
    id: 1,
    name: "Linkedin",
    imageSrc:
      "https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
  },
  {
    id: 2,
    name: "Instagram",
    imageSrc:
      "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000",
  },
  {
    id: 3,
    name: "Basic Tee",
    imageSrc:
      "https://img.icons8.com/?size=100&id=118497&format=png&color=000000",
  },
  {
    id: 4,
    name: "Basic Tee",
    imageSrc:
      "https://img.icons8.com/?size=100&id=118638&format=png&color=000000",
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
    <>
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-white flex justify-between">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-500 rounded-lg rotate-12 opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-pink-500 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-yellow-500 rotate-45 opacity-20"></div>

          <div className="">
            <h2 className="title-font text-5xl">About Me</h2>
            <p className="text-lg pt-5 w-150">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore reprehenderit sed animi rerum eligendi deleniti officia
              quae ducimus error! Recusandae, consectetur! Modi officia hic
              assumenda illo quis sed dolorum porro dignissimos recusandae.
            </p>
            <div className="mx-auto max-w-2xl lg:max-w-7xl pt-6">
              <div className="mt-6 overflow-hidden relative">
                <div className="flex gap-4">
                  {products.map((product, index) => (
                    <div
                      key={`${product.id}-${index}`}
                      className="group relative rounded-2xl border border-gray-600 p-2.5 flex-shrink-0 w-16"
                    >
                      <img
                        alt={product.name}
                        src={product.imageSrc}
                        className="aspect-square w-full rounded-md object-cover transition-all duration-300 group-hover:opacity-75"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            ref={profileRef}
            className={`profile-picture flex items-center justify-center mx-auto transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="w-35 h-35 scale-200">
              <img
                src={Profile}
                alt="Profile"
                className="rounded-full object-cover w-full h-full object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
