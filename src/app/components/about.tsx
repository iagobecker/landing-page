import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Check, MapPin } from "lucide-react";
import sobreIMG from "../../../public/sobre.jpg";
import sobre02IMG from "../../../public/sobre02.jpg";

export function About() {
  return (
    <section className="bg-[#fcf7f3] py-16">
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

            <div className="absolute right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white" style={{ width: 160, height: 160 }}>
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
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>
              Until one has loved an animal, a part of s soul remains
              unawakened. We believe in it and we believe in easy access to
              things that are good for our mind, body and spirit. With a clever
              offering, superb support and a secure checkout re in good hands.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                target="_blank"
                href={`https://wa.me/555591003912?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-green-500 font-bold text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="size-6 text-white" />
                Contato via WhatsApp
              </a>

              <a
                href="#mapa"
                className=" flex font-bold items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="size-6 text-black" />
                Endereço do Estudio
              </a>
            </div>

            {/* CÓDIGO DO MAPA ATUALIZADO */}
            <div id="mapa" className="mt-6 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.660136979624!2d-49.72103562369688!3d-29.08581777553587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95226f7a6a4a1b9f%3A0x6a13d7e35b0d01c0!2sR.%20Get%C3%BAlio%20Vargas%2C%20557%20-%20Centro%2C%20Passo%20de%20Torres%20-%20SC%2C%2088980-000!5e0!3m2!1spt-BR!2sbr!4v1718553147321!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-80 rounded-lg shadow-md"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}