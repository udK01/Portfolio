import TextBar from "../TextBar";
import StackElement from "./StackElement";

export default function Stack() {
  return (
    <section className="space-y-[150px] overflow-hidden">
      <div className="w-full flex justify-center">
        <TextBar text={"STACK"} shadow={"top_right_green"} />
      </div>
      <div className="w-full flex justify-center hover:cursor-pointer">
        <StackElement icon={"./React.png"} text={"React"} colour={"purple"} />
        <StackElement icon={"./Js.png"} text={"Javascript"} colour={"green"} />
        <StackElement icon={"./Figma.png"} text={"Figma"} colour={"purple"} />
        <StackElement icon={"./Html.png"} text={"HTML"} colour={"green"} />
        <StackElement icon={"./Github.png"} text={"GitHub"} colour={"purple"} />
      </div>
    </section>
  );
}
