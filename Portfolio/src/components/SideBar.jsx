import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

export default function SideBar() {
  const elements = [
    <FaLinkedin className="size-[35px] w-full pr-2" />,
    <FaGithub className="size-[35px] w-full pr-2" />,
    <FaDiscord className="size-[35px] w-full pr-2" />,
  ];

  return (
    <div className="absolute h-screen flex items-center">
      <div className="fixed w-[80px] h-[250px] bg-[#242020] space-y-[30px] flex flex-col justify-center rounded-r-[45px]">
        {elements.map((element, index) => (
          <div key={index} className="text-white">
            {element}
          </div>
        ))}
      </div>
    </div>
  );
}
