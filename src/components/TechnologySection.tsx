import Image from "next/image";
import { BUSINESS } from "@/lib/business";
import { MaterialIcon } from "./MaterialIcon";

const specIcons = [
  "local_shipping",
  "thermostat",
  "sensors",
  "bolt",
  "eco",
  "verified",
  "gps_fixed",
];

export function TechnologySection() {
  return (
    <section className="py-xl" id="tech">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="glass relative overflow-hidden rounded-3xl border-outline-variant/30 p-xl">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(#89ceff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 grid grid-cols-1 gap-xl lg:grid-cols-3 lg:items-stretch">
            <div className="flex min-h-0 flex-col space-y-lg lg:col-span-2">
              <h2 className="font-display text-headline-lg">
                Equipment &amp; Technology
              </h2>
              <div className="h-56 w-full shrink-0 rounded-2xl border border-outline-variant/30 bg-surface-container p-lg sm:h-64">
                <div className="mb-md flex items-center justify-between">
                  <p className="font-body text-label-caps uppercase text-on-surface-variant">
                    LIVE TEMPERATURE TELEMETRY - UNIT #4208
                  </p>
                  <div className="flex items-center gap-sm">
                    <div className="h-3 w-3 animate-blink rounded-full bg-secondary" />
                    <span className="animate-blink font-data text-xs text-secondary">
                      LINK ACTIVE
                    </span>
                  </div>
                </div>
                <svg className="h-32 w-full sm:h-40" viewBox="0 0 800 150">
                  <path
                    className="draw-path"
                    d="M0,75 L100,72 L200,76 L300,74 L400,75 L500,73 L600,75 L700,74 L800,75"
                    fill="none"
                    stroke="#5de6ff"
                    strokeWidth="3"
                  />
                  <path
                    d="M0,75 L100,72 L200,76 L300,74 L400,75 L500,73 L600,75 L700,74 L800,75 L800,150 L0,150 Z"
                    fill="url(#grad)"
                    opacity="0.1"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop
                        offset="0%"
                        style={{ stopColor: "#5de6ff", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#5de6ff", stopOpacity: 0 }}
                      />
                    </linearGradient>
                  </defs>
                  <circle
                    className="animate-pulse"
                    cx="700"
                    cy="74"
                    r="4"
                    fill="#5de6ff"
                  />
                </svg>
                <div className="mt-sm flex justify-between font-data text-[10px] text-on-surface-variant">
                  <span>-4h</span>
                  <span>-3h</span>
                  <span>-2h</span>
                  <span>-1h</span>
                  <span>NOW</span>
                </div>
              </div>
              <div className="grid shrink-0 grid-cols-3 gap-md">
                <div className="border-r border-outline-variant/30 p-md text-center">
                  <p className="font-display text-2xl text-primary">53&apos;</p>
                  <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant">
                    Reefer Trailers
                  </p>
                </div>
                <div className="border-r border-outline-variant/30 p-md text-center">
                  <p className="font-display text-2xl text-secondary">CARB</p>
                  <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant">
                    Compliant Fleet
                  </p>
                </div>
                <div className="p-md text-center">
                  <p className="font-display text-2xl text-tertiary">ELD</p>
                  <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant">
                    Enabled Track
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-md min-h-0">
                <p className="font-body text-label-caps uppercase tracking-widest text-on-surface-variant">
                  Live Unit Snapshot
                </p>
                <div className="grid flex-1 grid-cols-2 gap-md md:grid-cols-4">
                  {BUSINESS.fleetSnapshot.map((metric) => (
                    <div
                      key={metric.label}
                      className="glass flex flex-col justify-between rounded-xl border border-outline-variant/30 bg-surface-container-low p-sm sm:p-md"
                    >
                      <MaterialIcon
                        name={metric.icon}
                        className="mb-sm text-lg text-primary"
                      />
                      <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant">
                        {metric.label}
                      </p>
                      <p className="mt-xs font-data text-sm text-secondary">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="glass hidden shrink-0 items-center justify-between rounded-xl border border-outline-variant/30 bg-surface-container-low px-lg py-md lg:flex">
                  <div className="flex items-center gap-md">
                    <MaterialIcon
                      name="check_circle"
                      className="text-secondary"
                    />
                    <span className="font-body text-sm text-on-surface-variant">
                      No temperature excursions in the last 48 hours
                    </span>
                  </div>
                  <span className="font-data text-xs text-on-surface-variant">
                    Last updated: NOW
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-hover flex min-h-0 flex-col rounded-2xl border border-outline-variant/30 bg-surface-container-high p-lg lg:max-h-full lg:h-full">
              <h4 className="shrink-0 font-display text-lg text-headline-md">
                System Specs
              </h4>
              <ul className="specs-scroll mt-md min-h-0 flex-1 space-y-md overflow-visible pr-1 lg:overflow-y-auto lg:overscroll-contain lg:max-h-none">
                {BUSINESS.equipment.map((spec, i) => (
                  <li key={spec.label} className="group">
                    <div className="mb-xs flex items-center gap-sm">
                      <MaterialIcon
                        name={specIcons[i] ?? "info"}
                        className="text-primary transition-transform group-hover:scale-110"
                      />
                      <span className="font-body text-[10px] uppercase tracking-widest text-primary">
                        {spec.label}
                      </span>
                    </div>
                    <p className="pl-8 text-sm text-on-surface-variant">
                      {spec.value}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-md shrink-0 border-t border-outline-variant/30 pt-md">
                <Image
                  src="/images/ops-center.png"
                  alt="Logistics control center with fleet monitoring"
                  width={400}
                  height={128}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="shimmer h-32 w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
