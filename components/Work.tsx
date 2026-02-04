import React from "react";
import { ArrowUpRight, Brain, Layers, Code2, Fingerprint } from "lucide-react";

// Updated data to be relevant to Ethereal Agency
const sections = [
  {
    title: "Strategy",
    subtitle: "Digital Roadmap",
    description: "Data-driven insights to position your brand for dominance.",
    icon: Brain,
    bg: "bg-[#00C365]", // Green
    text: "text-black",
  },
  {
    title: "Experience",
    subtitle: "UI/UX Design",
    description: "Crafting immersive interfaces that captivate and convert.",
    icon: Layers,
    bg: "bg-[#D4C3FC]", // Purple
    text: "text-black",
  },
  {
    title: "Engineering",
    subtitle: "Web & Mobile",
    description: "Robust, scalable architectures built for the future.",
    icon: Code2,
    bg: "bg-[#FF6D4D]", // Orange
    text: "text-black",
  },
  {
    title: "Identity",
    subtitle: "Brand Systems",
    description: "Visual storytelling that forges emotional connections.",
    icon: Fingerprint,
    bg: "bg-white",
    border: "border border-gray-200",
    text: "text-black",
  },
  // Added a 5th card to fill layout if needed, or kept to 4 for balance.
  // Sticking to 4 to match the previous grid cleanly.
];

const Work = () => {
  return (
    <section id="work" className="w-full py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16">
          {/* Header - Standardized Width and Typography */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
            <h2 className="text-4xl font-medium leading-[1.1] sm:text-5xl md:text-6xl">
              Our Expertise
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              We don't just build websites; we construct digital ecosystems.
              Explore the pillars of our craft.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((item, index) => (
              <div
                key={index}
                className={`group relative flex flex-col justify-between p-8 rounded-[2rem] h-[420px] transition-transform duration-300 hover:-translate-y-2 ${item.bg} ${item.border || ""}`}
              >
                {/* Top Row: Icon & Arrow */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-black/5 rounded-full backdrop-blur-sm">
                    <item.icon
                      className="w-6 h-6 text-black"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-black text-white rounded-full transform rotate-45 group-hover:rotate-0">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="flex flex-col gap-2">
                  <span className="text-black/60 font-medium tracking-wide uppercase text-xs">
                    {item.subtitle}
                  </span>
                  <h3 className="text-3xl font-medium text-black tracking-tight leading-none">
                    {item.title}
                  </h3>
                  <div className="h-px w-full bg-black/10 my-4" />
                  <p className="text-black/80 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
