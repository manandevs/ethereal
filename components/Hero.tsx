import React from "react";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SparkleProps {
  className: string;
}

const Sparkle = ({ className }: SparkleProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white dark:bg-black">
      <div className="absolute top-2/3 left-30 transform -translate-y-1/2 w-80 h-[600px] bg-gradient-to-br from-indigo-300/30 via-purple-300/30 to-transparent dark:from-indigo-900/40 dark:via-purple-900/40 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-2/3 right-30 transform -translate-y-1/2 w-80 h-[600px] bg-gradient-to-bl from-pink-300/30 via-rose-300/30 to-transparent dark:from-pink-900/40 dark:via-rose-900/40 blur-[120px] rounded-full pointer-events-none z-0" />

      <Sparkle className="absolute top-3/4 right-1/3 w-8 h-8 text-purple-400 animate-pulse" />
      <Sparkle className="absolute bottom-3/4 left-1/4 w-5 h-5 text-indigo-400" />
      <Sparkle className="absolute top-1/2 right-5/6 w-3 h-3 text-pink-400" />
      <Sparkle className="absolute top-1/2 left-4/5 w-3 h-3 text-pink-400" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col max-w-5xl mx-auto gap-10">
          <div className="relative flex flex-col text-center items-center gap-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Elevating digital reality through
              <span className="relative px-3 font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-300 dark:to-purple-300">
                Ethereal
              </span>
              precision
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We blend light, shadow, and code to forge brands that don't just
              exist—they float above the noise. Experience the art of weightless
              design.
            </p>
          </div>

          <div className="flex items-center flex-col md:flex-row justify-center gap-8 md:gap-12">
            <Link
              role="button"
              className="group/button relative inline-flex items-center justify-center h-12 ps-6 pe-14 overflow-hidden rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6 focus:outline-none focus:ring-2 focus:ring-offset-2"
              href="/contact"
            >
              {/* --- TINY SPARKLE NEAR BUTTON --- */}
              <Sparkle className="absolute top-1 left-2 w-3 h-3 text-gray-500/50 dark:text-gray-300/50 rotate-12" />

              <span className="relative z-10 transition-all duration-500">
                Start Project
              </span>
              <div className="absolute right-1 w-10 h-10 bg-white text-black dark:bg-black dark:text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover/button:right-[calc(100%-44px)] group-hover/button:rotate-45">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <ul className="flex flex-row items-center">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="-mr-3">
                    <Image
                      alt={`Client ${i}`}
                      width="44"
                      height="44"
                      className="rounded-full border-2 border-white dark:border-black h-11 w-11 object-cover"
                      src={`https://i.pravatar.cc/150?img=${i + 15}`}
                    />
                  </li>
                ))}
              </ul>

              {/* Ratings */}
              <div className="flex flex-col gap-0.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Trusted by 1000+ visionaries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-center relative mt-16">
        <p className="relative px-2 md:before:absolute md:before:right-[-150px] md:before:top-1/2 md:before:h-0.5 md:before:w-36 md:before:bg-gradient-to-r md:before:from-gray-800 dark:md:before:from-gray-300 dark:md:before:opacity-100 md:before:opacity-10 md:before:to-transparent md:after:absolute md:after:left-[-150px] md:after:top-1/2 md:after:h-0.5 md:after:w-36 md:after:bg-gradient-to-l md:after:from-gray-800 dark:md:after:from-gray-300 md:after:opacity-10 dark:md:after:opacity-100 md:after:to-transparent">
          Loved by 100K++ big and small brands around the worlds
        </p>
      </div>
    </section>
  );
};

export default Hero;
