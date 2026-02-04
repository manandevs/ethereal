import React from "react";

const brands = [
  {
    name: "Daniel Sun",
    img: "/images/marquee/favicon.svg",
  },
  {
    name: "Shopify",
    color: "text-[#95BF47]",
    img: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
  },
  {
    name: "dribbble",
    color: "text-[#EA4C89]",
    img: "/images/marquee/dribbble.png",
  },
  {
    name: "webflow",
    color: "text-[#4353FF]",
    img: "/images/marquee/webflow.png",
  },
];

const BrandMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: scroll-left 40s linear infinite;
        }
        /* Pause animation on hover */
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#000000] to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#000000] to-transparent" />

      <div className="marquee-track flex w-max gap-8 px-4">
        {[0, 1, 2, 3].map((i) => (
          <React.Fragment key={i}>
            {brands.map((brand, index) => (
              <div
                key={`${i}-${index}`}
                className="flex items-center gap-3 px-6 py-3"
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="h-10 w-auto object-contain rounded-sm overflow-hidden"
                />

                {/* Brand Name Text */}
                <span className={`font-bold text-2xl ${brand.color}`}>
                  {brand.name}
                </span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
