import { FC, useState } from "react";
import clsx from "clsx";
import { Project } from "./type";
import Button from "../Button/Button";

const ProjectCard: FC<Project> = ({
  label,
  link,
  description,
  image,
  className,
  size,
}) => {
  const [openDescription, setOpenDescription] = useState(false);

  const handleMouseEnter = () => {
    setOpenDescription(true);
  };

  const handleMouseLeave = () => {
    setOpenDescription(false);
  };

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className={clsx(
        "relative flex flex-col w-80 h-96 bg-slate-600 mt-0 rounded-md",
        "min-w-[20rem] sm:min-w-[24rem]",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-72 overflow-hidden flex flex-col justify-center p-4 ">
        <img
          src={image}
          alt={label}
          className="w-full h-4/5 rounded-md absolute top-50 left-0"
        />
        {/* hover跳上來區域 */}
        <div
          className={clsx(
            "group-hover:block text-white mt-2 text-center w-full ",
            "absolute flex justify-center items-center flex-col gap-2",
            "bg-gradient-to-t from-white to-transparent bottom-7 left-0",
            " transition-all duration-300 ease-in-out rounded-b-lg",
            openDescription ? "h-full opacity-100" : "h-0 opacity-0"
          )}
        >
          <Button
            onClickEvent={handleClick}
            className="text-red-700"
            type={null}
          >
            跳轉
          </Button>
        </div>
      </div>
      <div
        className={clsx("flex flex-col items-center justify-center mb  -1.5")}
      >
        <h2 className="text-white text-2xl">{label}</h2>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
