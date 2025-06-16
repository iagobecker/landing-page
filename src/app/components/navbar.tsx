"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/logoTest.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`border-b fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md h-16" : "bg-white h-24"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        <div className="flex items-center">
          <Image src={logo} alt="Brenco Logo" width={120} height={40} />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 md:items-center absolute md:relative ${
            isScrolled ? "top-16" : "top-24"
          } md:top-0 bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 rounded-lg max-w-sm w-full md:max-w-none md:w-auto left-1/2 md:left-auto transform md:transform-none -translate-x-1/2 md:translate-x-0 container mx-auto md:container md:mx-0 md:px-0`}
        >
          <li className="md:border-none border-b last:border-none">
            <a
              href="#servicos"
              className="hover:text-gray-600 font-bold block md:inline-block py-2 md:py-0 px-2 whitespace-nowrap"
            >
              Serviços
            </a>
          </li>
          <li className="md:border-none border-b last:border-none">
            <a
              href="#sobre"
              className="hover:text-gray-600 font-bold block md:inline-block py-2 md:py-0 px-2 whitespace-nowrap"
            >
              Sobre
            </a>
          </li>
          <li className="md:border-none border-b last:border-none">
            <a
              href="#fornecedores"
              className="hover:text-gray-600 font-bold block md:inline-block py-2 md:py-0 px-2 whitespace-nowrap"
            >
              Fornecedores
            </a>
          </li>
          <li className="md:border-none border-b last:border-none">
            <a
              href="#perguntas"
              className="hover:text-gray-600 font-bold block md:inline-block py-2 md:py-0 px-2 whitespace-nowrap"
            >
              Perguntas Frequentes
            </a>
          </li>
          <li className="md:border-none border-b last:border-none">
            <a
              href="#galeria"
              className="hover:text-gray-600 font-bold block md:inline-block py-2 md:py-0 px-2 whitespace-nowrap"
            >
              Galeria de Fotos
            </a>
          </li>
          <li className="md:border-none">
            <a
              href="#contato"
              className="hover:text-gray-600 font-bold block md:inline-block py-2 md:py-0 px-2 whitespace-nowrap"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
