import clsx from 'clsx';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type NavItem = { nameKey: string; id: string };

const NAV_LIST: NavItem[] = [
  { nameKey: 'nav.home', id: 'hero' },
  { nameKey: 'nav.about', id: 'about' },
  { nameKey: 'nav.experience', id: 'experience' },
  { nameKey: 'nav.skill', id: 'skill' },
  { nameKey: 'nav.project', id: 'project' },
  { nameKey: 'nav.contact', id: 'contact' },
];

const Navbar: FC = () => {
  const { t, i18n } = useTranslation();
  const { resolvedTheme, setTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mounted, setMounted] = useState(false);

  // next-themes 需等 mount 後才能讀到正確 theme
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_LIST.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const toggleLang = () =>
    i18n.changeLanguage(i18n.language.startsWith('zh') ? 'en' : 'zh');

  const toggleTheme = () =>
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  /** 語系按鈕文字：目前是中文 → 顯示 EN；目前是英文 → 顯示 中文 */
  const langLabel = i18n.language.startsWith('zh') ? 'EN' : '中文';

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

        {/* Desktop links + 控制按鈕 */}
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
              {t(item.nameKey)}
            </a>
          ))}

          {/* 語系切換 */}
          <button
            onClick={toggleLang}
            className={clsx(
              'border-border rounded-md border px-2.5 py-1',
              'text-muted-foreground font-mono text-xs',
              'hover:border-primary/50 hover:text-primary transition-colors',
            )}
            aria-label="Toggle language"
          >
            {langLabel}
          </button>

          {/* 亮暗切換 */}
          <button
            onClick={toggleTheme}
            className={clsx(
              'flex h-8 w-8 items-center justify-center rounded-md',
              'border-border text-muted-foreground border',
              'hover:border-primary/50 hover:text-primary transition-colors',
            )}
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
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
            {t(item.nameKey)}
          </a>
        ))}

        {/* Mobile 控制按鈕 */}
        <div className="mt-4 flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="border-border text-muted-foreground hover:text-primary rounded-md border px-3 py-1.5 font-mono text-sm transition-colors"
          >
            {langLabel}
          </button>
          <button
            onClick={toggleTheme}
            className="border-border text-muted-foreground hover:text-primary flex h-9 w-9 items-center justify-center rounded-md border transition-colors"
          >
            {mounted && resolvedTheme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
