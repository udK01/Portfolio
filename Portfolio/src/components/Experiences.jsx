import StackCard from "./Stack/StackCard";

export default function Experiences() {
  return (
    <section
      id="EXPERIENCES"
      className="h-screen flex flex-col justify-center items-center"
    >
      <div className="flex flex-wrap w-[50%] justify-center gap-10">
        <StackCard icon={"./Icons/React.png"} text={"React"} />
        <StackCard icon={"./Icons/Tailwind.png"} text={"Tailwind"} />
      </div>
    </section>
  );
}
