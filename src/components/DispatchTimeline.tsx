"use client";

import { MaterialIcon } from "./MaterialIcon";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const steps = [
  {
    icon: "chat",
    title: "1. Load Details",
    description:
      "Share origin, destination, commodity, temp requirements, weight, and pickup window.",
    highlight: true,
  },
  {
    icon: "task_alt",
    title: "2. Rate Confirmation",
    description:
      "Receive a rate confirmation within 1–2 hours during business hours.",
    highlight: false,
  },
  {
    icon: "ac_unit",
    title: "3. Pre-cool & Dispatch",
    description:
      "Unit pre-cooled to target temp before arrival — confirmation sent before wheels roll.",
    highlight: false,
    pulse: true,
  },
  {
    icon: "fact_check",
    title: "4. Delivery & Logs",
    description:
      "Full POD and temperature audit logs provided same day. Invoice via factoring.",
    highlight: false,
  },
];

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
      </div>
      <div className="relative flex flex-col justify-between gap-xl md:flex-row">
        <div className="absolute left-0 top-10 z-0 hidden h-0.5 w-full bg-outline-variant/30 md:block">
          <div className="h-full w-1/4 animate-pulse bg-primary" />
        </div>
        {steps.map((step) => (
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
                  step.pulse
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
