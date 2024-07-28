import { BsChevronDoubleDown } from "react-icons/bs";

export default function ScrollButton() {
  return (
    <div className="flex justify-center items-center size-[55px] rounded-full bg-[#242020] ring-1 ring-primary_green fixed right-0 bottom-0 mr-[32px] mb-[32px]">
      <BsChevronDoubleDown className="size-[35px] text-white" />
    </div>
  );
}
