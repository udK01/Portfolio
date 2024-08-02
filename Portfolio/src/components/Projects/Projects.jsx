import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";
import TextBar from "../TextBar";

export default function Projects() {
  const projects = [
    "./Projects/project1.png",
    "./Projects/project2.png",
    "./Projects/project3.png",
    "./Projects/project4.png",
    "./Projects/project5.png",
  ];

  const filteredProjects = [...projects];

  const [selectedProject, setSelectedProject] = useState();

  function handleClick(project) {
    // Set selected project and filter from list.
    setSelectedProject(project);
    filteredProjects.filter((p) => p !== project);
  }

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
        {projects.map((project, index) => (
          <div key={index} onClick={() => handleClick(project)}>
            <ProjectCard src={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
