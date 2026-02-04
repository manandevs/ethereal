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

      <section className="pt-40 pb-10 container mx-auto px-4 text-center">
         <h1 className="text-5xl md:text-7xl font-medium mb-6">
            The Art of <span className="font-serif italic font-light text-purple-500">Execution</span>
         </h1>
         <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Great ideas die without execution. Our craft is the bridge between imagination and reality, paved with rigorous code and fluid design.
         </p>
      </section>

      {/* Services Grid Reuse */}
      <Services />

      {/* Process Reuse */}
      <div className="bg-white dark:bg-white/5 py-10 my-10 border-y border-black/5 dark:border-white/10">
        <Process />
      </div>

      {/* Tech Stack */}
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