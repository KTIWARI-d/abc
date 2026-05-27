import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Quote from "@/components/Quote";
import KeyFeatures from "@/components/KeyFeatures";
import GlimpseExcellence from "@/components/GlimpseExcellence";
import Programs from "@/components/Programs";
import Marquee from "@/components/Marquee";
import Launching from "@/components/Launching";
import Professionals from "@/components/Professionals";
import Facilities from "@/components/Facilities";
import CoachesEvents from "@/components/CoachesEvents";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Quote />
      <KeyFeatures />
      <GlimpseExcellence />
      <Programs />
      <Marquee />
      <Launching />
      <Professionals />
      <Facilities />
      <CoachesEvents />
      <Footer />
    </main>
  );
}
