import "./utils/hero.css";
import "./utils/button.css";

export default function Hero() {
  return (
    <section id="HERO">
      <div className="flex flex-col justify-center items-center w-full h-screen space-y-20">
        {/* Name & Occupation */}
        <div className="font-robot font-black text-[80px] z-10 rise-up-0 opacity-0">
          <div className="text-white">Dominik Muranyi</div>
          <div className="flex pl-5 items-center -mt-[30px]">
            <div className="size-[40px] border-l-2 border-b-2 border-primary_purple -mt-[30px] mr-[10px]" />
            <div className="text-primary_green">Full-Stack Developer</div>
          </div>
        </div>

        {/* "Slogan" */}
        <div className="font-robot font-semibold text-[32px] z-10 flex flex-col items-center rise-up-1 opacity-0 -mt-[400px]">
          <div className="text-white">
            Turning Ideas into Digital Realities
            <span className="text-primary_purple">,</span>
          </div>
          <div className="text-[#7E7E7E] text-[24px]">
            Building <span className="text-primary_green">Your </span>Web
            Solutions <span className="text-primary_green">Together</span>
            <span className="text-primary_purple">.</span>
          </div>
        </div>

        {/* Get In Touch Button */}
        <div
          className={`gradient-border font-robot font-black hover:cursor-pointer text-[28px] hover:text-primary_green transition-colors duration-300 rise-up-2 opacity-0`}
        >
          Get in Touch.
        </div>

        {/* Background */}
        <div className="absolute w-full h-full flex items-center justify-center mt-[140px] opacity-0 circular-reveal">
          <img
            src="./Backgrounds/squarebackground.png"
            className="w-[85%] h-[85%] absolute"
          />
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
