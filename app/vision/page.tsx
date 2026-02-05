import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Cta from "@/components/Cta";
import { ArrowLeftIcon, ArrowUpRight, ChevronDownCircle } from "lucide-react";

interface SparkleProps {
  className: string;
}

const StarIcon = ({ className }: SparkleProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
);

export default function VisionPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      <section className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500 rounded-full blur-[120px] opacity-60 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center gap-y-2 md:gap-y-4 select-none">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
                LUXURIOUS
              </h1>

              <div className="relative h-9 w-16 md:h-14 md:w-24 rounded-full overflow-hidden shadow-sm border border-gray-200 group">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=300&h=150"
                  alt="Modern Architecture"
                  className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700"
                />
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
                COMFORT
              </h1>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
                IN A
              </h1>

              <div className="flex items-center justify-center">
                <StarIcon className="w-8 h-8 md:w-14 md:h-14 rotate-[-10deg]" />
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
                REFRESHING
              </h1>
            </div>

            <div className="mt-1 md:mt-2">
              <div className="bg-[#E2E4E9] px-8 py-1 md:px-10 md:py-2 rounded-full inline-block">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight uppercase text-black">
                  ARCHITECT
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen p-4 md:p-8 lg:p-12 font-sans overflow-hidden">
        <div className="flex flex-col gap-4 max-w-4xl">
          <span className="text-gray-400 tracking-widest uppercase">
            (We Are)
          </span>

          <div className="flex flex-wrap items-center gap-4 pb-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium uppercase leading-[0.9] tracking-tight">
              Design & Decor Interior <br />
              And Architectural Studio
            </h1>
          </div>
        </div>

        <div className="relative w-full h-[450px] rounded-xl overflow-hidden bg-gray-900 border border-white/5">
          <img
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
            alt="Modern Dark Interior"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between text-black">
            <div className="hidden md:block absolute top-24 right-10 max-w-md text-right backdrop-blur-2xl rounded-2xl py-4 px-6">
              <span className="uppercase tracking-widest mb-2">
                (A Few Words About)
              </span>
              <p className="leading-relaxed text-left">
                Interior and architectural studio offers a wide range of
                services in interior design, spanning from conceptual
                development to construction management and design
                implementation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Stats />
      <div className="py-20">
        <Cta />
      </div>
      <Footer />
    </div>
  );
}
