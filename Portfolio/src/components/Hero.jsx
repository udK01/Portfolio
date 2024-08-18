import "./utils/hero.css";
import "./utils/button.css";

export default function Hero() {
  return (
    <section id="HERO">
      <div className="flex flex-col justify-center items-center w-full 2xs:h-[65vh] md:h-[80vh] md:space-y-20 2xs:space-y-10">
        {/* Name & Occupation */}
        <div className="font-robot font-black lg:text-[80px] md:text-[60px] 2xs:text-[30px] z-10 rise-up-0 opacity-0">
          <div className="text-white">Dominik Muranyi</div>
          <div className="flex pl-5 items-center 2xs:-mt-[15px] md:-mt-[30px]">
            <div className="lg:size-[40px] md:size-[30px] 2xs:size-[15px] border-l-2 border-b-2 border-primary_purple 2xs:-mt-[15px] md:-mt-[30px] mr-[10px]" />
            <div className="text-primary_green">Full-Stack Developer</div>
          </div>
        </div>

        {/* "Slogan" */}
        <div className="font-robot font-semibold lg:text-[32px] md:text-[26px] 2xs:text-[20px] z-10 flex flex-col items-center rise-up-1 opacity-0 2xs:-mt-[200px] lg:-mt-[400px]">
          <div className="text-white">
            Turning Ideas into Digital Realities
            <span className="text-primary_purple">,</span>
          </div>
          <div className="text-[#7E7E7E] lg:text-[24px] md:text-[18px] 2xs:text-[16px]">
            Building <span className="text-primary_green">Your </span>Web
            Solutions <span className="text-primary_green">Together</span>
            <span className="text-primary_purple">.</span>
          </div>
        </div>

        {/* Get In Touch Button */}
        <div
          className={`gradient-border font-robot font-black hover:cursor-pointer lg:text-[28px] md:text-[20px] 2xs:text-[14px] hover:text-primary_green transition-colors duration-300 rise-up-2 opacity-0`}
        >
          Get in Touch.
        </div>

        {/* Background */}
        <div className="absolute w-full 2xs:h-[50vh] md:h-[80vh] opacity-0 circular-reveal pb-[150px]">
          <div className="w-full 2xs:h-[45vh] md:h-[75vh] repeat_squares opacity-35" />
          <div className="w-full 2xs:h-[45vh] md:h-[75vh] radial_gradient z-10" />
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="absolute z-10 w-full h-screen circular-reveal opacity-0 mt-10">
          <Spline scene="https://prod.spline.design/Tr9fJ1rZOicDY-Y1/scene.splinecode" />
        </div> */
}

{
  /* <TextBar
          text={"DOMINIK"}
          shadow={"top_left_purple"}
          direction={"left"}
          extra={"-translate-x-[50px] z-10 opacity-0"}
        />
        <TextBar
          text={"MURANYI"}
          shadow={"bottom_right_green"}
          direction={"right"}
          extra={"translate-x-[25px] z-10 opacity-0"}
        />
        <TextBar
          text={"DEVELOPER"}
          shadow={"bottom_left_purple"}
          direction={"left"}
          extra={"-translate-x-[50px] z-10 opacity-0"}
        /> */
}
