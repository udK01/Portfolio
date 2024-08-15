import TextBar from "./TextBar";
import StackRow from "./Stack/StackRow";

import "./utils/aboutme.css";

export default function AboutMe() {
  const front = [
    { icon: "./Icons/React.png", text: "React" },
    { icon: "./Icons/Tailwind.png", text: "Tailwind" },
    { icon: "./Icons/Js.png", text: "JavaScript" },
    { icon: "./Icons/Html.png", text: "HTML" },
  ];

  const back = [
    { icon: "./Icons/Laravel.png", text: "Laravel" },
    { icon: "./Icons/MySQL.png", text: "MySQL" },
    { icon: "./Icons/Node.png", text: "Node" },
    { icon: "./Icons/Php.png", text: "Php" },
  ];

  const other = [
    { icon: "./Icons/Unity.png", text: "Unity" },
    { icon: "./Icons/Trello.png", text: "Trello" },
    { icon: "./Icons/Github.png", text: "GitHub" },
    { icon: "./Icons/Figma.png", text: "Figma" },
    { icon: "./Icons/Docker.png", text: "Docker" },
    { icon: "./Icons/VsCode.png", text: "VsCode" },
  ];

  return (
    <section id="ABOUT ME" className="relative">
      {/* Background */}
      <div className="absolute w-full h-full z-0 overflow-hidden">
        <div className="absolute w-[20%] h-[16%] repeat_purple_dots translate-y-[100px] translate-x-[100px]" />
        <div className="absolute w-[15%] h-[30%] repeat_purple_dots translate-y-[400px] translate-x-[1400px]" />
        <div className="absolute w-[10%] h-[20%] repeat_green_dots_1 translate-y-[700px] translate-x-[300px]" />
      </div>

      <div className="space-y-[150px]">
        {/* Title */}
        <div className="w-full flex justify-center scroll_animate mb-[150px] z-20 relative">
          <TextBar text={"ABOUT ME"} shadow={"bottom_right_green"} />
        </div>

        <div>
          {/* Sub-Title */}
          <div className="font-robot font-black text-[60px] text-primary_green ml-[20%] z-20 relative scroll_animate">
            Who am I?
          </div>

          {/* Paragraphs */}
          <div className="w-[60%] mx-auto font-poppins text-white text-[30px] relative z-20">
            <div className="scroll_animate mb-10">
              I am a motivated and versatile individual with a{" "}
              <span className="text-primary_green">passion for learning</span>{" "}
              and delivering high-quality results. Eager to take on new
              challenges, I approach every project with a positive attitude and
              a <span className="text-primary_green">growth mindset</span>,
              always striving to make meaningful contributions.
            </div>
            <div className="scroll_animate">
              Although I may currently lack extensive professional experience,
              I’ve had valuable opportunities to{" "}
              <span className="text-primary_green">collaborate with teams</span>{" "}
              and contribute to impactful projects. I am ready to{" "}
              <span className="text-primary_green">learn</span>,{" "}
              <span className="text-primary_green">adapt</span>, and{" "}
              <span className="text-primary_green">grow</span>, bringing my
              enthusiasm and dedication to every task.
            </div>
          </div>
        </div>

        {/* Stack  Rows */}
        <div className="space-y-[32px] mt-[32px] relative z-20">
          <div className="flex justify-center gap-40">
            <StackRow text={"Front End"} stack={front} />
            <StackRow text={"Back End"} stack={back} />
          </div>
          <StackRow text={"Others"} stack={other} />
        </div>
      </div>
    </section>
  );
}
