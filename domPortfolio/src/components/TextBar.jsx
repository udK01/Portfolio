export default function TextBar({ text, shadow, bgGreen }) {
  return (
    <div
      className={`${shadow} ${
        bgGreen ? "bg-primary_green" : "bg-primary_purple text-white"
      } w-fit font-black text-[60px] py-27 px-14 font-poppins tracking-[20px]`}
    >
      {text}
    </div>
  );
}
