import clsx from 'clsx';
import { type FC, useEffect, useState } from 'react';

type NavItem = { name: string; id: string };

const NAV_LIST: NavItem[] = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skill', id: 'skill' },
  { name: 'Project', id: 'project' },
  { name: 'Contact', id: 'contact' },
];

const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // scroll 偵測 navbar 背景
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver 偵測 active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_LIST.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }, // 40% 可見才觸發
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header>
      <nav
        className={clsx(
          'fixed top-0 right-0 left-0 z-50 px-6 py-3',
          'flex items-center justify-between',
          'transition-all duration-300',
          scrolled
            ? 'border-border bg-background/90 border-b shadow-sm backdrop-blur-md'
            : 'bg-transparent',
        )}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="text-primary z-50 ml-10 text-xl font-bold sm:ml-0"
        >
          Harvey.
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 sm:flex">
          {NAV_LIST.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={clsx(
                'relative text-sm font-medium transition-colors duration-300',
                'after:absolute after:-bottom-1 after:left-0',
                'after:h-px after:w-full after:rounded-full',
                'after:bg-primary after:transition-all after:duration-300',
                activeSection === item.id
                  ? 'text-primary after:scale-x-100 after:opacity-100'
                  : 'text-muted-foreground hover:text-foreground after:scale-x-0 after:opacity-0',
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="fixed top-5 left-5 z-50 flex h-5 w-7 flex-col justify-between focus:outline-none sm:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={clsx(
              'bg-foreground h-px w-full transition-all duration-300',
              menuOpen && 'translate-y-2.5 rotate-45',
            )}
          />
          <span
            className={clsx(
              'bg-foreground h-px w-full transition-all duration-300',
              menuOpen && 'opacity-0',
            )}
          />
          <span
            className={clsx(
              'bg-foreground h-px w-full transition-all duration-300',
              menuOpen && '-translate-y-2.5 -rotate-45',
            )}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 sm:hidden',
          'flex flex-col items-center justify-center gap-6',
          'bg-background/95 backdrop-blur-sm',
          'transition-all duration-300',
          menuOpen
            ? 'visible opacity-100'
            : 'pointer-events-none invisible opacity-0',
        )}
      >
        {NAV_LIST.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setMenuOpen(false)}
            className={clsx(
              'text-2xl font-medium transition-colors',
              activeSection === item.id
                ? 'text-primary'
                : 'text-muted-foreground',
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
