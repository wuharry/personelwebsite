import { FunctionComponent, useEffect, useState } from "react";
import { JOBEXPERIENCEOBJ } from "../../types";
import clsx from "clsx";
import JobExperience from "../JobExperienceCard";

interface TimeLineProps {
  // jobExperience: JOBEXPERIENCEOBJ[];
}

const EXPERIENCELIST: JOBEXPERIENCEOBJ[] = [
  {
    companyName: "testcompany",
    jobTitle: "MESFrontend Engineer",
    time: "2022/10-2023/05",
    projectName: "testProject",
    description: ["test1", "test2", "test3"],
  },
  {
    companyName: "testcompany2",
    jobTitle: "Frontend Engineer",
    time: "2023/05-2023/10",
    projectName: "testProject2",
    description: ["test4", "test5", "test6"],
  },
  {
    companyName: "testcompany3",
    jobTitle: "Frontend Engineer",
    time: "2023/10-2024/12",
    projectName: "testProject3",
    description: ["test7", "test8", "test9"],
  },
];
const TimeLine: FunctionComponent<TimeLineProps> = () => {
  const [animetion, setAnimetion] = useState(false);
  useEffect(() => {
    setAnimetion(true);
    return () => {
      // setTimeout(() => setAnimetion(false), 7000);
    };
  }, []);
  return (
    <div
      className={clsx(
        `transition-all ease-in-out duration-1000`,
        animetion ? " max-h-max" : "max-h-0 overflow-hidden",
        "border-l-4  border-gray-300 ml-3 mt-3 py-10 space-y-14 w-4/5"
      )}
    >
      <div
        className={clsx(`relative 
        justify-between w-full z-10 `)}
      >
        {EXPERIENCELIST.map((experience, index) => (
          <div
            className={clsx(`flex justify-between items-center p-6`)}
            key={`${experience.companyName}-${experience.time}-${index}`}
          >
            <div
              className={clsx(
                `absolute border-2 border-white bg-blue-300 top-[${
                  index + 1
                }8rem] -left-[0.8rem] h-6 w-6 rounded-full
                ${animetion ? `animate-jump-in animate-delay-[1500ms]` : ``} 
                `
              )}
            >
              {/* 圓點 */}
            </div>
            <JobExperience jobexperience={experience} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
