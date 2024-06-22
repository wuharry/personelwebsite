/** @format */

import React, { FunctionComponent, useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

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

const LINK_STYLE: string = `
  inline-block text-2xl text-white text-decoration-none font-medium ml-9 
  transition duration-300 hover:text-[#0ef]
`;

const NavigationBar: FunctionComponent<NavigationBarProps> = () => {
  const [navBarAnimation, setNavBarAnimation] = useState(false);
  const [hamburgerAnimation, setHamburgerAnimation] = useState(false);

  useEffect(() => {
    setNavBarAnimation(true);

    return () => {
      setTimeout(() => setNavBarAnimation(false), 5000);
    };
  }, []);

  const handleHamburgerClick = () => {
    setHamburgerAnimation(!hamburgerAnimation);
  };

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 w-full px-5 py-3 bg-transparent z-20 flex items-center transition-all",
          hamburgerAnimation ? "bg-cyan-900 w-full h-full" : "",
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
            "hidden sm:flex"
          )}
        >
          {ROUTER_LIST.map((item, index) => (
            <Link
              key={`${index}-${item.name}`}
              to={item.link}
              className={clsx(
                LINK_STYLE,
                navBarAnimation
                  ? "animate-fade-down animate-once animate-ease-in"
                  : ""
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className={clsx("sm:hidden block")}>
          <label
            className={clsx(
              "before:content-[''] before:w-bar-width before:h-bar-height before:bg-slate-400 before:rounded-full",
              "before:transition-opacity before:ease-in-out before:duration-200 before:origin-bottom-left",
              "after:content-[''] after:w-bar-width after:h-bar-height after:bg-slate-400 after:rounded-full",
              "after:transition-opacity after:ease-in-out after:duration-200 after:origin-top-left",
              "flex flex-col gap-hamburger-gap w-max absolute top-[0.2rem] left-[0.2rem] cursor-pointer",
              "has-[:checked]:after:box-border has-[:checked]:before:box-border",
              "before:transition-all after:transition-all",
              hamburgerAnimation
                ? "before:rotate-45 after:rotate-[-45deg]"
                : "",
              hamburgerAnimation
                ? "before:w-hamburger-close-width after:w-hamburger-close-width"
                : "",
              hamburgerAnimation
                ? "before:translate-x-0 after:translate-x-0"
                : "",
              hamburgerAnimation
                ? "before:translate-y-close-bar-height-before after:translate-y-close-bar-height-after"
                : "",
              hamburgerAnimation
                ? "before:transition-all ease-in-out duration-200 after:transition-all"
                : ""
            )}
          >
            <input
              type="checkbox"
              name="hamburger-button"
              id="hamburger-button"
              onChange={handleHamburgerClick}
              checked={hamburgerAnimation}
              className={clsx(
                "content-[''] w-bar-width h-bar-height bg-slate-400 rounded-full appearance-none",
                "p-0 m-0 outline-none pointer-events-none transition-opacity ease-in-out duration-200",
                hamburgerAnimation ? "opacity-0 w-0" : "opacity-100 w-bar-width"
              )}
            />
          </label>
          <aside
            className={clsx(
              "transition-transform",
              hamburgerAnimation ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <nav className="flex flex-col gap-4 w-full h-full">
              {ROUTER_LIST.map((item, index) => (
                <Link
                  key={`${index}-${item.name}`}
                  to={item.link}
                  className={clsx(
                    LINK_STYLE,
                    navBarAnimation
                      ? "animate-fade-down animate-once animate-ease-in"
                      : ""
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
