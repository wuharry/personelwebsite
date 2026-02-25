import clsx from 'clsx';
import { type FunctionComponent, useEffect, useState } from 'react';
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

const STYLES = {
  link: `
    inline-block text-xl font-medium
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
  mobileLink: `
    block w-full text-xl font-medium py-4
    text-center
    transition-all duration-300
    text-white hover:text-[#0ef]
  `,
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHamburgerClick = () => {
    setHamburgerAnimation(!hamburgerAnimation);
  };

  return (
    <header className="relative">
      {/* Fixed Navigation Bar */}
      <nav
        className={clsx(
          'fixed top-0 right-0 left-0 z-50 px-5 py-3',
          'transition-all duration-300',
          'flex items-center justify-between',
          scrolled
            ? 'bg-[#1f2937]/90 shadow-lg backdrop-blur-md'
            : 'bg-transparent',
        )}
      >
        {/* Logo/Title */}
        <Link
          to="/"
          className={clsx(
            'z-50 text-2xl font-bold',
            'bg-gradient-to-r from-[#0ef] to-[#2563eb] bg-clip-text text-transparent',
            'ml-12 sm:ml-0',
          )}
        >
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex sm:items-center sm:gap-8">
          {ROUTER_LIST.map((item, index) => (
            <Link
              key={`${index}-${item.name}`}
              to={item.link}
              className={clsx(
                STYLES.link,
                navBarAnimation &&
                  'animate-fade-down animate-once animate-ease-in',
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={handleHamburgerClick}
          className={clsx(
            'fixed top-5 left-5 z-50 sm:hidden',
            'flex h-6 w-8 flex-col justify-between',
            'focus:outline-none',
          )}
        >
          <span
            className={clsx(
              'h-0.5 w-full bg-white transition-all duration-300',
              hamburgerAnimation && 'translate-y-2.5 rotate-45',
            )}
          />
          <span
            className={clsx(
              'h-0.5 w-full bg-white transition-all duration-300',
              hamburgerAnimation && 'opacity-0',
            )}
          />
          <span
            className={clsx(
              'h-0.5 w-full bg-white transition-all duration-300',
              hamburgerAnimation && '-translate-y-2.5 -rotate-45',
            )}
          />
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 sm:hidden',
          'transition-all duration-300 ease-in-out',
          hamburgerAnimation
            ? 'visible bg-[#1f2937]/95 opacity-100'
            : 'pointer-events-none invisible opacity-0',
        )}
      >
        {/* Mobile Menu Items Container */}
        <div className="flex h-full flex-col items-center justify-center">
          {ROUTER_LIST.map((item, index) => (
            <Link
              key={`mobile-${index}-${item.name}`}
              to={item.link}
              onClick={() => setHamburgerAnimation(false)}
              className={clsx(
                STYLES.mobileLink,
                activeSection === item.name && 'text-[#0ef]',
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
