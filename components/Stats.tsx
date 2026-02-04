import React from "react";
import { Gem, Network, ShieldCheck } from "lucide-react";

const Stats = () => {
  return (
    <section className="w-full py-11 2xl:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 lg:gap-16">
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            {/* === TOP STATS ROW === */}
            <div className="flex flex-col items-center justify-center md:flex-row">
              <div className="relative px-16 py-4 md:py-8 2xl:px-24">
                <h2 className="text-5xl font-medium md:text-7xl 2xl:text-9xl">
                  <sup className="text-3xl md:text-5xl">+</sup>
                  <span>40</span>
                </h2>
                <p className="mt-2 text-center text-lg text-gray-400">
                  Contracts Deployed
                </p>
                <div className="absolute right-0 top-1/2 hidden h-28 w-px -translate-y-1/2 bg-gray-300 md:block"></div>
              </div>

              <div className="relative px-16 py-4 md:py-8 2xl:px-24">
                <h2 className="text-5xl font-medium md:text-7xl 2xl:text-9xl">
                  <sup className="text-3xl md:text-5xl">+</sup>
                  <span>15</span>
                </h2>
                <p className="mt-2 text-center text-lg text-gray-400">
                  Audited Protocols
                </p>
                <div className="absolute right-0 top-1/2 hidden h-28 w-px -translate-y-1/2 bg-gray-300 md:block"></div>
              </div>

              <div className="relative px-16 py-4 md:py-8 2xl:px-24">
                <h2 className="text-5xl font-medium md:text-7xl 2xl:text-9xl">
                  <sup className="text-3xl md:text-5xl">+</sup>
                  <span>12</span>
                </h2>
                <p className="mt-2 text-center text-lg text-gray-400">
                  Global Hackathons
                </p>
              </div>
            </div>

            <h2 className="max-w-7xl text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
              {[
                "Building",
                "immutable,",
                "censorship-resistant",
                "&",
                "cryptographic",
                "infrastructures",
                "to",
                "empower",
                "the",
                "future",
                "of",
                "digital",
                "ownership",
                "with",
              ].map((word, index) => (
                <span
                  key={index}
                  className="inline-block px-1 opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  {word}
                </span>
              ))}
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
              <div className="flex items-center gap-3 rounded-full bg-indigo-500/10 px-6 py-2 text-indigo-600">
                <Network
                  className="h-6 w-6 shrink-0 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                  strokeWidth={1.5}
                />
                <span className="font-['Instrument_Serif'] text-3xl italic sm:text-4xl">
                  Decentralized
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-full bg-fuchsia-400/10 px-6 py-2 text-fuchsia-500">
                <Gem
                  className="h-6 w-6 shrink-0 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                  strokeWidth={1.5}
                />
                <span className="font-['Instrument_Serif'] text-3xl italic sm:text-4xl">
                  Tokenomics
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-full bg-emerald-400/10 px-6 py-2 text-emerald-500">
                <ShieldCheck
                  className="h-6 w-6 shrink-0 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                  strokeWidth={1.5}
                />
                <span className="font-['Instrument_Serif'] text-3xl italic sm:text-4xl">
                  Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; filter: blur(4px); transform: translateY(10px); }
          to { opacity: 1; filter: blur(0); transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Stats;
