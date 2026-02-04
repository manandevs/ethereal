import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Info */}
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl md:text-7xl font-medium tracking-tight">
              Let's start a <br />
              <span className="font-serif italic font-light text-indigo-500">
                conversation
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether you have a groundbreaking idea or just want to say hello,
              we are always open to new possibilities.
            </p>

            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-black/5 dark:bg-white/10">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email us</p>
                  <a
                    href="mailto:hello@ethereal.agency"
                    className="text-xl font-medium hover:underline"
                  >
                    hello@ethereal.agency
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-black/5 dark:bg-white/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Visit us</p>
                  <p className="text-xl font-medium">
                    128 Crosby St, New York, NY
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-black/5 dark:bg-white/10">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us</p>
                  <p className="text-xl font-medium">+1 (555) 000-0000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-black/5 dark:border-white/10 shadow-sm">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium pl-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-black border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium pl-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-black border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium pl-1">Subject</label>
                <select className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-black border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                  <option>Project Inquiry</option>
                  <option>Partnership</option>
                  <option>General Question</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium pl-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full p-4 rounded-xl bg-gray-50 dark:bg-black border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>

              <button className="group relative flex h-14 w-full items-center justify-center gap-1.5 overflow-hidden rounded-full bg-black dark:bg-white text-white dark:text-black transition-all duration-300 hover:opacity-90 mt-2">
                <span className="relative z-10 font-medium text-lg">
                  Send Message
                </span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
