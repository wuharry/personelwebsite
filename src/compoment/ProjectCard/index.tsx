import { FC, useEffect } from "react";
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
  useEffect(() => {
    console.log(link, image);
  }, []);
  return (
    <div className={clsx("flex", className)}>
      <div className="w-20 h-20 overflow-hidden flex items-center justify-center">
        <img src={image} alt={label} className="max-w-full max-h-full" />
      </div>
      <div className={clsx("flex flex-col items-center justify-center")}>
        <h2>{label}</h2>
        <div
          className={clsx(
            "hidden group-hover:block text-white mt-2 text-center"
          )}
        >
          <p>{description}</p>
          <Button
            onClickEvent={() => {}}
            className={null}
            type={null}
            children={undefined}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
