/** @format */
import { FunctionComponent, useEffect, useState } from 'react';
import { NavigationBar } from '../../compoment';
import TimeLine from '../../compoment/TimeLine';
import clsx from 'clsx';

interface ExperienceProps {}

const Experience: FunctionComponent<ExperienceProps> = () => {
  const [animetion, setAnimetion] = useState(true);

  useEffect(() => {
    setAnimetion(false);
    return () => {};
  }, []);

  return (
    <div
      className={clsx(
        'flex flex-col items-start justify-start w-full min-h-screen',
        'bg-gradient-to-b from-[#1f2937] to-[#111827]' // 使用漸層背景
      )}
    >
      <NavigationBar />
      <section
        className={clsx(
          'transition-all ease-in-out duration-1000 mt-20 sm:mt-14 w-full',
          'backdrop-blur-md bg-white/5 rounded-lg p-8 shadow-xl',
          'overflow-y-auto mx-4'
        )}
        style={{
          height: animetion ? '0' : 'calc(100vh - 5rem)',
          minHeight: animetion ? 'auto' : '100%',
          flexGrow: animetion ? 'initial' : 1,
        }}
      >
        <TimeLine />
      </section>
    </div>
  );
};

export default Experience;
