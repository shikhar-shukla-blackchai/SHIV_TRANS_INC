import Image from "next/image";
import { MaterialIcon } from "./MaterialIcon";

const specs = [
  {
    icon: "settings_input_component",
    label: "Thermo King Precedent S-600 Series",
  },
  { icon: "sensors", label: "24/7 Satellite Remote Monitoring" },
  { icon: "shield", label: "Redundant Cooling Backups" },
  { icon: "history", label: "Electronic Temp Log Audits" },
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
          <div className="relative z-10 grid grid-cols-1 gap-xl lg:grid-cols-3">
            <div className="space-y-lg lg:col-span-2">
              <h2 className="font-display text-headline-lg">
                Fleet Management Dashboard
              </h2>
              <div className="h-64 w-full rounded-2xl border border-outline-variant/30 bg-surface-container p-lg">
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
                <svg className="h-40 w-full" viewBox="0 0 800 150">
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
              <div className="grid grid-cols-3 gap-md">
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
            </div>

            <div className="glass-hover space-y-md rounded-2xl border border-outline-variant/30 bg-surface-container-high p-lg">
              <h4 className="font-display text-lg text-headline-md">
                System Specs
              </h4>
              <ul className="space-y-md">
                {specs.map((spec) => (
                  <li key={spec.label} className="group flex items-center gap-md">
                    <MaterialIcon
                      name={spec.icon}
                      className="text-primary transition-transform group-hover:scale-110"
                    />
                    <span className="text-sm text-on-surface-variant">
                      {spec.label}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-outline-variant/30 pt-md">
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
