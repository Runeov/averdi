import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { CTABand } from "@/components/CTABand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <About />
      <CTABand />
      <Footer />
    </main>
  );
}