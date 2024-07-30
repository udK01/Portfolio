import TextBar from "../TextBar";
import StackElement from "./StackElement";

import "../utils/stack.css";

export default function Stack() {
  return (
    <section className="overflow-hidden">
      <div className="w-full flex justify-center mb-[150px]">
        <TextBar text={"STACK"} shadow={"top_right_green"} />
      </div>
      <div className="w-[200%] h-[150px] overflow-hidden relative mb-[18px]">
        <div className="w-[200%] flex items-center h-full absolute left-0 animate_left">
          <StackElement icon={"./React.png"} text={"React"} colour={"purple"} />
          <StackElement
            icon={"./Js.png"}
            text={"Javascript"}
            colour={"green"}
          />
          <StackElement icon={"./Figma.png"} text={"Figma"} colour={"purple"} />
          <StackElement icon={"./Html.png"} text={"HTML"} colour={"green"} />
          <StackElement
            icon={"./Github.png"}
            text={"GitHub"}
            colour={"purple"}
          />
          <StackElement icon={"./React.png"} text={"React"} colour={"green"} />
          <StackElement
            icon={"./Js.png"}
            text={"Javascript"}
            colour={"purple"}
          />
          <StackElement icon={"./Figma.png"} text={"Figma"} colour={"green"} />
          <StackElement icon={"./Html.png"} text={"HTML"} colour={"purple"} />
          <StackElement
            icon={"./Github.png"}
            text={"GitHub"}
            colour={"green"}
          />
        </div>
      </div>
      <div className="w-[200%] h-[150px] overflow-hidden relative">
        <div className="w-[200%] flex items-center h-full absolute left-0 animate_right">
          <StackElement icon={"./MySQL.png"} text={"MySQL"} colour={"purple"} />
          <StackElement
            icon={"./Docker.png"}
            text={"Docker"}
            colour={"green"}
          />
          <StackElement
            icon={"./Tailwind.png"}
            text={"Tailwind"}
            colour={"purple"}
          />
          <StackElement icon={"./Node.png"} text={"Node"} colour={"green"} />
          <StackElement
            icon={"./VsCode.png"}
            text={"VsCode"}
            colour={"purple"}
          />
          <StackElement icon={"./MySQL.png"} text={"MySQL"} colour={"green"} />
          <StackElement
            icon={"./Docker.png"}
            text={"Docker"}
            colour={"purple"}
          />
          <StackElement
            icon={"./Tailwind.png"}
            text={"Tailwind"}
            colour={"green"}
          />
          <StackElement icon={"./Node.png"} text={"Node"} colour={"purple"} />
          <StackElement
            icon={"./VsCode.png"}
            text={"VsCode"}
            colour={"green"}
          />
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="w-full flex justify-center hover:cursor-pointer mb-[18px]">
        <StackElement icon={"./React.png"} text={"React"} colour={"purple"} />
        <StackElement icon={"./Js.png"} text={"Javascript"} colour={"green"} />
        <StackElement icon={"./Figma.png"} text={"Figma"} colour={"purple"} />
        <StackElement icon={"./Html.png"} text={"HTML"} colour={"green"} />
        <StackElement icon={"./Github.png"} text={"GitHub"} colour={"purple"} />
      </div> */
}
