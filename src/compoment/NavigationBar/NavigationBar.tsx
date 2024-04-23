import React, { FunctionComponent, useEffect, useState } from "react";
import clsx from "clsx";

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
      name: "Services",
      link: "/services",
    },
    {
      name: "Skills",
      link: "/skills",
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
    console.log("navBarInit", navBarAnimetion);

    return () => {
      // setNavBarAnimetion(false);
    };
  }, []);

  return (
    <>
      <header
        className={clsx(
          `fixed top-0 left-0 w-full px-5 py-3 bg-transparent z-10 flex items-center justify-between`
        )}
      >
        <a href="/">
          <div
            className={clsx(` relative text-2xl text-violet-50 font-semibold`)}
          >
            Portfolio
          </div>{" "}
        </a>
        <nav className={clsx(`flex justify-around items-center gap-4`)}>
          {routerList.map((item, index) => (
            <a
              key={`${index}-${item.name}`}
              href={item.link}
              className={clsx(
                `${aTagStyle} ${
                  navBarAnimetion
                    ? `animate-fade-down animate-once animate-ease-in`
                    : ``
                }`
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
