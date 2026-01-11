import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Team } from "@/components/sections/team";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-gray-200 selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
