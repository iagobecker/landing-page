import Image from "next/image";
import Link from "next/link";

interface PortfolioCardProps {
  slug: string;
  clientName: string;
  category: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  alt: string;
}

export function PortfolioCard({ slug, clientName, category, image, alt }: PortfolioCardProps) {
  return (
    <Link href={`/gallery/${slug}`} className="group">
      <article className="bg-white rounded-lg shadow-sm overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-[3/4] w-full">
          {/* Remova 'fill' e passe 'width' e 'height' */}
          <Image
            src={image.src}
            alt={alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        <div className="p-6 text-center flex-grow flex flex-col justify-center">
          <h3 className="text-2xl font-serif text-[#3a3a3a]">{clientName}</h3>
          <p className="mt-1 text-xs text-gray-500 uppercase tracking-[0.2em]">{category}</p>
        </div>
      </article>
    </Link>
  );
}