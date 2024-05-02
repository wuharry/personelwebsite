import { FunctionComponent } from "react";
import { JOBEXPERIENCEOBJ } from "../../types";
import clsx from "clsx";

interface jobExperienceProps {
  jobexperience: JOBEXPERIENCEOBJ;
}

const jobExperience: FunctionComponent<jobExperienceProps> = ({
  jobexperience,
}) => {
  const { companyName, jobTitle, time, projectName, description } =
    jobexperience;
  return (
    <div
      className={clsx(
        `block max-w-sm p-6 max-h-14 bg-white border border-gray-200 rounded-lg shadow`
      )}
    >
      <h5
        className={clsx(
          `mb-2 text-2xl font-bold tracking-tight text-gray-900 `
        )}
      >
        companyName:{companyName}
      </h5>
      <h4
        className={clsx(`mb-2 text-xl font-bold tracking-tight text-gray-900 `)}
      >
        jobTitle:{jobTitle}
      </h4>

      <p className={clsx(`font-normal text-gray-700 `)}>
        ProjectName:{projectName}
        contribution:
        {Array.isArray(description) ? (
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </p>
    </div>
  );
};

export default jobExperience;
