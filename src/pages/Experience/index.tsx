import { FunctionComponent } from "react";
import { NavigationBar } from "../../compoment";

interface ExperienceProps {}

const Experience: FunctionComponent<ExperienceProps> = () => {
  return (
    <div className="flex bg-slate-700 flex-col items-center justify-center w-full h-full min-h-screen">
      <NavigationBar />
      <section className="mb-10"></section>
    </div>
  );
};

export default Experience;
