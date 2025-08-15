// src/app/estudio/page.tsx
import { estudioItems } from "@/lib/estudio-data";
import { Footer } from "@/app/components/footer";
import { EstudioCard } from "../components/estudio-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EstudioPage() {
  return (
    <>
      <main className="bg-[#fcf7f3]">
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-base font-semibold leading-7 text-gray-500 uppercase tracking-widest">
                Estudio
              </p>
              <h1 className="mt-2 text-4xl font-bold text-[#3a3a3a] sm:text-5xl">
                O ESTÚDIO
              </h1>
              <div className="mb-12 mt-4">
                <Link
                  href="/#hero"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#3a3a3a] transition-colors"
                >
                  <ArrowLeft size={18} />
                  <span>Voltar</span>
                </Link>
              </div>
             
            </div>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
              {estudioItems.map((item) => (
                <EstudioCard
                  key={item.id}
                  // Passando o objeto da imagem e o alt separadamente
                  image={{
                    src: item.src,
                    width: item.width,
                    height: item.height,
                  }}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}