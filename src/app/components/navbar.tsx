"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

// Array de navegação com o href para "Sobre" corrigido
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Sobre", href: "#sobre" }, // CORRIGIDO de #about para #sobre
  { name: "Inspiração", href: "#servicos" },
  { name: "Depoimentos", href: "#depoimentos" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuContainerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98, y: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.98, 
      y: -10, 
      transition: { 
        duration: 0.15,
        ease: "easeIn"
      } 
    },
  };
  
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`border-b fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md h-16" : "bg-white h-24"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        {/* Envolvemos a logo em um Link ou <a> para navegação */}
        <div className="justify-center items-center pt-2 mx-auto md:mx-0 max-w-[200px]">
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

        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            animate={isMenuOpen ? "open" : "closed"}
            initial={false}
          >
            {/* SVG do ícone do menu hamburguer (sem alteração) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
              <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" variants={{ closed: { d: "M 2 6.5 L 22 6.5" }, open: { d: "M 4 19.5 L 20 3.5" }, }} />
              <motion.path d="M 2 12.5 L 22 12.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" variants={{ closed: { opacity: 1 }, open: { opacity: 0 }, }} transition={{ duration: 0.1 }} />
              <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" variants={{ closed: { d: "M 2 18.5 L 22 18.5" }, open: { d: "M 4 3.5 L 20 19.5" }, }} />
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute left-0 w-full px-4"
              style={{ top: isScrolled ? "4rem" : "6rem" }}
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <NavLinks isMobile={true} onLinkClick={handleLinkClick} />
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="hidden md:block">
           <NavLinks isMobile={false} onLinkClick={handleLinkClick} />
        </div>
      </div>
    </nav>
  );
}

function NavLinks({ isMobile, onLinkClick }: { isMobile: boolean, onLinkClick: () => void }) {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); 

    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight - (isMobile ? 0 : 16);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
        // Se o elemento não está na página atual (ex: clicou em #sobre na página /portfolio)
        // Navega para a página principal e depois rola.
        window.location.href = `/${href}`;
    }

    onLinkClick();
  };

  return (
    <ul
      className={
        isMobile
          ? "flex flex-col bg-white shadow-xl rounded-lg border"
          : "flex items-center space-x-6"
      }
    >
      {navItems.map((item) => (
        <li key={item.name} className={isMobile ? "border-b last:border-none" : ""}>
          <a
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="hover:text-gray-600 font-bold whitespace-nowrap py-4 px-5 block cursor-pointer"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}