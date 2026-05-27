"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: "10+", label: "Years Experience", accent: "primary" as const },
  { value: "98%", label: "On-Time Delivery", accent: "secondary" as const },
  { value: "11", label: "States Covered", accent: "primary" as const },
  { value: "±1°F", label: "Temp Precision", accent: "secondary" as const },
];

export function StatsBar() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-20 -mt-20 mx-auto max-w-container-max px-gutter">
      <div className="grid grid-cols-2 gap-md md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`glass glass-hover rounded-xl border-t-2 p-lg transition-all duration-700 ${
              stat.accent === "primary"
                ? "border-primary/50"
                : "border-secondary/50"
            } ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <p
              className={`mb-xs font-display text-headline-lg ${
                stat.accent === "primary" ? "text-primary" : "text-secondary"
              }`}
            >
              {stat.value}
            </p>
            <p className="font-body text-label-caps uppercase tracking-widest text-on-surface-variant">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
