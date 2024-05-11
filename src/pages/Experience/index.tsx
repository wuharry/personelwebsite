/** @format */

import { FunctionComponent, useEffect, useState } from "react";
import { NavigationBar } from "../../compoment";
// import { JOBEXPERIENCEOBJ } from "../../types";
import TimeLine from "../../compoment/TimeLine";
import clsx from "clsx";
interface ExperienceProps {}

const Experience: FunctionComponent<ExperienceProps> = () => {
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
      <section
        className={clsx(
          ` transition-all ease-in-out duration-1000 mt-12 ml-6 w-full overflow-y-auto 
          ${!animetion ? `h-0` : ` h-screen minh-full flex-grow`}  `
        )}
      >
        <TimeLine />
      </section>
      {/* <div className={clsx(`w-full h-96`)}></div> */}
    </div>
  );
};

export default Experience;
