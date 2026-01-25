import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { LocationSection } from "@/components/sections/location-section";
import { Navbar } from "@/components/layout/navbar";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-background selection:bg-gray-200 selection:text-black">
      <Navbar />
      <Hero />
      <LocationSection />
      <Services />
      <About />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
