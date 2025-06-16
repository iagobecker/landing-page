import golden from "../../../public/golden.png";
import royal from "../../../public/royal.png";
import primier from "../../../public/primier.png";
import whiskas from "../../../public/whiskas.png";
import natural from "../../../public/natural.png";
import Image from "next/image";
import {
  //FacebookLogo,
  InstagramLogo,
  //YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
];

export function Footer() {
  return (
    <section className="bg-[#52463a] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas que trabalhamos
          </h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor e dedicação.
            </p>
            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target="_blank"
              href={`https://api.whatsapp.com/send/?phone=5555991003912&text&type=phone_number&app_absent=0`}
              className="bg-green-500 px-5 py-2 text-white rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
              Contato via WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: brunapaulawilk@gmail.com</p>
            <p>Telefone: (55) 91003912</p>
            <p>R. Getúlio Vargas, 557 - CENTRO - Passo de Torres - SC</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
            <div className="flex gap-4">
              {/* <a href="#" target="_blank">
                <FacebookLogo className="w-8 h-8" />
              </a> */}
              <a href="https://www.instagram.com/brunapaulafotografia.ph/" target="_blank">
                <InstagramLogo className="w-8 h-8" />
              </a>
              {/* <a href="#" target="_blank">
                <YoutubeLogo className="w-8 h-8" />
              </a> */}
            </div>
          </div>
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
        </footer>
      </div>
    </section>
  );
}
