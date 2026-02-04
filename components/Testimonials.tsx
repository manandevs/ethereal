import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const columns = [
  {
    className: "hidden xl:flex flex-col gap-8 pt-32",
    images: [{ src: "https://i.pravatar.cc/150?img=11", alt: "User 1" }],
  },
  {
    className: "hidden lg:flex flex-col gap-24 pt-12",
    images: [{ src: "https://i.pravatar.cc/150?img=31", alt: "User 3" }],
  },
  {
    className: "flex flex-col gap-12 pt-20",
    images: [{ src: "https://i.pravatar.cc/150?img=5", alt: "User 5" }],
  },
  {
    className: "flex flex-col gap-8 pt-0",
    images: [{ src: "https://i.pravatar.cc/150?img=6", alt: "User 6" }],
  },
  {
    className: "flex flex-col gap-8 pt-10",
    images: [{ src: "https://i.pravatar.cc/150?img=7", alt: "User 7" }],
  },
  {
    className: "hidden lg:flex flex-col gap-20 pt-32",
    images: [{ src: "https://i.pravatar.cc/150?img=18", alt: "User 8" }],
  },
  {
    className: "hidden xl:flex flex-col gap-8 pt-24",
    images: [{ src: "https://i.pravatar.cc/150?img=12", alt: "User 10" }],
  },
];

const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-24">
      <div className="rounded-[2.5rem] border border-dark_black/10 bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] backdrop-blur-[200px] px-6 py-20 dark:opacity-80 overflow-hidden">
        <div className="container mx-auto">
          
          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 mb-16">
            {columns.map((col, colIndex) => (
              <div
                key={colIndex}
                className={`relative h-full ${col.className}`}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[120%] border-l-2 border-dotted border-gray-400/30 -z-10" />
                {col.images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-sm transition-transform duration-500 hover:scale-105 hover:shadow-xl bg-white`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Text Content - Standardized */}
          <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
            <h2 className="text-4xl font-medium leading-[1.1] sm:text-5xl md:text-6xl text-black">
              Trusted by leaders <br />
              <span className="text-black/50">from various industries</span>
            </h2>

            <p className="text-black/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              Learn why professionals trust our solutions to complete their
              customer journeys and elevate their digital presence.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="group relative flex h-12 w-fit items-center gap-1.5 overflow-hidden rounded-full bg-black p-1 ps-6 pe-14 text-sm font-medium text-white transition-all duration-500 hover:ps-14 hover:pe-6"
          >
            <span className="relative z-10 transition-all duration-500">
              Read Success Stories
            </span>
            <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;