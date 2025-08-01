import { portfolioItems } from "@/lib/portfolio-data";
import { notFound } from "next/navigation";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { GalleryClient } from "@/app/components/gallery-client";

// Defina o tipo de params manualmente
type RouteParams = {
  slug: string | string[] | undefined;
};

type Params = Promise<RouteParams>;

// Este é um Componente de Servidor puro. Ele NÃO tem "use client".
export default async function GalleryPage({
  params,
}: {
  params: Params; // Alinha com a tipagem esperada pelo Next.js
}) {
  // Resolva params como uma Promise
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug[0]
    : resolvedParams.slug || ""; // Trata slug como string, usa o primeiro elemento se for array

  // A lógica de buscar os dados continua aqui, no servidor.
  const item = portfolioItems.find((p) => p.slug === slug);

  // Se o item não for encontrado, a função notFound é chamada.
  if (!item) {
    notFound();
  }

  // Busca os outros trabalhos para a seção "More Works".
  const moreWorks = portfolioItems.filter((p) => p.id !== item.id).slice(0, 4);

  return (
    <>
      <Navbar />
      <main>
        {/* Renderiza o Componente de Cliente, passando os dados prontos como props */}
        <GalleryClient item={item} moreWorks={moreWorks} />
      </main>
      <Footer />
    </>
  );
}