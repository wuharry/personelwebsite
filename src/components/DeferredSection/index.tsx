import { Suspense, type ReactNode, useEffect, useRef, useState } from 'react';

interface DeferredSectionProps {
  readonly children: ReactNode;
  readonly id: string;
  readonly minHeight: number;
}

const LoadingPlaceholder = () => (
  <div
    aria-hidden="true"
    className="mx-auto max-w-5xl animate-pulse px-6 py-24"
  >
    <div className="bg-card/50 border-border h-32 rounded-xl border" />
  </div>
);

const DeferredSection = ({ children, id, minHeight }: DeferredSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(
    () => !('IntersectionObserver' in window),
  );

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin: '600px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div id={id} ref={containerRef} style={{ minHeight }}>
      {shouldRender ? (
        <Suspense fallback={<LoadingPlaceholder />}>{children}</Suspense>
      ) : null}
    </div>
  );
};

export default DeferredSection;
