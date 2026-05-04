'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

/**
 * Parse a counter string like "400+", "12K", or "50" into a numeric target
 * and any suffix (e.g. "+", "K"). Handles commas.
 */
function parseCounterString(str) {
  const cleaned = str.replace(/,/g, '');
  const match = cleaned.match(/^(\d+)(.*)/);
  if (!match) return { target: 0, suffix: str };
  return { target: parseInt(match[1], 10), suffix: match[2] || '' };
}

export default function Counter({ number, label, icon }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { target, suffix } = parseCounterString(number);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const startTime = performance.now();

          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            setDisplay(`${current.toLocaleString()}${suffix}`);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      {icon && (
        <div className="mb-4">
          <Image
            src={icon}
            alt=""
            width={150}
            height={150}
            className="mx-auto object-contain"
            style={{ width: '150px', height: 'auto' }}
          />
        </div>
      )}
      <span
        className="font-bold"
        style={{
          fontSize: '48px',
          color: 'rgba(83, 75, 56, 0.79)',
        }}
      >
        {display}
      </span>
      <span
        className="mt-2 font-semibold uppercase"
        style={{
          fontSize: '13px',
          letterSpacing: '3px',
          color: 'rgba(83, 75, 56, 0.77)',
        }}
      >
        {label}
      </span>
    </div>
  );
}
