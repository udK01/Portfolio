import ProjectCard from "./ProjectCard";
import TextBar from "../TextBar";

export default function Projects() {
  return (
    <section id="PROJECTS" className="h-screen flex flex-col justify-center">
      <div className="w-full flex justify-center mb-[150px]">
        <TextBar
          text={"PROJECTS"}
          shadow={"bottom_right_purple"}
          extra={"z-20"}
        />
      </div>

      <div className="w-full flex justify-center gap-10 overflow-hidden">
        <ProjectCard src={"./Projects/project1.png"} />
        <ProjectCard src={"./Projects/project2.png"} />
        <ProjectCard src={"./Projects/project3.png"} />
        <ProjectCard src={"./Projects/project4.png"} />
        <ProjectCard src={"./Projects/project5.png"} />
      </div>
    </section>
  );
}
