import clsx from 'clsx';
import { ArrowDown } from 'lucide-react';
import { type FC, useEffect, useState } from 'react';

import { Icon104, CakeResume } from '../../static/constant/svg';

const HeroSection: FC = () => {
  const [visible, setVisible] = useState(false);

  const linkHandler = (link: string) => window.open(link, '_blank');

  useEffect(() => {
    setVisible(true);
  }, []);

  const ICONLIST = [
    {
      name: 'GitHub',
      link: 'https://github.com/wuharry',
      SVGElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
          />
        </svg>
      ),
    },
    {
      name: 'Gmail',
      link: 'mailto:whw880218we@gmail.com',
      SVGElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/feed/',
      SVGElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
        </svg>
      ),
    },
    {
      name: 'CakeResume',
      link: 'https://www.cakeresume.com/s--CVgjtgYwBTaPbAWMZfUNhw--/whw880218cool',
      SVGElement: <CakeResume />,
    },
    {
      name: 'Telegram',
      link: 'https://web.telegram.org/a/',
      SVGElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
        </svg>
      ),
    },
    {
      name: '104Bank',
      link: 'https://pda.104.com.tw/profile/share/8sw2sYtjxtWwHu7cKUoGcgPZdo9ocnmu',
      SVGElement: <Icon104 />,
    },
  ];

  const transitionBase = 'transition-all duration-700';

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      {/* Radial glow - 來自 v0 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary/5 absolute top-1/3 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Hello */}
        <p
          className={clsx(
            'text-primary mb-4 font-mono text-sm tracking-widest',
            transitionBase,
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          )}
        >
          Hello 你好
        </p>

        {/* 名字 */}
        <h1
          className={clsx(
            'text-foreground mb-4 text-5xl font-bold tracking-tight sm:text-7xl',
            transitionBase,
            'delay-100',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          )}
        >
          我是 吳浩維 (Harvey)
        </h1>

        {/* 職稱 */}
        <h2
          className={clsx(
            'text-muted-foreground mb-6 text-xl font-medium sm:text-2xl',
            transitionBase,
            'delay-200',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          )}
        >
          前端工程師
        </h2>

        {/* 自我介紹 - 你的內容，v0 沒有 */}
        <div
          className={clsx(
            'text-muted-foreground mb-8 space-y-2 text-sm leading-relaxed',
            transitionBase,
            'delay-300',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          )}
        >
          <p>充滿熱情的前端工程師，擁有 3 年以上前端開發經驗。</p>
          <p>
            熟悉 JavaScript、React ，懂一點Next.js、React Native
            ，對程式有高品質要求。
          </p>
        </div>

        {/* 社交連結 - 你的 6 個，v0 只有 3 個 */}
        <div
          className={clsx(
            'flex items-center justify-center gap-3',
            transitionBase,
            'delay-[400ms]',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          )}
        >
          {ICONLIST.map((icon) => (
            <button
              key={icon.name}
              onClick={() => linkHandler(icon.link)}
              aria-label={icon.name}
              className="group border-border bg-secondary/50 text-muted-foreground hover:border-primary/50 hover:text-primary flex h-10 w-10 items-center justify-center rounded-lg border transition-all"
            >
              <span className="transition-transform group-hover:scale-110">
                {icon.SVGElement}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="text-muted-foreground hover:text-primary absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default HeroSection;
