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
                src={'https://res.cloudinary.com/dwucy4ffg/image/upload/v1753311728/estudio_xyjoqp.jpg'}
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
                    src={'https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718075/Rafa_-_fotos_prontas-38_1_gt4qra.jpg'}
                    alt="Decoração floral"
                    width={120}
                    height={100}
                    className="opacity-80 rounded-2xl"
                  />
                </div>
                
                {/* Conteúdo Principal de Texto */}
                <div className="my-8">
                  <h3 className="font-serif text-4xl sm:text-5xl text-[#52463a] leading-tight">
                   Confira alguns dos meus trabalhos
                    <br />
                     &
                    <br />
                    Depoimentos de Clientes
                  </h3>
                  <p className="mt-6 text-base text-gray-600 max-w-md mx-auto lg:mx-0">
                    Cada momento é uma obra de arte esperando para ser capturada. Nossa paixão é transformar suas memórias em tesouros visuais que durarão para sempre.
                  </p>
                </div>

                {/* Decoração Inferior */}
                <div className="flex justify-center lg:justify-end">
                  <Image
                    src={'https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718062/Jemima_maravilhosa-56_1_p17zv5.jpg'}
                    alt="Decoração floral"
                    width={120}
                    height={140}
                    className="opacity-80 transform-scale-x-100 rounded-2xl" // Espelha a imagem horizontalmente
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }