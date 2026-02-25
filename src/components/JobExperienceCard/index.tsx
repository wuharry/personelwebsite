/** @format */

import clsx from 'clsx';
import { type FunctionComponent } from 'react';

import { type JOBEXPERIENCEOBJ } from '../../types';

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
        `max-h-auto animate-fade-left animate-delay-[1000ms] block max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-md shadow-white`,
      )}
    >
      <h4
        className={clsx(`mb-2 text-xl font-bold tracking-tight text-blue-500`)}
      >
        {time}
      </h4>
      <h5
        className={clsx(`mb-2 text-2xl font-bold tracking-wide text-gray-900`)}
      >
        companyName: {companyName}
      </h5>
      <h4
        className={clsx(`mb-2 text-xl font-bold tracking-tight text-gray-900`)}
      >
        jobTitle: {jobTitle}
      </h4>

      <p className={clsx(`font-normal text-gray-700`)}>
        ProjectName: {projectName}
      </p>
      <p className={clsx(`font-normal text-gray-700`)}>contribution:</p>
      {Array.isArray(description) ? (
        <ul className={clsx(`flex list-disc flex-col items-baseline`)}>
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
