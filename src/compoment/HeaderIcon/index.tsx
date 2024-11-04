import clsx from 'clsx';
import { FunctionComponent, useEffect, useState } from 'react';
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
        `w-[15rem] h-[15rem] rounded-full border-spacing-7p-px 
        bg-gradient-to-r from-purple-500 to-pink-500 flex 
        items-center justify-center shadow-[0_0_50px_rgba(0,_128,_225,_1.8)]
        ${animetion ? 'animate-jump-in' : ''}`
      )}
    >
      <img
        src={headimg}
        alt=""
        className={clsx(`rounded-full w-[14rem] h-[14rem] mx-auto`)}
      />
    </div>
  );
};

export default HeaderIcon;
