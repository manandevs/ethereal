import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Discovery",
    offset: "mt-12",
    color: "bg-[#A3E6D8]",
  },
  {
    num: "02",
    title: "Strategy",
    offset: "mt-0",
    color: "bg-[#FFB5E8]",
  },
  {
    num: "03",
    title: "Craft",
    offset: "mt-16",
    color: "bg-[#FFC09F]",
  },
  {
    num: "04",
    title: "Launch",
    offset: "mt-4",
    color: "bg-[#E2F0CB]",
  },
  {
    num: "05",
    title: "Scale",
    offset: "mt-24",
    color: "bg-[#F9E974]",
    hasSticker: true,
  },
];

const Process = () => {
  return (
    <section className="w-full py-20 lg:py-24 overflow-hidden relative">
      <div className="container relative z-10 mx-auto px-4">
        
        {/* Header - Standardized Width and Typography */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 gap-6">
          <h2 className="text-4xl font-medium leading-[1.1] sm:text-5xl md:text-6xl text-black dark:text-white">
            The Ethereal <br />
            <span className="text-gray-400">Methodology</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
            From the first spark of an idea to the final line of code, our process 
            is designed to ensure precision, creativity, and measurable impact.
          </p>

          <Link
            role="button"
            className="group/button relative inline-flex items-center justify-center h-12 ps-6 pe-14 overflow-hidden rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6 focus:outline-none focus:ring-2 focus:ring-offset-2"
            href="/contact"
          >
            <span className="relative z-10 transition-all duration-500">
              Start Project
            </span>
            <div className="absolute right-1 w-10 h-10 bg-white text-black dark:bg-black dark:text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover/button:right-[calc(100%-44px)] group-hover/button:rotate-45">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex flex-col group ${step.offset} transition-all duration-500`}
            >
              {step.hasSticker && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
                   {/* Sticker SVG */}
                   <svg width="80" height="60" viewBox="0 0 100 80" fill="none" className="text-[#F2F0EA]">
                    <path d="M50 0 C60 20 80 20 100 25 C80 40 90 60 75 80 C50 65 50 65 25 80 C10 60 20 40 0 25 C20 20 40 20 50 0 Z" fill="currentColor" stroke="none" />
                    <path d="M20 15 L30 25 M70 15 L60 25 M50 5 L50 20" stroke="black" strokeWidth="2" />
                  </svg>
                </div>
              )}

              <div className="relative w-full aspect-[3/5] overflow-hidden rounded-t-[100px] rounded-b-lg">
                <div
                  className={`absolute inset-0 ${step.color} mix-blend-overlay opacity-20 z-10 transition-opacity group-hover:opacity-0`}
                />
                {/* Updated background to be consistent dark gray instead of just gradient */}
                <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                   {/* Abstract Placeholder for Image */}
                   <div className={`w-full h-full ${step.color} opacity-10 blur-3xl transform scale-150`} />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                  <span className="text-4xl font-serif italic text-white/50 mb-2">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-medium text-white">{step.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;