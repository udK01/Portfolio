import TextBar from "../TextBar";
import StackElement from "./StackElement";

import "../utils/stack.css";

export default function Stack() {
  return (
    <section className="overflow-hidden">
      <div className="w-full flex justify-center mb-[150px]">
        <TextBar text={"STACK"} shadow={"top_right_green"} extra={"z-10"} />
      </div>

      {/* Slider 1 */}
      <div className="slider">
        <div className="list">
          <div className="item">
            <StackElement
              icon={"./React.png"}
              text={"React"}
              colour={"purple"}
            />
          </div>
          <div className="item">
            <StackElement
              icon={"./Js.png"}
              text={"Javascript"}
              colour={"green"}
            />
          </div>
          <div className="item">
            <StackElement
              icon={"./Figma.png"}
              text={"Figma"}
              colour={"purple"}
            />
          </div>
          <div className="item">
            <StackElement icon={"./Html.png"} text={"HTML"} colour={"green"} />
          </div>
          <div className="item">
            <StackElement
              icon={"./Github.png"}
              text={"GitHub"}
              colour={"purple"}
            />
          </div>
        </div>
      </div>

      {/* Dotted Background */}
      <div className="absolute w-full h-full flex justify-center items-center -translate-y-[475px]">
        <img src="./greendotsbackground.png" />
      </div>

      {/* Slider 2 */}
      <div className="w-[200%] h-[150px] overflow-hidden relative z-10">
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
