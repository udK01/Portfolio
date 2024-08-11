import { useState } from "react";

export default function StackCard({ icon, text }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="font-poppins text-white text-[24px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="size-[120px] flex items-center justify-center border-2 transition-all ease-in-out duration-300 border-primary_purple hover:w-fit hover:px-6 hover:cursor-pointer hover:border-primary_green"
        style={{ boxShadow: !hover ? "4px 4px #9747FF" : "4px 4px #4CFFB4" }}
      >
        <img src={icon} className={`size-20 m-4 ${hover && "hidden"}`} />
        <span className={`${!hover && "hidden"}`}>{text}</span>
      </div>
    </div>
  );
}
