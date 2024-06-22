/** @format */

import React, { FunctionComponent, useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom"; //git hub 需要hash router
interface NavigationBarProps {}
const ROUTER_LIST = [
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
const LINK_STYLE: string = `inline-block text-2xl text-white 
text-decoration-none font-medium ml-9 transition duration-300
hover:text-[#0ef]
  `;

const NavigationBar: FunctionComponent<NavigationBarProps> = () => {
  const [navBarAnimetion, setNavBarAnimetion] = useState(false);
  const [hamburgerAnimetion, setHamburgerAnimetion] = useState(false);

  useEffect(() => {
    setNavBarAnimetion(true);
    console.log("init");

    return () => {
      setTimeout(() => setNavBarAnimetion(false), 5000);
    };
  }, []);

  const handleHamburgerClick = () => {
    setHamburgerAnimetion(!hamburgerAnimetion);
    console.log(hamburgerAnimetion);
  };

  return (
    <>
      <header
        className={clsx(
          "fixed sm:top-0 sm:left-0 top-0 w-full px-5 py-3 bg-transparent z-10 flex items-center ",
          "sm:justify-between justify-start"
        )}
      >
        <Link to="/">
          <div
            className={clsx(
              "sm:relative sm:text-2xl sm:text-violet-50 sm:font-semibold sm:block",
              "hidden"
            )}
          >
            Portfolio
          </div>
        </Link>
        <nav
          className={clsx(
            "sm:flex sm:justify-around sm:items-center sm:gap-4",
            "hidden"
          )}
        >
          {ROUTER_LIST.map((item, index) => (
            <Link
              key={`${index}-${item.name}`}
              to={item.link}
              className={clsx(
                `${LINK_STYLE} ${
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
        <div className={clsx("sm:hidden", "block")}>
          <label
            className={clsx(
              "before:content-[''] before:w-bar-width before:h-bar-height before:bg-slate-400 before:rounded-full",
              "before:transition-opacity before:ease-in-out before:duration-200 before:origin-bottom-left",
              "after:content-[''] after:w-bar-width after:h-bar-height after:bg-slate-400 after:rounded-full",
              "after:transition-opacity after:ease-in-out after:duration-200 after:origin-top-left",
              "flex flex-col gap-hamburger-gap w-max absolute top-[0.2rem] left-[0.2rem] cursor-pointer",
              "has-[:checked]:after:box-border has-[:checked]:before:box-border",
              "before:transition-all after:transition-all",
              "has-[:checked]:before:rotate-45 has-[:checked]:after:rotate-[-45deg]",
              "has-[:checked]:before:w-hamburger-close-width has-[:checked]:after:w-hamburger-close-width",
              "has-[:checked]:before:translate-x-0 has-[:checked]:after:translate-x-0",
              "has-[:checked]:before:translate-y-close-bar-height-before has-[:checked]:after:translate-y-close-bar-height-after",
              "has-[:checked]:before:transition-all ease-in-out duration-200 has-[:checked]:after:transition-all"
            )}
          >
            <input
              type="checkbox"
              name="hamburger-button"
              id="hamburger-button"
              onClick={handleHamburgerClick}
              checked={hamburgerAnimetion}
              className={clsx(
                "content-[''] w-bar-width h-bar-height bg-slate-400 rounded-full appearance-none",
                "p-0 m-0 outline-none	pointer-events-none transition-opacity ease-in-out duration-200 ",

                hamburgerAnimetion ? "opacity-0 w-0" : "opacity-100 w-bar-width"
              )}
            />
          </label>
          <aside>
            <nav
              className={clsx(
                "flex justify-around items-center gap-4 flex-col",
                "sm:hidden "
              )}
            >
              {ROUTER_LIST.map((item, index) => (
                <Link
                  key={`${index}-${item.name}`}
                  to={item.link}
                  className={clsx(
                    `${LINK_STYLE} ${
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
          </aside>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
