import { PortfolioCard } from "@/app/components/portfolio-card";
import { portfolioItems } from "@/lib/portfolio-data";
import { Footer } from "@/app/components/footer";
// Se você tiver as outras seções ("My Promise", etc.) nesta página, pode mantê-las.
// O foco da correção é na seção da grade do portfólio.

export default function PortfolioPage() {
  return (
    <>
      <main className="bg-[#fcf7f3]">
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-base font-semibold leading-7 text-gray-500 uppercase tracking-widest">
                Portfolio
              </p>
              <h1 className="mt-2 text-4xl font-bold text-[#3a3a3a] sm:text-5xl">
                HIGHLIGHTED WORKS
              </h1>
            </div>

            {/* ====================================================== */}
            {/* ========= GRADE DA GALERIA COM LÓGICA CORRIGIDA ========= */}
            {/* ====================================================== */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
              {portfolioItems.map((item) => {
                // Verificação de segurança: Só renderiza o card se a imagem de capa existir.
                if (!item.coverImage || !item.coverImage.src) {
                  return null;
                }

                return (
                  <PortfolioCard
                    key={item.id}
                    slug={item.slug}
                    clientName={item.clientName}
                    category={item.category}
                    image={item.coverImage} // Usamos a propriedade 'coverImage' diretamente
                    alt={item.alt}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}