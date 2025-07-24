// import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
// import bruna from "../../../public/capaOfc.png";
// import Image from "next/image";

// export function Hero() {
//   return (
//     <section id="hero" className="relative flex items-center bg-white text-black min-h-[600px] md:min-h-[900px]">
//       {/* 1. Imagem de Fundo */}
//       <div className="absolute inset-0">
//         <Image
//           src={bruna}
//           alt="Fotógrafa profissional com sua câmera"
//           fill
//           sizes="100vw"
//           priority
//           className="object-cover object-center" // Ajustado para 'object-center' para melhor enquadramento em mobile
//         />
//       </div>

//       {/* Overlay para escurecer a imagem e melhorar a legibilidade do texto */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       {/* 3. Conteúdo de Texto */}
//       <div className="container mx-auto px-4 relative z-10 flex justify-center lg:justify-start">
//         {/* AQUI ESTÁ A LINHA CORRIGIDA */}
//         <article className="w-full max-w-2xl text-center lg:text-left">
//           <div className="space-y-6">
//             <h1
//               className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-sans text-white" // Cor do texto alterada para branco
//               data-aos="fade-down"
//             >
//               Fotografia Profissional de Marca Pessoal.
//             </h1>
//             <p className="text-lg lg:text-xl text-gray-200" data-aos="fade-right"> {/* Cor do parágrafo alterada */}
//               Capturando a essência da sua marca com imagens que contam histórias.
//               Especializada em retratos, eventos e ensaios personalizados,
//               Bruna Paula Fotografia traz um olhar único para cada clique.
//             </p>

//             <a
//               data-aos="fade-up"
//               data-aos-delay="500"
//               target="_blank"
//               href={`https://wa.me/555591003912?text=Olá vim pelo site e gostaria de mais informações`}
//               className="bg-green-500 hover:bg-green-600 transition-colors px-6 py-3 text-white rounded-md font-semibold flex items-center justify-center w-fit gap-2 text-lg mx-auto lg:mx-0" // Adicionado mx-auto e lg:mx-0 para centralizar o botão no mobile
//             >
//               <WhatsappLogo className="size-6" />
//               Contato via WhatsApp
//             </a>

//             <div className="mt-8 pt-4">
//               <p className="text-md mb-4 font-bold text-white"> {/* Cor do texto alterada */}
//                 <b className="bg-white text-gray-800 px-2 py-1 rounded-md">5%</b>{" "}
//                 de desconto no primeiro ensaio.
//               </p>
//             </div>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// }






"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; // 1. Importa o plugin
import { portfolioItems } from "@/lib/portfolio-data";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export function Hero() {
  // 2. Adiciona o plugin Autoplay à configuração do carrossel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 4000, // Passa um slide a cada 4 segundos
        stopOnInteraction: false, // Não para o autoplay após interação manual
        stopOnMouseEnter: true, // Pausa ao passar o mouse em cima
      }),
    ]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="hero" className="bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="relative w-full max-w-[1920px] mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {portfolioItems.map((item) => item.coverImage ? (
              <div
                key={item.id}
                className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_33.33%] lg:flex-[0_0_20%] min-w-0 pl-4"
              >
                <Link
                  href={`/gallery/${item.slug}`}
                  className="block relative aspect-[3/4] rounded-lg overflow-hidden group"
                >
                  <Image
                    src={item.coverImage}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            ) : null)}
          </div>
        </div>

        {/* Botões de Navegação */}
        <button
          onClick={scrollPrev}
          aria-label="Slide anterior"
          className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-white/50 backdrop-blur-sm rounded-full p-2 text-gray-800 hover:bg-white transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Próximo slide"
          className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-white/50 backdrop-blur-sm rounded-full p-2 text-gray-800 hover:bg-white transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="mt-16 flex pr-6 justify-end">
        {/* Trocamos a tag <a> por <Link> e ajustamos o href */}
        <Link
          href="/portfolio"
          className="border border-black inline-flex items-center gap-2 bg-[#eae0d5] text-gray-700 font-semibold px-6 py-3 rounded-md hover:bg-opacity-80 transition-all"
        >
          Ver Galeria
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
