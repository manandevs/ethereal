import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Blog = () => {
  return (
    <section className="w-full py-20 lg:py-24 relative overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col justify-between min-h-[60vh]">
          {/* Top Area */}
          <div className="flex-1 flex flex-col items-center justify-center mb-16 md:mb-0">
            <div className="relative">
              {/* Stickers */}
              <div className="absolute -top-20 -left-6 md:-left-12 flex flex-col items-start pointer-events-none select-none">
                <div className="bg-[#4ADE80] text-black px-5 py-1.5 rounded-full transform -rotate-6 shadow-lg text-sm font-bold z-20 relative left-4">
                  Vision
                </div>
                <div className="flex items-center -mt-3">
                  <div className="bg-[#F472B6] text-black px-5 py-1.5 rounded-full transform -rotate-3 shadow-lg text-sm font-bold z-10 border-2 border-[#16121E]">
                    Creativity
                  </div>
                  <div className="bg-[#FB923C] text-black px-5 py-1.5 rounded-full transform rotate-12 shadow-lg text-sm font-bold -ml-2 mt-1 border-2 border-[#16121E]">
                    Code
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-semibold uppercase leading-[0.85] tracking-tight text-center text-white">
                From Ideas
                <br />
                To Launch
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed mx-auto text-center mt-6">
                An independent design studio driving small businesses with large
                ambitions to make their digital mark.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
