import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Produtos from "@/components/Produtos";
import Servicos from "@/components/Servicos";
import OndeEstamos from "@/components/OndeEstamos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Produtos />
        <Servicos />
        <OndeEstamos />
        <Footer />
      </main>
    </>
  );
}
