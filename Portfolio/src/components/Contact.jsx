import TextBar from "./TextBar";

export default function Contact() {
  function inputField() {
    return <input className="" />;
  }

  return (
    <section
      id="CONTACT"
      className="flex flex-col justify-center space-y-[150px]"
    >
      <div className="w-full flex justify-center scroll_animate">
        <TextBar text={"CONTACT"} shadow={"top_left_green"} extra={"z-20"} />
      </div>

      <div className="flex justify-center">
        <div className="w-[670px] h-[750px] bg-[#131010]"></div>
      </div>
    </section>
  );
}
