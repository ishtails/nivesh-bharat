import Hero from "@/app/pages/Hero";
import NavBar from "@/components/NavBar";
import WhatWeDo from "./pages/WhatWeDo";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      {/* Navbar */}
      <NavBar />

      {/* Hero */}
      <section id="home" className="relative">
        <div className="absolute blur-[600px] bg-p_orange/40 p-96 -z-10 -left-72 -top-56" />
        <div className="absolute blur-[600px] bg-p_green-500/40 p-96 -z-10 -right-72 -top-56" />
        <Hero />
      </section>

      {/* What We Do? */}
      <section id="whatwedo" className="relative">
        <WhatWeDo />
      </section>
    </main>
  );
}
