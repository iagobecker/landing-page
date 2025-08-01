"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// 1. Importa o tipo que acabamos de criar
import type { PortfolioItem } from "@/lib/portfolio-data";

// 2. Define os tipos das propriedades do componente
interface GalleryClientProps {
  item: PortfolioItem;
  moreWorks: PortfolioItem[];
}

export function GalleryClient({ item, moreWorks }: GalleryClientProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (!item.galleryImages) {
    return <p>Galeria de imagens não encontrada.</p>;
  }

  const images = item.galleryImages;

  const lightboxSlides = images.map((image) => ({
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
  }));

  return (
    <>
      <div className="container mx-auto px-4 pt-32 sm:pt-40 pb-24">
        <div className="mb-12">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#3a3a3a] transition-colors">
            <ArrowLeft size={18} />
            <span>Voltar para o Portfólio</span>
          </Link>
        </div>

        <header className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">GALLERY</p>
          <h1 className="mt-2 text-4xl sm:text-6xl font-serif text-[#3a3a3a]">{item.clientName}</h1>
          <div className="mt-6 flex justify-center items-center gap-x-8 text-sm text-gray-500">
            <span>Date: {item.date}</span>
            <span className="h-4 w-px bg-gray-300"></span>
            <span>Category: {item.category}</span>
          </div>
        </header>

        {item.coverImage && (
          <div className="mt-16 relative w-full max-w-[900px] mx-auto aspect-[16/9] max-h-[600px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={item.coverImage.src}
              alt={item.alt}
              width={item.coverImage.width}
              height={item.coverImage.height}
              sizes="100vw"
              className="object-contain w-full h-full"
            />
          </div>
        )}

        <p className="mt-12 text-center max-w-2xl mx-auto text-gray-600 font-serif text-lg">
          {item.description}
        </p>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.map((img, idx) => (
            <button
              key={img.id}
              className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-md cursor-pointer group block w-full text-left"
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
              aria-label={`Ver imagem ${img.alt} em tela cheia`}
              >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        <section className="mt-32 text-center">
          <h2 className="text-3xl font-serif text-[#3a3a3a]">More Works</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {moreWorks.map((work) => {
              if (!work.coverImage) return null;
              return (
                <Link key={work.id} href={`/gallery/${work.slug}`} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image src={work.coverImage.src} alt={work.alt} width={work.coverImage.width} height={work.coverImage.height} sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={lightboxSlides}
        index={index}
        styles={{ container: { backgroundColor: "rgba(25, 25, 25, 0.92)" } }}
        carousel={{ padding: "80px", spacing: "30px", imageFit: "contain" }}
        animation={{ fade: 250, swipe: 300 }}
      />
    </>
  );
}