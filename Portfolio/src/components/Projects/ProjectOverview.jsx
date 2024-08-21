import { IoMdClose } from "react-icons/io";

import ProjectSlider from "./ProjectSlider";

export default function ProjectOverview({
  projects,
  selectedProject,
  setSelectedProject,
  changeToCards,
}) {
  const filteredProjects = [...projects].filter(
    (p) => p.src !== selectedProject.src
  );

  const projectInfo = [
    {
      id: 1,
      title: "Laravel Blog Site",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia est earum, doloribus odio molestiae dolor perspiciatis! Assumenda quos minus expedita, at enim dolorum, accusantium et vitae, deleniti amet libero.",
      tools: [
        {
          icon: "./Icons/Docker.png",
          text: "Docker",
          colour: "green",
          position: 1,
        },
        {
          icon: "./Icons/Html.png",
          text: "Html",
          colour: "purple",
          position: 2,
        },
        {
          icon: "./Icons/Github.png",
          text: "GitHub",
          colour: "green",
          position: 3,
        },
        {
          icon: "./Icons/MySQL.png",
          text: "MySQL",
          colour: "purple",
          position: 4,
        },
        {
          icon: "./Icons/Laravel.png",
          text: "Laravel",
          colour: "purple",
          position: 5,
        },
        {
          icon: "./Icons/Php.png",
          text: "php",
          colour: "green",
          position: 6,
        },
      ],
      video: "./Videos/project1.mp4",
    },
    {
      id: 2,
      title: "Unity Upgraded Frogger",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia est earum, doloribus odio molestiae dolor perspiciatis! Assumenda quos minus expedita, at enim dolorum, accusantium et vitae, deleniti amet libero.",
      tools: [
        {
          icon: "./Icons/Github.png",
          text: "GitHub",
          colour: "green",
          position: 1,
        },
        {
          icon: "./Icons/Unity.png",
          text: "Unity",
          colour: "purple",
          position: 2,
        },
        {
          icon: "./Icons/VsCode.png",
          text: "VsCode",
          colour: "green",
          position: 3,
        },
        {
          icon: "./Icons/Trello.png",
          text: "Trello",
          colour: "purple",
          position: 4,
        },
      ],
      video: "./Videos/project2.mp4",
    },
    {
      id: 3,
      title: "Expense Tracker App",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia est earum, doloribus odio molestiae dolor perspiciatis! Assumenda quos minus expedita, at enim dolorum, accusantium et vitae, deleniti amet libero.",
      tools: [
        {
          icon: "./Icons/Js.png",
          text: "Javascript",
          colour: "purple",
          position: 1,
        },
        {
          icon: "./Icons/Github.png",
          text: "GitHub",
          colour: "green",
          position: 2,
        },
        {
          icon: "./Icons/Html.png",
          text: "HTML",
          colour: "purple",
          position: 3,
        },
        {
          icon: "./Icons/React.png",
          text: "React",
          colour: "green",
          position: 4,
        },
        {
          icon: "./Icons/MySQL.png",
          text: "MySQL",
          colour: "purple",
          position: 5,
        },
        {
          icon: "./Icons/VsCode.png",
          text: "VsCode",
          colour: "green",
          position: 6,
        },
        {
          icon: "./Icons/Tailwind.png",
          text: "Tailwind",
          colour: "purple",
          position: 7,
        },
      ],
      video: "./Videos/project3.mp4",
    },
    {
      id: 4,
      title: "Manga Site",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia est earum, doloribus odio molestiae dolor perspiciatis! Assumenda quos minus expedita, at enim dolorum, accusantium et vitae, deleniti amet libero.",
      tools: [
        {
          icon: "./Icons/Docker.png",
          text: "Docker",
          colour: "green",
          position: 1,
        },
        {
          icon: "./Icons/Figma.png",
          text: "Figma",
          colour: "purple",
          position: 2,
        },
        {
          icon: "./Icons/Github.png",
          text: "GitHub",
          colour: "green",
          position: 3,
        },
        {
          icon: "./Icons/Html.png",
          text: "HTML",
          colour: "purple",
          position: 4,
        },
        {
          icon: "./Icons/Js.png",
          text: "Javascript",
          colour: "green",
          position: 5,
        },
        {
          icon: "./Icons/MySQL.png",
          text: "MySQL",
          colour: "purple",
          position: 6,
        },
        {
          icon: "./Icons/Node.png",
          text: "Node",
          colour: "green",
          position: 7,
        },
        {
          icon: "./Icons/React.png",
          text: "React",
          colour: "purple",
          position: 8,
        },
        {
          icon: "./Icons/Tailwind.png",
          text: "Tailwind",
          colour: "green",
          position: 9,
        },
        {
          icon: "./Icons/VsCode.png",
          text: "VsCode",
          colour: "purple",
          position: 10,
        },
      ],
      video: "./Videos/project4.mp4",
    },
    {
      id: 5,
      title: "Scroll Animate Website",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia est earum, doloribus odio molestiae dolor perspiciatis! Assumenda quos minus expedita, at enim dolorum, accusantium et vitae, deleniti amet libero.",
      tools: [
        {
          icon: "./Icons/Html.png",
          text: "HTML",
          colour: "green",
          position: 1,
        },
        {
          icon: "./Icons/Js.png",
          text: "Javascript",
          colour: "purple",
          position: 2,
        },
        {
          icon: "./Icons/VsCode.png",
          text: "VsCode",
          colour: "green",
          position: 3,
        },
        {
          icon: "./Icons/Github.png",
          text: "GitHub",
          colour: "purple",
          position: 4,
        },
        {
          icon: "./Icons/React.png",
          text: "React",
          colour: "green",
          position: 5,
        },
        {
          icon: "./Icons/Node.png",
          text: "Node",
          colour: "purple",
          position: 6,
        },
        {
          icon: "./Icons/Tailwind.png",
          text: "Tailwind",
          colour: "green",
          position: 7,
        },
      ],
      video: "./Videos/project5.mp4",
    },
  ];

  const selectedInfo = [...projectInfo].filter(
    (p) => p.id === selectedProject.id
  );

  return (
    <div className="w-full flex justify-center md:gap-10 2xs:gap-3 z-10">
      {/* Projects Sidebar */}
      <div className="flex flex-col space-y-[20px]">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="lg:size-[150px] md:size-[130px] 2xs:size-[100px] hover:cursor-pointer transition-colors duration-500 border-2 border-primary_purple hover:border-primary_green"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.src}
              className="relative w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* Select Project Image */}
      <div className="w-[350px] h-[660px] 2xs:hidden xl:block">
        <img
          src={selectedProject.src}
          className="relative w-full h-full object-cover border-2 border-primary_purple"
        />
      </div>
      <div>
        <div className="lg:w-[674px] md:w-[500px] 2xs:w-[300px] h-full max-h-[660px] flex flex-col justify-between">
          <div className="flex flex-col space-y-[18px]">
            {/* Title and Close Button */}
            <div className="w-full flex justify-between items-center">
              <div className="font-black font-robot lg:text-[50px] md:text-[40px] 2xs:text-[24px] text-white">
                {selectedInfo[0].title}
              </div>
              <div
                className="md:size-[50px] 2xs:size-[30px] border-2 border-primary_purple rounded-full flex justify-center items-center transition-colors duration-300 hover:bg-primary_purple hover:cursor-pointer"
                onClick={() => {
                  setSelectedProject({
                    id: 1,
                    src: "./Projects/project1.png",
                  });
                  changeToCards();
                }}
              >
                <IoMdClose className="size-[30px] text-white" />
              </div>
            </div>
            {/* Description */}
            <div className="w-full text-white font-robot text-[20px] line-clamp-4">
              {selectedInfo[0].desc}
            </div>
            {/* Scroller */}
            <ProjectSlider
              key={selectedInfo[0].id}
              items={selectedInfo[0].tools}
              width={"200px"}
              height={"60px"}
            />
          </div>

          {/* Video */}
          <div className="border-2 border-primary_purple">
            <video key={selectedInfo[0].id} className="w-full h-full" controls>
              <source src={selectedInfo[0].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
