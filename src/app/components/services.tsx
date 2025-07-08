  "use client";

  import Image from "next/image";

  // Garanta que os caminhos para suas imagens estejam corretos

  export function Services() {
    return (
      <section id="servicos" className="bg-[#F8F5F2] py-24 sm:py-32">
        <div className="container mx-auto px-4">
          {/* Seção de Títulos */}
          <div className="text-center mx-auto max-w-2xl mb-20">
            <p className="text-base font-semibold leading-7 text-gray-500 uppercase tracking-widest">
              Nossa Essência
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#3a3a3a] sm:text-5xl font-serif">
              O que nos Inspira
            </h2>
          </div>

          {/* Layout Principal com Sobreposição */}
          <div className="relative max-w-7xl mx-auto lg:flex lg:items-center">
            
            {/* COLUNA DA IMAGEM (ESQUERDA) */}
            {/* A imagem ocupa 60% da largura em telas grandes */}
            <div className="relative w-full lg:w-3/5 h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={''}
                alt="Casal elegante posando ao ar livre durante um ensaio fotográfico"
                fill
                quality={100}
                className="object-cover"
              />
            </div>

            {/* COLUNA DO CARD DE TEXTO (DIREITA) */}
            {/* Em telas grandes, este card irá sobrepor a imagem da esquerda */}
            <div className="relative w-full lg:w-1/2 mt-[-100px] lg:mt-0 lg:ml-[-15%] z-10">
              <div className="bg-[#FDFBF9]/90 backdrop-blur-sm border border-black/5 shadow-2xl rounded-2xl p-8 sm:p-14 text-center lg:text-left">
                
                {/* Decoração Superior */}
                <div className="flex justify-center lg:justify-start">
                  <Image
                    src={''}
                    alt="Decoração floral"
                    width={90}
                    height={50}
                    className="opacity-80"
                  />
                </div>
                
                {/* Conteúdo Principal de Texto */}
                <div className="my-8">
                  <h3 className="font-serif text-4xl sm:text-5xl text-[#52463a] leading-tight">
                    Creative,
                    <br />
                    Passionate &
                    <br />
                    Artistic
                  </h3>
                  <p className="mt-6 text-base text-gray-600 max-w-md mx-auto lg:mx-0">
                    Cada momento é uma obra de arte esperando para ser capturada. Nossa paixão é transformar suas memórias em tesouros visuais que durarão para sempre.
                  </p>
                </div>

                {/* Decoração Inferior */}
                <div className="flex justify-center lg:justify-end">
                  <Image
                    src={''}
                    alt="Decoração floral"
                    width={70}
                    height={40}
                    className="opacity-80 transform -scale-x-100" // Espelha a imagem horizontalmente
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }