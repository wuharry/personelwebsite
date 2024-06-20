/** @format */

import React, { FunctionComponent, useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom"; //git hub 需要hash router
interface NavigationBarProps {}

const NavigationBar: FunctionComponent<NavigationBarProps> = () => {
  const [navBarAnimetion, setNavBarAnimetion] = useState(false);
  const routerList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Experience",
      link: "/experience",
    },
    {
      name: "Skill",
      link: "/skill",
    },
    {
      name: "Project",
      link: "/project",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const aTagStyle: string = `inline-block text-2xl text-white 
  text-decoration-none font-medium ml-9 transition duration-300
  hover:text-[#0ef]
    `;

  useEffect(() => {
    setNavBarAnimetion(true);

    return () => {
      setTimeout(() => setNavBarAnimetion(false), 5000);
    };
  }, []);

  return (
    <>
      <header
        className={clsx(
          `fixed top-0 left-0 w-full px-5 py-3 bg-transparent z-10 flex items-center justify-between`
        )}
      >
        <Link to="/">
          <div
            className={clsx(` relative text-2xl text-violet-50 font-semibold`)}
          >
            Portfolio
          </div>
        </Link>
        <nav className={clsx(`flex justify-around items-center gap-4`)}>
          {routerList.map((item, index) => (
            <Link
              key={`${index}-${item.name}`}
              to={item.link}
              className={clsx(
                `${aTagStyle} ${
                  navBarAnimetion
                    ? `animate-fade-down animate-once animate-ease-in`
                    : ``
                }`
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
