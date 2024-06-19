/** @format */

import { FunctionComponent, useEffect, useState } from "react";
import { NavigationBar } from "../../compoment";
import ProjectCard from "../../compoment/ProjectCard";
import clsx from "clsx";
import { Project } from "../../compoment/ProjectCard/type";
import day1 from "../../assets/day1.png";

const PROJECT_LIST: Project[] = [
  {
    label: "Drum Kit",
    link: "https://wuharry.github.io/day1/",
    description: "js 的 DOM 練習,當按下按鍵的時候",
    image: day1,
    className: "",
  },
];

const WorkPage: FunctionComponent = () => {
  return (
    <div className="flex bg-slate-700 flex-col items-start justify-start w-full h-full min-h-screen overflow-y-scroll">
      <NavigationBar />
      <section className={clsx("flex w-full mt-16 mb-10 space-y-10 px-4")}>
        {PROJECT_LIST.map((project) => (
          <ProjectCard
            key={`${project.label}-${project.link}`}
            className={project.className}
            label={project.label}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </section>
    </div>
  );
};

export default WorkPage;
