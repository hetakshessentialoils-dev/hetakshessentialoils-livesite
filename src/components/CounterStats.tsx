"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: number; label: string };

const STATS: Stat[] = [
  { value: 500, label: "Happy Clients" },
  { value: 200, label: "Products" },
  { value: 10, label: "Years Experience" },
  { value: 40, label: "Countries" },
];

function Counter({ stat, run }: { stat: Stat; run: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!run) return;
    const duration = 1500;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.ceil(progress * stat.value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, stat.value]);

  return (
    <li>
      <div className="counter-two__single">
        <div className="counter-two__count-box count-box">
          <h3 className="count-text">{count}</h3>
          <span className="counter-two__plus">+</span>
        </div>
        <p className="counter-two__text-2">{stat.label}</p>
      </div>
    </li>
  );
}

export function CounterStats() {
  const ref = useRef<HTMLUListElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ul ref={ref} className="list-unstyled counter-two__counter">
      {STATS.map((stat) => (
        <Counter key={stat.label} stat={stat} run={run} />
      ))}
    </ul>
  );
}
