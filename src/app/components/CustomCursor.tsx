'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailingPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable on desktop/hoverable devices
    if (window.matchMedia('(hover: none)').matches) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);
    
    const updateInteractions = () => {
      const interactiveElements = document.querySelectorAll('a, button, select, input, textarea');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    updateInteractions();

    // Trail animation using ref for smoother 60fps performance
    let requestRef: number;
    const animateTrail = () => {
      trailingPos.current.x += (position.x - trailingPos.current.x) * 0.15;
      trailingPos.current.y += (position.y - trailingPos.current.y) * 0.15;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trailingPos.current.x}px, ${trailingPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      requestRef = requestAnimationFrame(animateTrail);
    };
    requestRef = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(requestRef);
    };
  }, [position.x, position.y, isVisible]);

  if (!isVisible) return null;

  return (
    <div className={styles.cursorWrapper}>
      <div 
        className={styles.dot} 
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)` }}
      />
      <div 
        ref={ringRef}
        className={`${styles.ring} ${isHovering ? styles.expanded : ''}`}
      />
    </div>
  );
}
