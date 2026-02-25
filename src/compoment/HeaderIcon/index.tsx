import clsx from 'clsx';
import { type FunctionComponent, useEffect, useState } from 'react';

import headimg from '../../assets/head.jpg';

interface HeaderIconProps {
  className?: string;
}

const HeaderIcon: FunctionComponent<HeaderIconProps> = () => {
  const [animetion, setAnimetion] = useState(false);
  useEffect(() => {
    setAnimetion(true);
    return () => {
      setTimeout(() => setAnimetion(false), 7000);
    };
  }, []);
  return (
    <div
      className={clsx(
        `border-spacing-7p-px flex h-[15rem] w-[15rem] items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_50px_rgba(0,_128,_225,_1.8)] ${animetion ? 'animate-jump-in' : ''}`,
      )}
    >
      <img
        src={headimg}
        alt=""
        className={clsx(`mx-auto h-[14rem] w-[14rem] rounded-full`)}
      />
    </div>
  );
};

export default HeaderIcon;
