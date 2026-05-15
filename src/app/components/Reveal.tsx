'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

interface RevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'clip-wipe';
  delay?: number;
  className?: string;
}

export default function Reveal({ children, animation = 'fade-up', delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[animation]} ${isVisible ? styles.visible : ''} ${className}`}
    >
      {children}
    </div>
  );
}
