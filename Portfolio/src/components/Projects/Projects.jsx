import TextBar from "../TextBar";

export default function Projects() {
  return (
    <section>
      <div className="w-full flex justify-center mb-[150px]">
        <TextBar
          text={"PROJECTS"}
          shadow={"bottom_right_purple"}
          extra={"z-20"}
        />
      </div>

      <div className="w-full flex justify-center gap-10"></div>
    </section>
  );
}
