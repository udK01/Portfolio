import TextBar from "./TextBar";

export default function Contact() {
  const inputStyle =
    "w-[80%] bg-transparent focus:outline-none text-white font-poppins font-extralight text-[30px] pl-3 border-l-2 border-b-2 border-primary_purple";

  return (
    <section
      id="CONTACT"
      className="flex flex-col justify-center space-y-[150px] pb-[150px]"
    >
      <div className="w-full flex justify-center scroll_animate">
        <TextBar text={"CONTACT"} shadow={"top_left_green"} extra={"z-20"} />
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center w-[670px] h-[750px] bg-[#131010] p-5 space-y-[50px]">
          <input placeholder={"Enter Your Name"} className={inputStyle} />
          <input placeholder={"Enter Your Email"} className={inputStyle} />
          <textarea
            placeholder={"Enter Your Message"}
            className={`${inputStyle} max-h-[200px]`}
          />
          <div
            className={`gradient-border w-fit px-20 font-robot font-black hover:cursor-pointer text-[28px] hover:text-primary_green`}
          >
            Send.
          </div>
        </div>
      </div>
    </section>
  );
}
