import { FunctionComponent } from "react";
import { NavigationBar } from "../../compoment";
import { JOBEXPERIENCEOBJ } from "../../types";
import JobExperience from "../../compoment/JobExperienceCard";
import TimeLine from "../../compoment/TimeLine";
interface ExperienceProps {}

const Experience: FunctionComponent<ExperienceProps> = () => {
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
      time: "2023/05-2022/10",
      projectName: "testProject2",
      description: ["test4", "test5", "test6"],
    },
  ];

  return (
    <div className="flex bg-slate-700 flex-col items-start justify-start w-full h-full">
      <NavigationBar />
      <section className="mt-12 ml-6 w-10/12 h-auto ">
        <TimeLine />
      </section>
    </div>
  );
};

export default Experience;
