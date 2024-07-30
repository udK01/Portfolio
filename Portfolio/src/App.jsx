import ScrollButton from "./components/ScrollButton";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Stack from "./components/Stack/Stack";
import Hero from "./components/Hero";

export default function App() {
  return (
    <section className="h-[3000px] bg-primary_gray">
      <Navbar />
      <SideBar />
      <div className="space-y-[80px]">
        <Hero />
        <Stack />
      </div>

      <ScrollButton />
    </section>
  );
}
