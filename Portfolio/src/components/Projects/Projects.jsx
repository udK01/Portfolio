import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      {/* Title */}
      <div className="w-full flex justify-center my-[150px]">
        <TextBar
          text={"PROJECTS"}
          shadow={"bottom_right_purple"}
          extra={"z-20"}
        />
      </div>

      {/* Background Diamonds */}
      <div className="w-full h-full absolute flex justify-center items-center">
        <img
          src="./Backgrounds/diamonds.png"
          className="h-[90%] translate-y-[125px]"
        />
      </div>

      {/* Cards */}
      <div className="w-full h-full z-10">
        <TransitionGroup>
          {selectedProject === null ? (
            <CSSTransition key="project-list" classNames="fade" timeout={500}>
              <div className="w-full flex justify-center gap-10 overflow-hidden">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                  >
                    <ProjectCard src={project.src} />
                  </div>
                ))}
              </div>
            </CSSTransition>
          ) : (
            <CSSTransition
              key="project-overview"
              classNames="fade"
              timeout={500}
            >
              <ProjectOverview
                projects={projects}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
              />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </section>
  );
}
