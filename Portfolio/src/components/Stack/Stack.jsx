import TextBar from "../TextBar";
import StackElement from "./StackElement";

import "../utils/stack.css";

export default function Stack() {
  return (
    <section className="overflow-hidden h-screen">
      <div className="w-full flex justify-center my-[150px]">
        <TextBar
          text={"STACK"}
          shadow={"top_right_green"}
          extra={"z-10 mt-[10px]"}
        />
      </div>

      {/* Slider 1 */}
      <div
        id="STACK"
        className="w-[200%] h-[150px] overflow-hidden relative mb-[18px] z-10"
      >
        <div className="w-[200%] flex items-center h-full absolute left-0 animate_left">
          <StackElement
            icon={"./Icons/React.png"}
            text={"React"}
            colour={"purple"}
          />
          <StackElement
            icon={"./Icons/Js.png"}
            text={"Javascript"}
            colour={"green"}
          />
          <StackElement
            icon={"./Icons/Figma.png"}
            text={"Figma"}
            colour={"purple"}
          />
          <StackElement
            icon={"./Icons/Html.png"}
            text={"HTML"}
            colour={"green"}
          />
          <StackElement
            icon={"./Icons/Github.png"}
            text={"GitHub"}
            colour={"purple"}
          />
          <StackElement
            icon={"./Icons/React.png"}
            text={"React"}
            colour={"green"}
          />
          <StackElement
            icon={"./Icons/Js.png"}
            text={"Javascript"}
            colour={"purple"}
          />
          <StackElement
            icon={"./Icons/Figma.png"}
            text={"Figma"}
            colour={"green"}
          />
          <StackElement
            icon={"./Icons/Html.png"}
            text={"HTML"}
            colour={"purple"}
          />

          <StackElement
            icon={"./Icons/Github.png"}
            text={"GitHub"}
            colour={"green"}
          />
        </div>
      </div>

      {/* Dotted Background */}
      <div className="absolute w-full h-[20%] flex justify-center items-center -translate-y-[150px]">
        <img src="./Backgrounds/greendotsbackground.png" />
      </div>

      {/* Slider 2 */}
      <div className="w-[200%] h-[150px] overflow-hidden relative z-10">
        <div className="w-[200%] flex items-center h-full absolute left-0 animate_right">
          <StackElement
            icon={"./Icons/MySQL.png"}
            text={"MySQL"}
            colour={"purple"}
          />
          <StackElement
            icon={"./Icons/Docker.png"}
            text={"Docker"}
            colour={"green"}
          />
          <StackElement
            icon={"./Icons/Tailwind.png"}
            text={"Tailwind"}
            colour={"purple"}
          />
          <StackElement
            icon={"./Icons/Node.png"}
            text={"Node"}
            colour={"green"}
          />
          <StackElement
            icon={"./Icons/VsCode.png"}
            text={"VsCode"}
            colour={"purple"}
          />
          <StackElement
            icon={"./Icons/MySQL.png"}
            text={"MySQL"}
            colour={"green"}
          />
          <StackElement
            icon={"./Icons/Docker.png"}
            text={"Docker"}
            colour={"purple"}
          />
          <StackElement
            icon={"./Icons/Tailwind.png"}
            text={"Tailwind"}
            colour={"green"}
          />
          <StackElement
            icon={"./Icons/Node.png"}
            text={"Node"}
            colour={"purple"}
          />
          <StackElement
            icon={"./Icons/VsCode.png"}
            text={"VsCode"}
            colour={"green"}
          />
        </div>
      </div>
    </section>
  );
}
