import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import Services from "@/components/Services";
import BrandMarquee from "@/components/BrandMarquee";
import CallToAction from "@/components/CallToAction";

export default function CraftPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-foreground">
      <Navbar />

      <section className="relative pt-32 pb-24 container mx-auto px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-indigo-400/20 dark:bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto mt-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
            We engineer clarity through{" "}
            <span className="relative font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-300 dark:to-indigo-300">
              deliberate execution
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ideas are fragile. We shape them through disciplined systems,
            intentional design, and code that feels as refined as it performs —
            transforming vision into enduring digital work.
          </p>
        </div>
      </section>

      <Services />
      <Process />
      <section className="py-20 overflow-hidden">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium">Powered by modern primitives</h2>
        </div>
        <BrandMarquee />
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
}
