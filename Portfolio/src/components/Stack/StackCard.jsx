import { useState } from "react";

export default function StackCard({ icon, text }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="font-poppins text-white scroll_animate"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="xl:min-w-[128px] xl:min-h-[120px] lg:min-w-[100px] lg:min-h-[92px] md:min-w-[88px] md:min-h-[80px] 2xs:min-w-[68px] 2xs:min-h-[60px] flex items-center justify-center border-2 transition-all  ease-in-out duration-300 border-primary_purple hover:cursor-pointer hover:border-primary_green hover:scale-[110%]"
        style={{ boxShadow: !hover ? "4px 4px #9747FF" : "4px 4px #4CFFB4" }}
      >
        <img
          src={icon}
          className={`lg:size-[60px] md:size-[50px] 2xs:size-[30px] m-4 ${
            hover && "hidden"
          }`}
        />
        <span
          className={`${
            !hover && "hidden"
          } xl:text-[20px] lg:text-[18px] md:text-[14px] 2xs:text-[10px]`}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
