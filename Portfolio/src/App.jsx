import Projects from "./components/Projects/Projects";
import ScrollButton from "./components/ScrollButton";
import Stack from "./components/Stack/Stack";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <section className="h-[3000px] bg-primary_gray">
      <Navbar />
      <SideBar />
      <Hero />
      <Stack />
      <Projects />
      <ScrollButton />
    </section>
  );
}
