"use client";

export default function Example() {
  return (
    <div className="bg-gray-900 relative overflow-hidden">
      <style>{`
        .bg-dot-pattern {
          background-image: radial-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>

      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>

      {/* Gradient Overlay Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent z-10 pointer-events-none"></div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10 pointer-events-none"></div>

      <div className="relative isolate px-6 pt-14 pb-10 lg:px-8 z-20">
        <div className="mx-auto max-w-2xl">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative text-md rounded-full px-6 py-3 text-blue-500 bg-blue-100">
              AVAILABLE FOR WORK
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl title-font text-balance text-white sm:text-8xl">
              IQBAL ISNAENI HERLAMBANG
            </h1>
            <p className="mt-8 text-lg font-normal text-gray-200 sm:text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              iste reprehenderit ratione, animi cum quasi excepturi.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-8">
              <a
                href="#"
                className="rounded-full bg-blue-500 px-9 py-5 text-md font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Hire Me
              </a>
              <a href="#" className="text-md font-semibold text-white">
                Download CV <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
