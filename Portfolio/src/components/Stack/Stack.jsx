import TextBar from "../TextBar";
import StackElement from "./StackElement";

export default function Stack() {
  return (
    <section className="space-y-[150px]">
      <div className="w-full flex justify-center">
        <TextBar text={"STACK"} shadow={"top_right_green"} />
      </div>
      <div className="w-full flex justify-center">
        <StackElement icon={"./React.png"} />
      </div>
    </section>
  );
}
