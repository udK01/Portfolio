import TextBar from "./components/TextBar";

export default function Hero() {
  return (
    <section className="p-20">
      <TextBar
        text={"TEXT"}
        shadow={"shadow-top_left_green_shadow"}
        bgGreen={false}
      />
    </section>
  );
}
