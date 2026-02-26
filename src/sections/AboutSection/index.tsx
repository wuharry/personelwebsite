import clsx from 'clsx';
import { type FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection: FC = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const quickInfo = [
    { label: t('about.info.titleLabel'), value: t('about.info.titleValue') },
    { label: t('about.info.expLabel'), value: t('about.info.expValue') },
    { label: t('about.info.locLabel'), value: t('about.info.locValue') },
    { label: t('about.info.focusLabel'), value: t('about.info.focusValue') },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative mx-auto max-w-5xl px-6 py-24"
    >
      <div className="mb-12 flex items-center gap-4">
        <h2 className="text-primary shrink-0 text-sm font-semibold tracking-widest uppercase">
          {t('about.sectionTitle')}
        </h2>
        <div className="bg-border/60 h-px flex-1" />
      </div>

      <div
        className={clsx(
          'grid gap-12 transition-all duration-700 md:grid-cols-[1fr_280px]',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        <div className="text-muted-foreground space-y-6 text-sm leading-relaxed">
          <div>
            <h3 className="text-foreground mb-2 font-medium">
              {t('about.intro.title')}
            </h3>
            <p>{t('about.intro.content')}</p>
          </div>
          <div>
            <h3 className="text-foreground mb-2 font-medium">
              {t('about.growth.title')}
            </h3>
            <p>{t('about.growth.content')}</p>
          </div>
          <div>
            <h3 className="text-foreground mb-2 font-medium">
              {t('about.work.title')}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-foreground text-sm font-medium">
                  {t('about.work.company1.name')}
                </p>
                <ul className="mt-1 list-disc space-y-1 pl-4">
                  <li>{t('about.work.company1.item1')}</li>
                  <li>{t('about.work.company1.item2')}</li>
                </ul>
              </div>
              <div>
                <p className="text-foreground text-sm font-medium">
                  {t('about.work.company2.name')}
                </p>
                <ul className="mt-1 list-disc space-y-1 pl-4">
                  <li>{t('about.work.company2.item1')}</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-foreground mb-2 font-medium">
              {t('about.strengths.title')}
            </h3>
            <ul className="list-disc space-y-1 pl-4">
              {(
                t('about.strengths.items', { returnObjects: true }) as string[]
              ).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-border bg-card/50 rounded-xl border p-6">
            <h3 className="text-muted-foreground mb-4 text-sm font-semibold tracking-widest uppercase">
              {t('about.info.sectionTitle')}
            </h3>
            <dl className="space-y-4">
              {quickInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-4"
                >
                  <dt className="text-muted-foreground text-sm">
                    {item.label}
                  </dt>
                  <dd className="text-foreground text-right text-sm font-medium">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
