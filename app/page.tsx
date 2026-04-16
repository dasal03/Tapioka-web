import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import ProductGrid from "@/components/sections/ProductGrid";
import Strip from "@/components/sections/Strip";
import WhatsAppCTA from "@/components/sections/WhatsAppCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Strip />
      <ProductGrid />
      <Gallery />
      <About />
      <WhatsAppCTA />
    </>
  );
}
