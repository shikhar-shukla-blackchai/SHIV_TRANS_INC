"use client";

import { BUSINESS } from "@/lib/business";
import { useEffect, useState } from "react";

export function StatsBar() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-20 -mt-10 mx-auto mb-xl max-w-container-max px-gutter md:-mt-12">
      <div className="grid grid-cols-2 gap-md md:grid-cols-4">
        {BUSINESS.stats.map((stat, i) => {
          const accent = i % 2 === 0 ? "primary" : "secondary";
          return (
          <div
            key={stat.label}
            className={`glass glass-hover rounded-xl border-t-2 p-lg transition-all duration-700 ${
              accent === "primary"
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
                accent === "primary" ? "text-primary" : "text-secondary"
              }`}
            >
              {stat.value}
            </p>
            <p className="font-body text-label-caps uppercase tracking-widest text-on-surface-variant">
              {stat.label}
            </p>
          </div>
        );
        })}
      </div>
    </div>
  );
}
