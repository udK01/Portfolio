import TextBar from "./TextBar";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div>
          <TextBar
            text={"DOMINIK"}
            shadow={"bottom_right_purple"}
            extra={"mr-[200px]"}
          />
        </div>
        <div>
          <TextBar text={"MURANYI"} shadow={"bottom_right_green"} />
        </div>
        <div>
          <TextBar
            text={"DEVELOPER"}
            shadow={"bottom_left_purple"}
            extra={"mr-[200px]"}
          />
        </div>
      </div>
    </section>
  );
}
