"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const instaImg = [
  {
    id: 1,
    slug: "ensaios",
    coverImage: {src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750801424/Isa_maravilhooosa_-1-2_xqs7jj.jpg", width: 1080, height: 1350}, 
    alt: "Ensaio fotográfico de Rafa",
  },
  {
    id: 2,
    slug: "casamentos",
    coverImage: {src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718062/Jemima_maravilhosa-79-56_1_zxvbrn.jpg", width: 1080, height: 1350},
    alt: "Casamento de Jemima",
  },
  {
    id: 3,
    slug: "retratos",
    coverImage: {src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718075/Rafa_-_fotos_prontas-38_1_gt4qra.jpg", width: 1080, height: 1350}, 
    alt: "Retrato de Rafa",
  },

  {
    id: 4,
    slug: "familia",
    coverImage: {src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718086/fotografias_por_ph.brunapaula-6_1_w3rfdt.jpg", width: 1080, height: 1350}, 
    alt: "Retrato de Rafa",
  },
];

const testimonials = [
  {
    content: "Showcasing your Big Day in a Memorable & Unforgettable way.",
    author: "SARAH & LUKE",
    image: {src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718075/Rafa_-_fotos_prontas-38_1_gt4qra.jpg", width: 1080, height: 1350},
  },
  {
    content:
      "A experiência foi incrível do início ao fim. Profissionalismo e sensibilidade em cada clique. Amamos o resultado!",
    author: "RICARDO & MICHELLE",
    image:      {src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718062/Jemima_maravilhosa-79-56_1_zxvbrn.jpg", width: 1080, height: 1350},

  },
  {
    content:
      "Transformaram nosso ensaio em um momento mágico. As fotos ficaram deslumbrantes, superou todas as expectativas.",
    author: "JULIANA & MATEUS",
    image: {src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718075/Rafa_-_fotos_prontas-38_1_gt4qra.jpg", width: 1080, height: 1350}, 
  },
  
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    // Adicionamos o id para a navegação funcionar
    <section id="depoimentos" className="bg-[#fcf7f3] pt-12 pb-24 sm:pb-32">
      <div className="container mx-auto px-4">
        {/* TÍTULO DA SEÇÃO, AGORA ESTILIZADO CORRETAMENTE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#3a3a3a] sm:text-5xl font-serif italic">
            Depoimentos de Clientes
          </h2>
        </div>

        {/* --- CARROSSEL --- */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {/* --- SLIDES DO CARROSSEL --- */}
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4" // pl-4 para dar espaço entre os slides
                >
                  {/* Layout de 2 colunas para cada slide */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Coluna da Esquerda (Texto do Depoimento) */}
                    <div className="border border-[#d4c8be] p-8 sm:p-12 h-full flex flex-col text-center justify-center">
                      <span className="font-serif text-7xl text-[#d4c8be] h-16">
                        “
                      </span>
                      <p className="text-xl text-gray-700 font-serif italic my-6 flex-grow">
                        {item.content}
                      </p>
                      <p className="text-sm font-semibold tracking-[0.2em] text-gray-500">
                        {item.author}
                      </p>
                    </div>

                    {/* Coluna da Direita (Imagem do Cliente) */}
                    <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`Depoimento de ${item.author}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- BOTÕES DE NAVEGAÇÃO, AGORA REESTILIZADOS --- */}
          <div className="hidden lg:block">
            <button
              className="absolute top-1/2 -translate-y-1/2 -left-16 text-gray-400 hover:text-gray-700 transition-colors"
              onClick={scrollPrev}
              aria-label="Slide anterior"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 -right-16 text-gray-400 hover:text-gray-700 transition-colors"
              onClick={scrollNext}
              aria-label="Próximo slide"
            >
              <ChevronRight size={32} />
            </button>
          </div>

            <section className="mt-32 text-center">
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <h2 className="text-3xl font-serif text-[#3a3a3a] col-span-2 md:col-span-4">
              Instagram com mais ensaios
              </h2>
              {[
              {
                ...instaImg[0],
                link: "https://www.instagram.com/brunapaulafotografia.ph/p/DLLq08jRuMR/?img_index=1",
              },
              {
                ...instaImg[1],
                link: "https://www.instagram.com/brunapaulafotografia.ph/p/DJ2Z7d4xNBW/?img_index=7",
              },
              {
                ...instaImg[2],
                link: "https://www.instagram.com/p/DEgKzUAR7wm/?img_index=1",
              },
              {
                ...instaImg[3],
                link: "https://www.instagram.com/p/DDLNpl9Rqil/?img_index=1",
              },
              
              ].map((work) => (
              <a
                key={work.id}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={work.coverImage}
                  alt={work.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                </div>
              </a>
              ))}
            </div>
            </section>
        </div>
      </div>
    </section>
  );
}
