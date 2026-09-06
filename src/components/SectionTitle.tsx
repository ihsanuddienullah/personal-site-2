import { ReactNode, useEffect, useRef, useState } from 'react';

type SectionTitleProps = {
  children: ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(title);
    return () => observer.disconnect();
  }, []);

  return (
    <h2 ref={titleRef} className="section-title">
      <span className={`section-title-type ${hasEntered ? 'is-visible' : ''}`}>
        {children}
      </span>
    </h2>
  );
};

export default SectionTitle;
