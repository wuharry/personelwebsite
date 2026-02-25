import clsx from 'clsx';
import { type FC, useState } from 'react';

import Button from '../ui/Button/Button';

import { type Project } from './type';

const ProjectCard: FC<Project> = ({
  label,
  link,
  description,
  image,
  className,
}) => {
  const [openDescription, setOpenDescription] = useState(false);

  const handleMouseEnter = () => {
    setOpenDescription(true);
  };

  const handleMouseLeave = () => {
    setOpenDescription(false);
  };

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div
      className={clsx(
        'relative mt-0 flex h-96 w-80 flex-col rounded-md bg-slate-600',
        'min-w-[20rem] sm:min-w-[24rem]',
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex h-72 w-full flex-col justify-center overflow-hidden p-4">
        <img
          src={image}
          alt={label}
          className="absolute top-50 left-0 h-4/5 w-full rounded-md"
        />
        {/* hover跳上來區域 */}
        <div
          className={clsx(
            'mt-2 w-full text-center text-white group-hover:block',
            'absolute flex flex-col items-center justify-center gap-2',
            'bottom-7 left-0 bg-linear-to-t from-white to-transparent',
            'rounded-b-lg transition-all duration-300 ease-in-out',
            openDescription ? 'h-full opacity-100' : 'h-0 opacity-0',
          )}
        >
          <Button onClick={handleClick} className="text-red-700">
            跳轉
          </Button>
        </div>
      </div>
      <div
        className={clsx('mb -1.5 flex flex-col items-center justify-center')}
      >
        <h2 className="text-2xl text-white">{label}</h2>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
