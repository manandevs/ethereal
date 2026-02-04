import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import Image from "next/image";

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-foreground">
      <Navbar />

      <section className="pt-32 pb-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-medium mb-6">
           The <span className="font-serif italic font-light">Minds</span> Behind
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
           We are a collective of designers, engineers, and strategists united by a shared obsession with quality.
        </p>
      </section>

      {/* Office Culture / Image Grid */}
      <section className="py-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[60vh] min-h-[500px]">
           <div className="md:col-span-2 relative rounded-3xl overflow-hidden">
             <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" alt="Studio" fill className="object-cover" />
             <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">
                Headquarters — NYC
             </div>
           </div>
           <div className="flex flex-col gap-4">
              <div className="relative flex-1 rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" alt="Meeting" fill className="object-cover" />
              </div>
              <div className="relative flex-1 rounded-3xl overflow-hidden bg-bg-[#ff880049] flex items-center justify-center p-8 text-center">
                 <h3 className="text-white text-2xl font-serif italic">"Remote first, human always."</h3>
              </div>
           </div>
        </div>
      </section>

      {/* Reusing Team Component (Capabilities) */}
      <div className="py-10">
        <Team />
      </div>

      <Footer />
    </div>
  );
}