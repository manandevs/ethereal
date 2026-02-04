import React from "react";
import { 
  FileCode2, 
  Landmark, 
  LayoutGrid, 
  Activity, 
  Gem 
} from "lucide-react";

// Data for the cards to keep JSX clean
const services = [
  {
    title: "Smart\nContracts",
    icon: FileCode2,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "DeFi\nProtocols",
    icon: Landmark,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    title: "DApp\nArchitecture",
    icon: LayoutGrid,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    title: "On-Chain\nAnalytics",
    icon: Activity,
    color: "text-lime-400",
    bg: "bg-lime-400/10",
  },
  {
    title: "NFT\nEcosystems",
    icon: Gem,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
];

const Services = () => {
  return (
    <section className="w-full py-11 2xl:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-16">
          
          {/* === HEADING === */}
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
              {/* Standard Text */}
              {["Where", "innovation", "meets"].map((word, index) => (
                <span
                  key={index}
                  className="inline-block px-2 opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  {word}
                </span>
              ))}
              
              {/* Italic Serif Text */}
              <span className="font-['Instrument_Serif'] italic font-normal">
                 <span 
                   className="inline-block px-2 opacity-0 animate-fade-in"
                   style={{
                     animationDelay: `0.4s`,
                     animationFillMode: "forwards",
                   }}
                 >
                   sovereignty
                 </span>
              </span>
            </h2>
          </div>

          {/* === CARDS GRID === */}
          <div className="w-full">
            <div className="grid w-full auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="h-full opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${0.2 + (index * 0.1)}s`, // Staggered fade in
                    animationFillMode: "forwards",
                  }}
                >
                  <div className={`flex h-full flex-col gap-8 rounded-2xl p-8 ${service.bg} transition-transform hover:-translate-y-1`}>
                    
                    {/* Icon */}
                    <div className="flex shrink-0">
                      <service.icon 
                        className={`h-10 w-10 ${service.color}`} 
                        strokeWidth={1} 
                      />
                    </div>

                    {/* Title (Pushed to bottom) */}
                    <div className="mt-auto">
                      <h3 className={`text-2xl leading-tight ${service.color}`}>
                        {service.title.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </h3>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Animation Styles */}
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

export default Services;