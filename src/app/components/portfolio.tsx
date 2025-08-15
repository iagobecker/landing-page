import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Crie ou substitua estes caminhos pelas suas imagens reais


export function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#fcf7f3] py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* === TÍTULOS DA SEÇÃO === */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-base font-semibold leading-7 text-gray-500 uppercase tracking-widest">
            Estudio
          </p>
          <h2 className="mt-2 text-4xl font-bold text-[#3a3a3a] sm:text-5xl font-serif">
            Criado para destacar sua presença.
          </h2>
        </div>

        {/* === CONTEÚDO PRINCIPAL (GRID) === */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- Coluna da Esquerda (Texto) --- */}
          <div className="relative text-center lg:text-left">
            {/* Número "01" no fundo */}
            <span className="absolute -top-12 lg:-left-4 -z-0 font-serif text-9xl text-gray-200/80 select-none">
              01
            </span>

            {/* Conteúdo de texto */}
            <div className="relative z-10">
              <h3 className="text-4xl sm:text-5xl font-serif text-[#52463a]">
                Criado para destacar sua presença.
              </h3>
              <p className="mt-4 text-base text-gray-600 max-w-md mx-auto lg:mx-0">
                Cada detalhe do estúdio foi pensado para oferecer uma experiência versátil, inspiradora e acolhedora. Um espaço com personalidade, texturas, contraste e muita luz natural. Um ambiente que se transforma de acordo com cada história, cada cliente, cada propósito.
                Você pode trazer elementos que representem seu universo — objetos, peças, referências. Mas também pode confiar na curadoria que já faz parte daqui: tudo foi escolhido com intenção para potencializar o seu ensaio.
                Do clima à mobília, tudo aqui tem um porquê: valorizar sua essência e dar espaço para que sua imagem seja registrada com autenticidade, verdade e direção estratégica.
              </p>

            </div>
          </div>

          {/* --- Coluna da Direita (Imagens) --- */}
          <div className="w-full">
            {/* Container das imagens */}
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              {/* Imagem 1 */}
              <div className="relative w-1/2 aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={'https://res.cloudinary.com/dwucy4ffg/image/upload/v1753311728/estudio_xyjoqp.jpg'}
                  alt="Retrato de uma mulher sorrindo"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Imagem 2 (um pouco mais baixa para criar efeito) */}
              <div className="relative w-1/2 aspect-[3/4] rounded-lg overflow-hidden shadow-md mt-16">
                <Image
                  src={'https://res.cloudinary.com/dwucy4ffg/image/upload/v1753312372/IMG_4035_bsrk5u.jpg'}
                  alt="Retrato de uma mulher com flores"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Botão "View Gallery" */}
            <div className="mt-8 mr-8 flex justify-end">
              {/* Trocamos a tag <a> por <Link> e ajustamos o href */}
              <Link
                href="/estudio"
                className="border border-black inline-flex items-center gap-2 bg-[#eae0d5] text-gray-700 font-semibold px-6 py-3 rounded-md hover:bg-opacity-80 transition-all"
              >
                Ver Estudio
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
