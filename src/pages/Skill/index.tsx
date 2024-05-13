/** @format */

import { FunctionComponent, useEffect, useState } from "react";
import { NavigationBar } from "../../compoment";
import clsx from "clsx";
interface ExperienceProps {}

const Skill: FunctionComponent<ExperienceProps> = () => {
  const [animetion, setAnimetion] = useState(false);
  useEffect(() => {
    setAnimetion(false);
    return () => {
      setTimeout(() => setAnimetion(true), 500);
    };
  }, []);

  return (
    <div className="flex bg-slate-700 flex-col items-start justify-start w-screen !h-auto min-h-screen overflow-y-scroll">
      <NavigationBar />
      <section className={clsx(`   `)}></section>
    </div>
  );
};

export default Skill;
