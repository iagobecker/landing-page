import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import bruna from "../../../public/capa.jpg";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-black  min-h-[600px] ">
      <div className=" rounded-3xl">
        <Image
          src={bruna}
          alt="Foto do cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover rounded-3xl opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-32 pb-16 md:pb-0 px-4 relative z-10">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className=" lg:text-lg" data-aos="fade-right">
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target="_blank"
              href={`https://wa.me/555591003912?text=Olá vim pelo site e gostaria de mais informações`}
              className="bg-green-500 px-5 py-2 text-white rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
              <WhatsappLogo className="size-6" />
              Contato via WhatsApp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                de desconto na primeira compra.
              </p>

              <div className="flex mt-4">
                <div className="w-32 hidden  lg:block">
                  <Image
                    src={bruna}
                    alt="Foto do gato"
                    quality={100}
                    className="object-fill shadow-md rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative size-full rounded-3xl overflow-hidden">
              <Image
                src={bruna}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
          </div>
        </article>
      </div>
    </section>
  );
}
