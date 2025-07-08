import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Check } from "lucide-react";
import sobreIMG from "../../../public/sobre.jpg";
import sobre02IMG from "../../../public/sobre02.jpg";

export function Sobre() {
  return (
    <section id="sobre" className="bg-[#fcf7f3] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <div className="relative w-full h-[700px] rounded-3xl overflow-hidden">
              <Image
                src={sobreIMG}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div
              className="absolute right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white"
              style={{ width: 160, height: 160 }}
            >
              <Image
                src={sobre02IMG}
                alt="Foto do cachorro 2"
                fill
                quality={100}
                priority
                className="object-contain"
              />
            </div>
          </div>

          <div
            className="space-y-6 mt-10"
            data-aos="fade-up-left"
            data-aos-delay="300"
          >
            <h2 className="text-4xl font-bold">Oláá, me chamo Bruna Paula, sua fotógrafa.</h2>

            
            <p>
              Costumo dizer que o empreendedorismo sempre esteve comigo. -Nasci
              de pais empreendedores que me ensinaram, desde cedo, sobre
              independência. Hoje, sigo esse caminho guiando empresárias de
              sucesso, como você, a se posicionarem com estratégia e
              autenticidade.
            </p>

            <p>
              Minha missão é te conduzir nessa jornada de posicionamento ou
              reposicionamento profissional através de um ensaio que traduza
              quem você é. -Seja sua primeira experiência diante das câmeras ou
              um novo passo para fortalecer sua presença, minha fotografia vai
              além da estética - ela comunica, impacta e posiciona.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Passo de Torres, Torres, Araranguá, Criciúma e Região.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Estudio em Passo de Torres, SC.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Acompanhamento completo do ensaio, desde o planejamento até a entrega final.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Reuniões de planejamento para entender suas necessidades e objetivos.
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <p>Vamos conduzir essa experiência?</p>
              <a
                target="_blank"
                href={`https://wa.me/555591003912?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-green-500 font-bold text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="size-6 text-white" />
                Contato via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
