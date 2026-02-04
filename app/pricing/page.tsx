import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-foreground">
      <Navbar />

      <section className="pt-32 pb-10 container mx-auto px-4 text-center">
         <h1 className="text-5xl md:text-7xl font-medium mb-6">
            Invest in <span className="font-serif italic font-light text-green-500">Excellence</span>
         </h1>
         <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transparent pricing packages designed to scale with your ambition. 
            From MVP to Enterprise, we have you covered.
         </p>
      </section>

      {/* Reuse Pricing Component */}
      <div className="-mt-10">
        <Pricing />
      </div>

      <div className="max-w-4xl mx-auto border-t border-black/10 dark:border-white/10 mt-10">
        <Faq />
      </div>

      <Footer />
    </div>
  );
}