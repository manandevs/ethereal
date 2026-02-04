import Image from "next/image";

const services = [
  {
    title: "Strategy",
    description: "Digital Roadmap",
    icon: "/images/brain.png",
    color: "bg-[#FFD4B8]",
    shadow: "bg-[#FF965B]",
  },
  {
    title: "Product Design",
    description: "UI/UX & Motion",
    icon: "/images/palette.png",
    color: "bg-[#FFF5B8]",
    shadow: "bg-[#F2D64B]",
  },
  {
    title: "Development",
    description: "Full Stack Engineering",
    icon: "/images/code2.png",
    color: "bg-[#B8E8FF]",
    shadow: "bg-[#4BA3F2]",
  },
  {
    title: "Growth",
    description: "Marketing & SEO",
    icon: "/images/rocket.png",
    color: "bg-[#FFC8C8]",
    shadow: "bg-[#F24B4B]",
  },
];

const shapeStyles = [
  "rounded-t-[12rem] rounded-b-[2.5rem]",
  "mask-scalloped",
  "rounded-[2rem] rounded-tr-[6rem] rounded-bl-[6rem]",
  "rounded-[4rem] rounded-tl-[1rem] rounded-br-[1rem]",
];

const Team = () => {
  return (
    <section id="services" className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-16">
          {/* Header */}
          <div className="max-w-xl text-center">
            <h2 className="text-4xl font-medium sm:text-5xl md:text-6xl">
              {["Our", "core", "digital", "capabilities"].map((w, i) => (
                <span
                  key={i}
                  className="inline-block px-1.5 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {w}
                </span>
              ))}
              <span className="italic font-normal block sm:inline text-gray-500">
                {["at", "a", "glance"].map((w, i) => (
                  <span
                    key={i}
                    className="inline-block px-1.5 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                  >
                    {w}
                  </span>
                ))}
              </span>
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {services.map((item, index) => {
              const currentShape = shapeStyles[index % shapeStyles.length];

              return (
                <div
                  key={index}
                  className="opacity-0 animate-fade-in flex flex-col items-center gap-6 group"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="relative w-full max-w-[260px] aspect-[4/5] transition-transform duration-500 hover:-translate-y-2">
                    <div
                      className={`absolute inset-0 translate-x-2 translate-y-2 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300
                      ${item.shadow} ${currentShape}`}
                    />
                    <div
                      className={`relative h-full w-full overflow-hidden shadow-sm flex items-center justify-center
                      transition-all duration-300 group-hover:shadow-xl
                      ${item.color} ${currentShape}`}
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={480}
                        height={480}
                        className="transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-xl font-medium">{item.title}</p>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .mask-scalloped {
          --r: 26px;
          padding: calc(1.5 * var(--r));
          -webkit-mask:
            linear-gradient(#000 0 0) no-repeat
              50% / calc(100% - 2 * var(--r)) calc(100% - 2 * var(--r)),
            radial-gradient(farthest-side,#000 97%,#0000)
              0 0 / calc(2 * var(--r)) calc(2 * var(--r)) round;
          mask:
            linear-gradient(#000 0 0) no-repeat
              50% / calc(100% - 2 * var(--r)) calc(100% - 2 * var(--r)),
            radial-gradient(farthest-side,#000 97%,#0000)
              0 0 / calc(2 * var(--r)) calc(2 * var(--r)) round;
        }
      `}</style>
    </section>
  );
};

export default Team;
