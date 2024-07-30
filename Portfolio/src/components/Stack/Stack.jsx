import TextBar from "../TextBar";
import StackElement from "./StackElement";

import "../utils/stack.css";

export default function Stack() {
  return (
    <section className="overflow-hidden">
      <div className="w-full flex justify-center mb-[150px]">
        <TextBar text={"STACK"} shadow={"top_right_green"} />
      </div>
      <div className="w-full flex justify-center hover:cursor-pointer mb-[18px]">
        <StackElement icon={"./React.png"} text={"React"} colour={"purple"} />
        <StackElement icon={"./Js.png"} text={"Javascript"} colour={"green"} />
        <StackElement icon={"./Figma.png"} text={"Figma"} colour={"purple"} />
        <StackElement icon={"./Html.png"} text={"HTML"} colour={"green"} />
        <StackElement icon={"./Github.png"} text={"GitHub"} colour={"purple"} />
      </div>
      <div className="w-full flex justify-center hover:cursor-pointer overflow-hidden">
        <StackElement icon={"./MySQL.png"} text={"MySQL"} colour={"green"} />
        <StackElement icon={"./Docker.png"} text={"Docker"} colour={"purple"} />
        <StackElement
          icon={"./Tailwind.png"}
          text={"Tailwind"}
          colour={"green"}
        />
        <StackElement icon={"./Node.png"} text={"Node"} colour={"purple"} />
        <StackElement icon={"./VsCode.png"} text={"VsCode"} colour={"green"} />
      </div>
    </section>
  );
}
