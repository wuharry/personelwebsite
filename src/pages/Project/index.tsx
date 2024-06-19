/** @format */

import { FunctionComponent, useEffect, useState } from "react";
import { NavigationBar } from "../../compoment";
import ProjectCard from "../../compoment/ProjectCard";
import clsx from "clsx";
import { Project } from "../../compoment/ProjectCard/type";
import day1 from "../../assets/day1.png";

const WorkPage: FunctionComponent = () => {
  return (
    <div className="flex bg-slate-700 flex-col items-start justify-start w-full h-full min-h-screen overflow-y-scroll">
      <NavigationBar />
      <section className={clsx("flex w-full mt-16 mb-10 space-y-10 px-4")}>
        <ProjectCard
          className=""
          label="Drum Kit"
          description=""
          image={day1}
          link="https://wuharry.github.io/day1/"
        />
      </section>
    </div>
  );
};

export default WorkPage;
