import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/layout/navbar";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-gray-200 selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
