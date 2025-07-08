"use client"; // 1. Converte para Client Component

import Image from "next/image";
import Link from "next/link"; // 2. Importa o Link do Next.js
import {
  InstagramLogo,
  WhatsappLogo,
  // FacebookLogo,
  // TwitterLogo,
  // YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const leftNavItems = [
  { name: "Home", href: "/#hero" },
  { name: "Portfolio", href: "/portfolio" }, // Aponta para o ID da seção Hero
  { name: "Sobre", href: "/#sobre" },
];

const rightNavItems = [
  { name: "Inspiração", href: "/#servicos" },
  { name: "Depoimentos", href: "/#depoimentos" },
  { name: "Contato", href: "#contato" }, // Aponta para o próprio footer
];

const socialLinks = {
  // facebook: "#",
  // twitter: "#",
  // youtube: "#",
  instagram: "https://www.instagram.com/brunapaulafotografia.ph/",
  whatsapp:
    "https://wa.me/555591003912?text=Olá, gostaria de mais informações sobre os serviços.",
};

export function Footer() {
  // 3. Função para lidar com a rolagem suave
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Se o link for para outra página, não fazemos nada aqui.
    if (!href.startsWith("#") && !href.startsWith("/#")) {
      return;
    }

    // Se o link for para a página atual (começa com #) ou para a home (começa com /#)
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);

    if (elem) {
      // Se o elemento existe na página atual, rola suavemente até ele
      const offsetPosition = elem.offsetTop - 100; // Desconta 100px para o offset do header
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      // Se o elemento não existe (ex: está em outra página), navega para a URL
      window.location.href = href;
    }
  };

  return (
    <footer id="contato" className="bg-[#eeeded] text-gray-700">
      <div className="container mx-auto px-4 py-3 sm:py-5">
        <nav className="flex items-center justify-between w-full">
          {/* Links da Esquerda */}
          <ul className="hidden md:flex items-center gap-x-16">
            {leftNavItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-md font-bold tracking-widest uppercase text-gray-600 hover:text-[#a7927a] transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Logo Central */}
          <div className="justify-center items-center mx-auto md:mx-0 max-w-[250px]">
            <Link href="/#hero" scroll={false}>
              <Image
                src="https://res.cloudinary.com/dwucy4ffg/image/upload/v1750726608/logo_lgs4dx.png"
                alt="Logo da Tessa Morgan Photography"
                quality={100}
                width={1200}
                height={400}
              />
            </Link>
          </div>

          {/* Links da Direita */}
          <ul className="hidden md:flex items-center gap-x-9">
            {rightNavItems.map((item) => (
              <li key={item.name}>
                {/* Usamos o componente Link para navegação entre páginas */}
                {item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link
                    href={item.href}
                    className="text-md font-bold tracking-widest uppercase text-gray-600 hover:text-[#a7927a] transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-md font-bold tracking-widest uppercase text-gray-600 hover:text-[#a7927a] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* --- RESTANTE DO CONTEÚDO --- */}
        <div className="flex flex-col items-center text-center gap-5 mt-2">
          <p className="max-w-xl font-serif text-lg text-gray-500">
            Fotografa profissional especializada em capturar momentos únicos e
            inesquecíveis. Com um olhar atento aos detalhes e uma paixão pela vida,
            estou aqui para transformar suas memórias em imagens que contam histórias
            e refletem a essência de cada momento especial.
          </p>
          <div className="flex gap-3">
            {/* Ícones de redes sociais
            <a href={socialLinks.facebook} target="_blank" aria-label="Facebook">
              <div className="bg-[#a7927a] text-white p-2 rounded-full hover:opacity-80 transition-opacity">
                <FacebookLogo size={20} />
              </div>
            </a>
            <a href={socialLinks.twitter} target="_blank" aria-label="Twitter">
              <div className="bg-[#a7927a] text-white p-2 rounded-full hover:opacity-80 transition-opacity">
                <TwitterLogo size={20} />
              </div>
            </a>
            <a href={socialLinks.youtube} target="_blank" aria-label="YouTube">
              <div className="bg-[#a7927a] text-white p-2 rounded-full hover:opacity-80 transition-opacity">
                <YoutubeLogo size={20} />
              </div>
            </a> */}
            <a
              href={socialLinks.instagram}
              target="_blank"
              aria-label="Instagram"
            >
              <div className="bg-[#a7927a] text-white p-2 rounded-full hover:opacity-80 transition-opacity">
                <InstagramLogo size={20} />
              </div>
            </a>

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              aria-label="Instagram"
            >
              <div className="bg-[#a7927a] text-white p-2 rounded-full hover:opacity-80 transition-opacity">
                <WhatsappLogo size={20} />
              </div>
            </a>
          </div>
          <p className="text-sm text-gray-500 pt-5">
            Copyright {new Date().getFullYear()} Todos os direitos reservados.
            Feito por{" "}
            <a
              href="https://www.instagram.com/iago.mendoncaw/"
              className="font-bold hover:text-orange-800"
            >
              <span>Iago Becker</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
