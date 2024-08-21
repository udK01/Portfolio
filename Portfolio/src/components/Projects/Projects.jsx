import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useEffect, useRef, useState } from "react";

import ProjectOverview from "./ProjectOverview";
import ProjectCard from "./ProjectCard";
import TextBar from "../TextBar";

import "../utils/projects.css";

export default function Projects() {
  const projects = [
    { id: 1, src: "./Projects/project1.png" },
    { id: 2, src: "./Projects/project2.png" },
    { id: 3, src: "./Projects/project3.png" },
    { id: 4, src: "./Projects/project4.png" },
    { id: 5, src: "./Projects/project5.png" },
  ];

  const [selectedProject, setSelectedProject] = useState({
    id: 1,
    src: "./Projects/project1.png",
  });

  const cardsRef = useRef(null);
  const overviewRef = useRef(null);

  function toggleView(showRef, hideRef) {
    if (showRef.current && hideRef.current) {
      hideRef.current.classList.toggle("hidden");
      showRef.current.classList.toggle("hidden");
      showRef.current.classList.add("fade");
      hideRef.current.classList.remove("fade");
      showRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }

  function changeToOverview() {
    toggleView(overviewRef, cardsRef);
  }

  function changeToCards() {
    toggleView(cardsRef, overviewRef);
  }

  return (
    <section
      id="PROJECTS"
      className={`h-full flex flex-col justify-center md:space-y-[80px] 2xs:space-y-[50px]`}
    >
      {/* Title */}
      <div className="w-full flex justify-center scroll_animate">
        <TextBar
          text={"PROJECTS"}
          shadow={"bottom_right_purple"}
          extra={"z-20"}
        />
      </div>

      {/* Cards */}
      <div className="w-full h-full z-10 scroll_animate">
        <div className="w-full flex justify-center">
          <div
            ref={cardsRef}
            className="w-full flex flex-wrap justify-center lg:gap-10 2xs:gap-5 overflow-hidden"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  changeToOverview();
                }}
              >
                <ProjectCard src={project.src} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={overviewRef} className="hidden z-10">
        <ProjectOverview
          projects={projects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          changeToCards={changeToCards}
        />
      </div>

      {/* Background Diamonds */}
      <div className={`w-full h-full absolute flex justify-center`}>
        <div className="w-full h-full repeat_diamonds opacity-35" />
        <div className="radial_gradient4" />
      </div>
    </section>
  );
}
