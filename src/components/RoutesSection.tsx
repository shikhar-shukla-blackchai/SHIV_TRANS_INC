import { BUSINESS } from "@/lib/business";

export function RoutesSection() {
  return (
    <section className="py-xl" id="routes">
      <div className="mx-auto mb-xl max-w-container-max px-gutter text-center">
        <h2 className="font-display text-headline-lg">
          Western U.S. Core Routes
        </h2>
        <p className="mx-auto mt-md max-w-2xl text-on-surface-variant">
          {BUSINESS.lanes.intro}
        </p>
        <div className="mx-auto mt-lg grid max-w-3xl grid-cols-1 gap-sm text-left sm:grid-cols-2">
          {BUSINESS.lanes.groups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-outline-variant/30 bg-surface-container-low p-md"
            >
              <p className="font-body text-label-caps uppercase tracking-widest text-primary">
                {group.title}
              </p>
              <p className="mt-xs text-sm text-on-surface-variant">
                {group.routes}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[400px] w-full overflow-hidden bg-surface md:h-[600px]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, #1a2744 0%, #0d1322 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(137,206,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(137,206,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="h-full w-full max-w-4xl" viewBox="0 0 800 600">
            <path
              className="draw-path opacity-50"
              d="M150,250 L200,400 L350,450"
              fill="none"
              stroke="#89ceff"
              strokeDasharray="10,10"
              strokeWidth="3"
            />
            <path
              className="draw-path opacity-50"
              d="M150,250 L100,100"
              fill="none"
              stroke="#5de6ff"
              strokeDasharray="10,10"
              strokeWidth="3"
            />
            <g transform="translate(150,250)">
              <circle className="breath-pulse" r="10" fill="#89ceff" />
              <text
                className="fill-primary font-data text-[10px]"
                textAnchor="middle"
                y="25"
              >
                FRESNO (HUB)
              </text>
            </g>
            <g transform="translate(200,400)">
              <circle className="animate-pulse" r="5" fill="#ffffff" />
              <text
                className="fill-on-surface-variant font-data text-[10px]"
                textAnchor="middle"
                y="15"
              >
                LA / SD
              </text>
            </g>
            <g transform="translate(350,450)">
              <circle className="animate-pulse" r="5" fill="#ffffff" />
              <text
                className="fill-on-surface-variant font-data text-[10px]"
                textAnchor="middle"
                y="15"
              >
                PHOENIX
              </text>
            </g>
            <g transform="translate(100,100)">
              <circle className="animate-pulse" r="5" fill="#ffffff" />
              <text
                className="fill-on-surface-variant font-data text-[10px]"
                textAnchor="middle"
                y="-10"
              >
                SEATTLE
              </text>
            </g>
          </svg>
        </div>

        <div className="glass glass-hover absolute bottom-xl left-4 right-4 grid grid-cols-2 gap-md rounded-xl p-lg md:left-xl md:grid-cols-5 md:right-auto">
          {BUSINESS.lanes.cities.map((label, i) => (
            <p
              key={label}
              className={`font-data text-xs ${i === 0 ? "text-primary" : "text-on-surface-variant"}`}
            >
              {label}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
