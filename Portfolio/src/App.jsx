import Projects from "./components/Projects/Projects";
import ScrollButton from "./components/ScrollButton";
import Experiences from "./components/Experiences";
import Stack from "./components/Stack/Stack";
import SideBar from "./components/SideBar";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <section className="bg-primary_gray">
      <Navbar />
      <SideBar />
      <Hero />
      {/* <Stack /> */}
      <Projects />
      <Experiences />
      <Contact />
      <ScrollButton />
    </section>
  );
}
