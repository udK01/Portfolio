import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  const style =
    "size-[60px] text-white bg-primary_gray hover:text-primary_purple hover:cursor-pointer transition-colors duration-300";

  return (
    <div className="flex justify-center items-center h-[117px] mt-10 w-full">
      {/* Icons */}
      <div className="flex gap-[50px] z-10">
        <CiMail className={style} title="dominik.muranyi@gmail.com" />
        <FaDiscord className={style} title="udKay" />
        <FaLinkedin className={style} title="Dominik Muranyi" />
        <FaGithub className={style} title="udK01" />
      </div>
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-primary_green to-primary_purple" />
    </div>
  );
}
