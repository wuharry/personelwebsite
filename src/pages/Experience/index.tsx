/** @format */

import { FunctionComponent, useEffect, useState } from "react";
import { NavigationBar } from "../../compoment";
import TimeLine from "../../compoment/TimeLine";
import clsx from "clsx";
interface ExperienceProps {}

const Experience: FunctionComponent<ExperienceProps> = () => {
  const [animetion, setAnimetion] = useState(true);
  useEffect(() => {
    setAnimetion(false);
    return () => {};
  }, []);

  return (
    <div className="flex bg-slate-700 flex-col items-start justify-start w-full h-full min-h-screen">
      <NavigationBar />
      <section
        className="transition-all ease-in-out duration-1000 mt-12 ml-6 w-full overflow-y-auto"
        style={{
          height: animetion ? "0" : "100vh",
          minHeight: animetion ? "auto" : "100%",
          flexGrow: animetion ? "initial" : 1,
        }}
      >
        <TimeLine />
      </section>
    </div>
  );
};

export default Experience;
