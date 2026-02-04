import BrandMarquee from "@/components/BrandMarquee";
import CallToAction from "@/components/CallToAction";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <Stats />
      <Work />
      <Services />
      <Process />
      {/* <Pricing /> */}
      <Testimonials />
      <CallToAction />
      <Team />
      <Blog />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}