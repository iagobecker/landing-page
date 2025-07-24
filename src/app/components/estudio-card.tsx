// src/app/components/estudio-card.tsx
import Image from "next/image";
import Link from "next/link";

interface EstudioCardProps {
  id: number;
  image: {
    src: string;
    width: number;
    height: number;
  };
  alt?: string | undefined;
}

export function EstudioCard({ id, image, alt }: EstudioCardProps) {
  // O link agora pode ser dinâmico. Ex: abrir a imagem em tela cheia ou ir para uma página de detalhes.
  // Usar o 'src' da imagem como href para abrir a imagem diretamente é uma opção simples.
  return (
    <Link href={image.src} target="_blank" rel="noopener noreferrer" className="group">
      <article className="bg-white rounded-lg shadow-sm overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={image.src}
            alt={alt ?? "Estúdio"}
            width={image.width}
            height={image.height}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </article>
    </Link>
  );
}