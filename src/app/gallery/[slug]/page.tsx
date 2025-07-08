import { portfolioItems } from "@/lib/portfolio-data";
import { notFound } from "next/navigation";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { GalleryClient } from "@/app/components/gallery-client"; // Importa o novo componente de cliente

// Esta função pode continuar aqui para otimizações de build
export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

// Este agora é um Componente de Servidor puro
export default function GalleryPage({ params }: { params: { slug: string } }) {
  // A lógica de buscar os dados continua aqui, no servidor
  const item = portfolioItems.find((p) => p.slug === params.slug);

  if (!item) {
    notFound();
  }

  const moreWorks = portfolioItems.filter((p) => p.id !== item.id).slice(0, 4);

  return (
    <>
      <Navbar />
      <main>
        {/* Renderiza o Componente de Cliente, passando os dados como props */}
        <GalleryClient item={item} moreWorks={moreWorks} />
      </main>
      <Footer />
    </>
  );
}