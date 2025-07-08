import { Sobre } from "./components/sobre";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Portfolio } from "./components/portfolio";


export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <Sobre />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}