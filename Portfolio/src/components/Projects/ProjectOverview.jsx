import { IoMdClose } from "react-icons/io";

export default function ProjectOverview({
  projects,
  selectedProject,
  setSelectedProject,
}) {
  const filteredProjects = [...projects].filter(
    (p) => p.src !== selectedProject.src
  );

  const projectInfo = [
    {
      id: 1,
      title: "Laravel Blog Site",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia est earum, doloribus odio molestiae dolor perspiciatis! Assumenda quos minus expedita, at enim dolorum, accusantium et vitae, deleniti amet libero.",
    },
    {
      id: 2,
      title: "Unity Upgraded Frogger",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia est earum, doloribus odio molestiae dolor perspiciatis! Assumenda quos minus expedita, at enim dolorum, accusantium et vitae, deleniti amet libero.",
    },
    {
      id: 3,
      title: "Expense Tracker App",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia est earum, doloribus odio molestiae dolor perspiciatis! Assumenda quos minus expedita, at enim dolorum, accusantium et vitae, deleniti amet libero.",
    },
    {
      id: 4,
      title: "Manga Site",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia est earum, doloribus odio molestiae dolor perspiciatis! Assumenda quos minus expedita, at enim dolorum, accusantium et vitae, deleniti amet libero.",
    },
    {
      id: 5,
      title: "Scroll Animate Website",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quia est earum, doloribus odio molestiae dolor perspiciatis! Assumenda quos minus expedita, at enim dolorum, accusantium et vitae, deleniti amet libero.",
    },
  ];

  const selectedInfo = [...projectInfo].filter(
    (p) => p.id === selectedProject.id
  );

  return (
    <div className="w-full flex justify-center gap-10">
      {/* Projects Sidebar */}
      <div className="flex flex-col space-y-[20px]">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="size-[150px] filter grayscale transition-all duration-500 ease-in-out hover:grayscale-0 hover:filter-none hover:cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.src}
              className="relative w-full h-full object-cover border-2 border-primary_purple"
            />
          </div>
        ))}
      </div>
      {/* Select Project Image */}
      <div className="w-[350px] h-[660px]">
        <img
          src={selectedProject.src}
          className="relative w-full h-full object-cover border-2 border-primary_purple"
        />
      </div>
      <div>
        <div className="w-[674px] mb-10 flex">
          <div className="w-full flex justify-between items-center">
            <div className="font-poppins font-black text-[40px] text-white">
              {selectedInfo[0].title}
            </div>
            <div
              className="size-[50px] border-2 border-primary_purple rounded-full flex justify-center items-center"
              onClick={() => setSelectedProject(null)}
            >
              <IoMdClose className="size-[30px] text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
