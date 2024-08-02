import { useState } from "react";

import ProjectOverview from "./ProjectOverview";
import ProjectCard from "./ProjectCard";
import TextBar from "../TextBar";

export default function Projects() {
  const projects = [
    { id: 1, src: "./Projects/project1.png" },
    { id: 2, src: "./Projects/project2.png" },
    { id: 3, src: "./Projects/project3.png" },
    { id: 4, src: "./Projects/project4.png" },
    { id: 5, src: "./Projects/project5.png" },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="PROJECTS" className="h-screen flex flex-col justify-center">
      <div className="w-full flex justify-center mb-[150px]">
        <TextBar
          text={"PROJECTS"}
          shadow={"bottom_right_purple"}
          extra={"z-20"}
        />
      </div>

      {selectedProject === null ? (
        <div className="w-full flex justify-center gap-10 overflow-hidden">
          {projects.map((project) => (
            <div key={project.id} onClick={() => setSelectedProject(project)}>
              <ProjectCard src={project.src} />
            </div>
          ))}
        </div>
      ) : (
        <ProjectOverview
          projects={projects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </section>
  );
}
