import TextBar from "../TextBar";
import StackElement from "./StackElement";

import "../utils/stack.css";

export default function Stack() {
  const slider1 = [
    { icon: "./Icons/React.png", text: "React", colour: "purple" },
    { icon: "./Icons/Js.png", text: "Javascript", colour: "green" },
    { icon: "./Icons/Figma.png", text: "Figma", colour: "purple" },
    { icon: "./Icons/Html.png", text: "HTML", colour: "green" },
    { icon: "./Icons/Github.png", text: "GitHub", colour: "purple" },
    { icon: "./Icons/React.png", text: "React", colour: "green" },
    { icon: "./Icons/Js.png", text: "Javascript", colour: "purple" },
    { icon: "./Icons/Figma.png", text: "Figma", colour: "green" },
    { icon: "./Icons/Html.png", text: "HTML", colour: "purple" },
    { icon: "./Icons/Github.png", text: "GitHub", colour: "green" },
  ];

  const slider2 = [
    { icon: "./Icons/MySQL.png", text: "MySQL", colour: "purple" },
    { icon: "./Icons/Docker.png", text: "Docker", colour: "green" },
    { icon: "./Icons/Tailwind.png", text: "Tailwind", colour: "purple" },
    { icon: "./Icons/Node.png", text: "Node", colour: "green" },
    { icon: "./Icons/VsCode.png", text: "VsCode", colour: "purple" },
    { icon: "./Icons/MySQL.png", text: "MySQL", colour: "green" },
    { icon: "./Icons/Docker.png", text: "Docker", colour: "purple" },
    { icon: "./Icons/Tailwind.png", text: "Tailwind", colour: "green" },
    { icon: "./Icons/Node.png", text: "Node", colour: "purple" },
    { icon: "./Icons/VsCode.png", text: "VsCode", colour: "green" },
  ];

  return (
    <section
      id="STACK"
      className="overflow-hidden h-screen flex flex-col justify-center"
    >
      <div className="w-full flex justify-center mb-[150px]">
        <TextBar
          text={"STACK"}
          shadow={"top_right_green"}
          extra={"z-10 mt-[10px]"}
        />
      </div>

      {/* Slider 1 */}
      <div className="w-[200%] h-[150px] overflow-hidden relative mb-[18px] z-10">
        <div className="w-[200%] flex items-center h-full absolute left-0 animate_left">
          {slider1.map((element, index) => (
            <StackElement
              key={index}
              icon={element.icon}
              text={element.text}
              colour={element.colour}
            />
          ))}
        </div>
      </div>

      {/* Dotted Background */}
      <div className="absolute w-full h-[20%] flex justify-center items-center translate-y-[75px]">
        <img src="./Backgrounds/greendotsbackground.png" />
      </div>

      {/* Slider 2 */}
      <div className="w-[200%] h-[150px] overflow-hidden relative z-10">
        <div className="w-[200%] flex items-center h-full absolute left-0 animate_right">
          {slider2.map((element, index) => (
            <StackElement
              key={index}
              icon={element.icon}
              text={element.text}
              colour={element.colour}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
