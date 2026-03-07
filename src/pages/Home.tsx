import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Stats />
      <Features />
      <Testimonials />
    </div>
  );
}
