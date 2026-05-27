"use client";

import { BUSINESS } from "@/lib/business";
import { MaterialIcon } from "./MaterialIcon";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export function DispatchTimeline() {
  useRevealOnScroll();

  return (
    <section
      className="mx-auto max-w-container-max px-gutter py-xl"
      id="how-it-works"
    >
      <div className="mb-xl text-center">
        <h2 className="font-display text-headline-lg">
          Streamlined Dispatch Flow
        </h2>
        <p className="mt-md text-on-surface-variant">
          Getting freight moving is simple.
        </p>
      </div>
      <div className="relative flex flex-col justify-between gap-xl md:flex-row">
        <div className="absolute left-0 top-10 z-0 hidden h-0.5 w-full bg-outline-variant/30 md:block">
          <div className="h-full w-1/4 animate-pulse bg-primary" />
        </div>
        {BUSINESS.dispatchSteps.map((step) => (
          <div key={step.title} className="reveal-step group relative z-10 flex-1">
            <div
              className={`mb-md flex h-20 w-20 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${
                step.highlight
                  ? "glass glow-primary"
                  : "glass border border-outline-variant"
              }`}
            >
              <MaterialIcon
                name={step.icon}
                className={`text-3xl ${
                  "pulse" in step && step.pulse
                    ? "breath-pulse text-on-surface-variant group-hover:text-primary"
                    : step.highlight
                      ? "text-primary"
                      : "text-on-surface-variant transition-colors group-hover:text-primary"
                }`}
              />
            </div>
            <h4 className="mb-xs font-display text-lg text-headline-md">
              {step.title}
            </h4>
            <p className="text-sm text-on-surface-variant">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
