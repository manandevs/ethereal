import React from "react";
import { ArrowUpRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="w-full py-8 px-4">
      <div className="flex w-full container mx-auto flex-col items-center justify-between gap-6 rounded-3xl bg-black px-7 py-8 sm:px-12 xl:flex-row dark:bg-white/5">   
        <h4 className="text-center text-2xl font-medium leading-tight text-white sm:text-3xl xl:text-left">
          See Our Work in Action.
          <br className="hidden sm:block" /> Start Your Creative Journey with Us!
        </h4>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          
          <a
            href="/contact"
            className="
              group relative inline-flex h-12 w-fit shrink-0 items-center justify-center 
              overflow-hidden rounded-full bg-white border border-transparent
              pl-6 pr-14 text-sm font-medium text-black transition-all duration-500 
              hover:bg-white hover:pl-14 hover:pr-6
            "
          >
            <span className="relative z-10 transition-all duration-500">
              Let’s Collaborate
            </span>
            <div className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
              <ArrowUpRight size={16} strokeWidth={2} />
            </div>
          </a>

          <a
            href="/#work"
            className="
              group relative inline-flex h-12 w-fit shrink-0 items-center justify-center 
              overflow-hidden rounded-full border border-white bg-transparent 
              pl-6 pr-14 text-sm font-medium text-white transition-all duration-500 
              hover:bg-transparent hover:pl-14 hover:pr-6
            "
          >
            <span className="relative z-10 transition-all duration-500">
              Get Started
            </span>
            <div className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
              <ArrowUpRight size={16} strokeWidth={2} />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;