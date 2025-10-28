const products = [
  {
    id: 1,
    name: "Basic Tee",
    imageSrc:
      "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
  },
  {
    id: 2,
    name: "Basic Tee",
    imageSrc:
      "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    id: 3,
    name: "Basic Tee",
    imageSrc:
      "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
  },
  {
    id: 4,
    name: "Basic Tee",
    imageSrc:
      "https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000",
  },
  {
    id: 5,
    name: "PHP",
    imageSrc:
      "https://img.icons8.com/?size=100&id=YrKoPXb4jv9l&format=png&color=000000",
  },
  {
    id: 6,
    name: "Tailwind",
    imageSrc:
      "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
  },
  {
    id: 7,
    name: "Bootstrap",
    imageSrc:
      "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
  },
  {
    id: 8,
    name: "Github",
    imageSrc:
      "https://img.icons8.com/?size=100&id=62856&format=png&color=ffffff",
  },
  {
    id: 9,
    name: "Wordpress",
    imageSrc:
      "https://img.icons8.com/?size=100&id=13664&format=png&color=000000",
  },
];

const duplicatedProducts = [...products, ...products];

export default function SkillSet() {
  return (
    <div className="bg-gray-900">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="flex gap-6 animate-scroll">
            {duplicatedProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="group relative rounded-2xl border border-gray-600 p-5 flex-shrink-0 w-32"
              >
                <img
                  alt={product.name}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md object-cover transition-all duration-300 group-hover:opacity-75 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
