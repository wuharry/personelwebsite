/** @format */

import clsx from 'clsx';
import { FunctionComponent } from 'react';

import { JOBEXPERIENCEOBJ } from '../../types';

interface jobExperienceProps {
  jobexperience: JOBEXPERIENCEOBJ;
}

const JobExperience: FunctionComponent<jobExperienceProps> = ({
  jobexperience,
}) => {
  const { companyName, jobTitle, time, projectName, description } =
    jobexperience;

  return (
    <div
      className={clsx(
        `block max-w-md p-6 max-h-auto bg-white border border-gray-200 
        rounded-lg shadow-md shadow-white animate-fade-left animate-delay-[1000ms]`
      )}
    >
      <h4
        className={clsx(`mb-2 text-xl font-bold tracking-tight text-blue-500`)}
      >
        {time}
      </h4>
      <h5
        className={clsx(`mb-2 text-2xl font-bold  text-gray-900 tracking-wide`)}
      >
        companyName: {companyName}
      </h5>
      <h4
        className={clsx(`mb-2 text-xl font-bold tracking-tight text-gray-900`)}
      >
        jobTitle: {jobTitle}
      </h4>

      <p className={clsx(`font-normal text-gray-700 `)}>
        ProjectName: {projectName}
      </p>
      <p className={clsx(`font-normal text-gray-700 `)}>contribution:</p>
      {Array.isArray(description) ? (
        <ul className={clsx(`list-disc flex flex-col items-baseline`)}>
          {description.map((item, index) => (
            <li className="pl-[10px]" key={index}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
};

export default JobExperience;
