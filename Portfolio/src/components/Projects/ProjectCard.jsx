import "../utils/projects.css";

export default function ProjectCard({ src }) {
  return (
    <div className="w-[200px] h-[300px] border-2 border-primary_purple filter grayscale transition-all duration-500 ease-[cubic-bezier(0.87,-1.38,0.3,1.54)] hover:w-[400px] hover:grayscale-0 hover:filter-none hover:cursor-pointer">
      <img src={src} className="relative w-full h-full object-cover" />
    </div>
  );
}
