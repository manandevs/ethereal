import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="container mx-auto px-4 rounded-3xl border border-dark_black/10 bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] backdrop-blur-[200px] p-6 dark:opacity-80">
      <div className="flex flex-col gap-3 mb-3">
        <h2 className="text-3xl md:text-5xl text-black">
          Innovative solutions for{" "}
          <span className="font-instrument-serif italic font-normal">
            bold brands
          </span>
        </h2>

        <p className="text-black/80 dark:text-dark_black max-w-3xl">
          Looking to elevate your brand? We craft immersive experiences that
          captivate, engage, and make your business unforgettable in every
          interaction.
        </p>
      </div>

      {/* Button */}
      <Link
        href="/contact"
        className="group relative flex h-12 w-fit items-center gap-1.5 overflow-hidden rounded-full bg-black p-1 ps-6 pe-14 text-sm font-medium text-white transition-all duration-500 hover:ps-14 hover:pe-6"
      >
        <span className="relative z-10 transition-all duration-500">
          Let’s Collaborate
        </span>

        <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
          <ArrowUpRight size={16} />
        </span>
      </Link>
    </section>
  );
}
