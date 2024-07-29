import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

import "./utils/sidebar.css";

export default function SideBar() {
  const elements = [
    {
      icon: (
        <FaLinkedin className="size-[35px] w-full pr-2 hover:cursor-pointer hover:text-primary_purple transition-colors duration-300" />
      ),
      link: "https://www.linkedin.com/in/dominik-muranyi-07931827b/",
    },
    {
      icon: (
        <FaGithub className="size-[35px] w-full pr-2 hover:cursor-pointer hover:text-primary_purple transition-colors duration-300" />
      ),
      link: "https://github.com/udK01",
    },
    {
      icon: (
        <FaFacebook className="size-[35px] w-full pr-2 hover:cursor-pointer hover:text-primary_purple transition-colors duration-300" />
      ),
      link: "https://www.facebook.com/dominik.muranyi.5/?locale=en_GB",
    },
  ];

  return (
    <div className="absolute h-screen flex items-center">
      <div className="fixed w-[80px] h-[250px] bg-[#242020] space-y-[30px] flex flex-col justify-center rounded-r-[45px] sidebar-move">
        {elements.map((element, index) => (
          <a
            key={index}
            href={element.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white"
          >
            {element.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
