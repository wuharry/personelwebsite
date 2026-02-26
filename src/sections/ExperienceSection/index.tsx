/** @format */
import clsx from 'clsx';
import { type FunctionComponent, useEffect, useState } from 'react';

import { NavigationBar } from '../../components';
import TimeLine from '../../components/TimeLine';

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
        'flex min-h-screen w-full flex-col items-start justify-start',
        'bg-linear-to-b from-[#1f2937] to-[#111827]', // 使用漸層背景
      )}
    >
      <NavigationBar />
      <section
        className={clsx(
          'mt-20 w-full transition-all duration-1000 ease-in-out sm:mt-14',
          'rounded-lg bg-white/5 p-8 shadow-xl backdrop-blur-md',
          'overflow-y-auto px-4',
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
