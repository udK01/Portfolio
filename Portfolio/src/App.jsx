import ScrollButton from "./components/ScrollButton";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <section className="h-[3000px] bg-primary_gray">
      <Navbar />
      <SideBar />
      <Hero />
      <ScrollButton />
    </section>
  );
}
