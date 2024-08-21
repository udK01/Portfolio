import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
  return (
    <section className="bg-primary_gray">
      <Navbar />
      <Hero />
      <div className="lg:space-y-[120px] md:space-y-[200px] 2xs:space-y-[50px]">
        <AboutMe />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </section>
  );
}
