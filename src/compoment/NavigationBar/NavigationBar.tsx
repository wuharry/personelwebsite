/** @format */

import React, { FunctionComponent, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface NavigationBarProps {}
type RouteItem = {
  name: string;
  link: string;
};

const ROUTER_LIST: RouteItem[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Experience',
    link: '/experience',
  },
  {
    name: 'Skill',
    link: '/skill',
  },
  {
    name: 'Project',
    link: '/project',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];
type ActiveSection = (typeof ROUTER_LIST)[number]['name'];

const LINK_STYLE: string = `
  inline-block text-2xl text-white text-decoration-none font-medium ml-9 
  transition duration-300 hover:text-[#0ef]
`;

const STYLES = {
  link: `
    inline-block text-2xl font-medium ml-9 
    relative                            
    transition-all duration-300
    text-white hover:text-[#0ef]
    after:content-['']                   
    after:absolute                      
    after:w-full                         
    after:h-0.5                         
    after:bg-gradient-to-r               
    after:from-[#0ef]                    
    after:to-[#2563eb]                   
    after:left-0                       
    after:bottom-[-5px]                
    after:rounded-full             
    after:opacity-0             
    after:transform                 
    after:scale-x-0                 
    after:transition-all          
    after:duration-300                 
    hover:after:opacity-100           
    hover:after:scale-x-100    
  `,
  activeLink: `text-[#0ef] relative after:content-[''] 
              after:absolute after:bottom-[-5px] after:left-0 after:opacity-100 
              after:w-full after:h-[2px] after:bg-[#0ef] after:scale-x-100 `,
  hamburgerBase: `flex flex-col gap-hamburger-gap w-max 
                  absolute top-[0.2rem] left-[0.2rem] cursor-pointer`,
} as const;

const NavigationBar: FunctionComponent<NavigationBarProps> = () => {
  const [navBarAnimation, setNavBarAnimation] = useState(false);
  const [hamburgerAnimation, setHamburgerAnimation] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setNavBarAnimation(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    return () => {
      setTimeout(() => setNavBarAnimation(false), 5000);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHamburgerClick = () => {
    setHamburgerAnimation(!hamburgerAnimation);
  };

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 w-full px-5 py-3 bg-transparent z-20 flex items-center transition-all ',
          hamburgerAnimation ? 'w-full' : '',
          hamburgerAnimation ? 'bg-sky-600' : '',
          hamburgerAnimation ? 'h-full' : '',
          'sm:justify-between justify-start',
          `fixed w-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#1f2937]/90 backdrop-blur-md shadow-lg'
              : 'bg-transparent'
          }`
        )}
        style={{
          backgroundColor: hamburgerAnimation
            ? 'rgba(0, 191, 255, 1)'
            : 'transparent',
        }}
      >
        <Link to="/">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#0ef] to-[#2563eb] bg-clip-text text-transparent">
            Portfolio
          </div>
        </Link>
        <div
          className={clsx(
            'sm:flex sm:justify-around sm:items-center sm:gap-4',
            'hidden sm:flex'
          )}
        >
          {ROUTER_LIST.map((item, index) => (
            <Link
              key={`${index}-${item.name}`}
              to={item.link}
              className={clsx(
                STYLES.link,
                navBarAnimation
                  ? 'animate-fade-down animate-once animate-ease-in'
                  : ''
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className={clsx('sm:hidden block')}>
          <label
            className={clsx(
              "before:content-[''] before:w-bar-width before:h-bar-height before:bg-slate-400 before:rounded-full",
              'before:transition-transform before:ease-in-out before:duration-200 before:origin-bottom-left',
              "after:content-[''] after:w-bar-width after:h-bar-height after:bg-slate-400 after:rounded-full",
              'after:transition-transform after:ease-in-out after:duration-200 after:origin-top-left',
              'flex flex-col gap-hamburger-gap w-max absolute top-[0.2rem] left-[0.2rem] cursor-pointer',
              'has-[:checked]:after:box-border has-[:checked]:before:box-border',
              hamburgerAnimation
                ? 'before:rotate-45 after:rotate-[-45deg]'
                : '',
              hamburgerAnimation
                ? 'before:w-hamburger-close-width after:w-hamburger-close-width'
                : '',
              hamburgerAnimation
                ? 'before:translate-x-0 after:translate-x-0'
                : '',
              hamburgerAnimation
                ? 'before:translate-y-close-bar-height-before after:translate-y-close-bar-height-after'
                : '',
              hamburgerAnimation
                ? 'before:transition-transform ease-in-out duration-200 after:transition-transform'
                : ''
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
                'p-0 m-0 outline-none pointer-events-none transition-opacity ease-in-out duration-200',
                hamburgerAnimation ? 'opacity-0 w-0' : 'opacity-100 w-bar-width'
              )}
            />
          </label>
          <aside
            className={clsx(
              'transition-transform',
              hamburgerAnimation ? 'translate-x-0' : '-translate-x-full'
            )}
          >
            <div
              className={clsx(
                'flex flex-col gap-4 h-full transition-transform'
                // hamburgerAnimation ? "w-full" : "w-0"
              )}
            >
              {ROUTER_LIST.map((item, index) => (
                <Link
                  key={`${index}-${item.name}`}
                  to={item.link}
                  className={clsx(
                    LINK_STYLE,
                    navBarAnimation
                      ? 'animate-fade-down animate-once animate-ease-in'
                      : '',
                    hamburgerAnimation ? 'block' : 'hidden',
                    activeSection === item.name
                      ? 'text-[#0ef]' // 活動項目使用亮藍色
                      : 'text-white hover:text-[#0ef]/80' // 非活動項目使用白色，懸停時使用半透明亮藍色
                  )}
                >
                  {item.name}
                  {activeSection === item.name && (
                    <div
                      className="
                    absolute bottom-0 left-0 
                    w-full h-0.5 
                    bg-gradient-to-r from-[#0ef] to-[#2563eb] 
                    rounded-full
                    transform transition-transform duration-300 
                    hover:scale-x-110
                  "
                    />
                  )}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
