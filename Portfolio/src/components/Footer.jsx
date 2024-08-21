import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  const style =
    "xl:size-[60px] md:size-[50px] 2xs:size-[40px] text-white bg-primary_gray hover:text-primary_purple hover:cursor-pointer transition-colors duration-300";

  return (
    <div className="flex justify-center items-center h-[117px] mt-10 w-full">
      {/* Icons */}
      <div className="flex gap-[50px] z-10">
        <CiMail className={style} title="dominik.muranyi.dev@gmail.com" />
        <FaDiscord className={style} title="udKay" />
        <a href="https://www.linkedin.com/in/dominik-muranyi-07931827b/">
          <FaLinkedin className={style} title="Dominik Muranyi" />
        </a>
        <a href="https://github.com/udK01">
          <FaGithub className={style} title="udK01" />
        </a>
      </div>
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-primary_green to-primary_purple" />
    </div>
  );
}
