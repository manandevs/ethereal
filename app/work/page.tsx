import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    client: "Nebula Finance",
    category: "DeFi Platform",
    year: "2024",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    color: "bg-indigo-500/10"
  },
  {
    client: "Kinetix",
    category: "Mobile App",
    year: "2024",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
    color: "bg-emerald-500/10"
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-foreground">
      <Navbar />

      <section className="pt-32 pb-16 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
           <h1 className="text-6xl md:text-8xl tracking-tighter">
             Selected <br/>
             <span className="font-serif italic font-light ml-4">Works</span>
           </h1>
           <p className="max-w-sm text-gray-500 mb-2">
             A curation of projects defining the digital landscape across FinTech, Web3, and E-Commerce.
           </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[6/3] rounded-3xl overflow-hidden mb-6">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                 <Image 
                    src={project.image} 
                    alt={project.client}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute top-4 right-4 z-20 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={18} />
                 </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                   <h3 className="text-2xl font-medium">{project.client}</h3>
                   <p className="text-gray-500">{project.category}</p>
                </div>
                <span className="border border-black/10 dark:border-white/10 px-3 py-1 rounded-full text-sm">
                   {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
}