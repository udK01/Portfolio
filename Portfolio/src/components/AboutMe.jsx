import TextBar from "./TextBar";

import "./utils/aboutme.css";

export default function AboutMe() {
  return (
    <section className="h-screen">
      {/* Title */}
      <div className="w-full flex justify-center scroll_animate mb-[150px]">
        <TextBar text={"ABOUT ME"} shadow={"bottom_right_green"} />
      </div>

      {/* Sub-Title */}

      {/* Paragraphs */}
      <div className="w-[60%] mx-auto font-poppins text-white text-[30px]">
        <div className="scroll_animate mb-10">
          I am a motivated and versatile individual with a{" "}
          <span className="text-primary_green">passion for learning</span> and
          delivering high-quality results. Eager to take on new challenges, I
          approach every project with a positive attitude and a{" "}
          <span className="text-primary_green">growth mindset</span>, always
          striving to make meaningful contributions.
        </div>
        <div className="scroll_animate">
          Although I may currently lack extensive professional experience, I’ve
          had valuable opportunities to{" "}
          <span className="text-primary_green">collaborate with teams</span> and
          contribute to impactful projects. I am ready to{" "}
          <span className="text-primary_green">learn</span>,{" "}
          <span className="text-primary_green">adapt</span>, and{" "}
          <span className="text-primary_green">grow</span>, bringing my
          enthusiasm and dedication to every task.
        </div>
      </div>
    </section>
  );
}
