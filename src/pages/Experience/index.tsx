import { FunctionComponent } from "react";
import { NavigationBar } from "../../compoment";
import { JOBEXPERIENCEOBJ } from "../../types";
import {JobExperience} from "../../compoment";

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
  ];

  return (
    <div className="flex bg-slate-700 flex-col items-center justify-center w-full h-full min-h-screen">
      <NavigationBar />
      <section className="mb-10">
        {
          EXPERIENCELIST.map((experience)=>(
        <JobExperience jobexperience={experience} />
          ))
        }
      </section>
    </div>
  );
};

export default Experience;
