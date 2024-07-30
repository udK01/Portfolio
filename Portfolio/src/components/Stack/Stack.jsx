import TextBar from "../TextBar";
import StackElement from "./StackElement";

export default function Stack() {
  return (
    <section>
      <div className="w-full flex justify-center">
        <TextBar text={"STACK"} shadow={"top_right_green"} />
      </div>
      <StackElement />
    </section>
  );
}
