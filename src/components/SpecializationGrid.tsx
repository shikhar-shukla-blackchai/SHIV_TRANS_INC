import { MaterialIcon } from "./MaterialIcon";

export function SpecializationGrid() {
  return (
    <section className="bg-surface-container-lowest py-xl">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-xl space-y-sm text-center">
          <p className="font-body text-label-caps uppercase tracking-widest text-primary">
            Our Specialization
          </p>
          <h2 className="font-display text-headline-lg">
            Freight That Requires Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-md md:grid-cols-3">
          <div className="glass glass-hover group relative h-80 overflow-hidden rounded-2xl p-xl md:col-span-2">
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40">
              <div className="h-full w-full bg-gradient-to-br from-secondary/20 to-primary/10" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <span className="rounded bg-secondary/20 px-sm py-xs text-[10px] font-bold text-secondary transition-all group-hover:brightness-125">
                  TARGET: 32°F – 40°F
                </span>
                <h3 className="mt-md font-display text-headline-md">
                  Fresh Produce &amp; Berries
                </h3>
                <p className="mt-sm w-full max-w-sm text-on-surface-variant">
                  San Joaquin Valley harvest routes — grapes, stone fruit,
                  citrus, leafy greens, and berries with tight temperature
                  windows.
                </p>
              </div>
              <MaterialIcon
                name="eco"
                className="text-4xl text-primary transition-transform duration-500 group-hover:rotate-12"
              />
            </div>
          </div>

          <div className="glass glass-hover group relative h-80 overflow-hidden rounded-2xl p-xl">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <span className="rounded bg-error-container/20 px-sm py-xs text-[10px] font-bold text-error transition-all group-hover:brightness-125">
                  TARGET: 0°F OR BELOW
                </span>
                <h3 className="mt-md font-display text-headline-md">
                  Frozen Commodities
                </h3>
                <p className="mt-sm text-sm text-on-surface-variant">
                  Blast-frozen proteins, ice cream, and frozen meals with zero
                  tolerance for excursions.
                </p>
              </div>
              <MaterialIcon
                name="ac_unit"
                className="text-4xl text-secondary transition-transform duration-500 group-hover:scale-110"
                filled
              />
            </div>
            <div className="absolute bottom-0 right-0 h-24 w-24 bg-secondary/10 blur-3xl" />
          </div>

          <div className="glass glass-hover group relative h-80 overflow-hidden rounded-2xl p-xl">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <span className="rounded bg-primary/20 px-sm py-xs text-[10px] font-bold text-primary transition-all group-hover:brightness-125">
                  TARGET: VARIABLE
                </span>
                <h3 className="mt-md font-display text-headline-md">
                  Floral &amp; Pharmaceuticals
                </h3>
                <p className="mt-sm text-sm text-on-surface-variant">
                  Precision temperature profiles where a single-degree deviation
                  can destroy product value.
                </p>
              </div>
              <MaterialIcon
                name="medical_services"
                className="text-4xl text-tertiary group-hover:animate-pulse"
              />
            </div>
          </div>

          <div className="glass glass-hover group relative h-80 overflow-hidden rounded-2xl p-xl md:col-span-2">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-headline-md">
                    Multi-temp &amp; Dairy
                  </h3>
                  <p className="mt-sm max-w-md text-on-surface-variant">
                    Dual-zone configurations for mixed loads — dairy, eggs, and
                    consolidated freight without cross-contamination.
                  </p>
                </div>
                <div className="space-y-xs text-right">
                  <div className="font-data text-xs text-secondary transition-all group-hover:brightness-125">
                    ZONE A: 34°F
                  </div>
                  <div className="font-data text-xs text-primary transition-all group-hover:brightness-125">
                    ZONE B: -5°F
                  </div>
                </div>
              </div>
              <div className="flex gap-md">
                <MaterialIcon
                  name="egg"
                  className="text-4xl text-on-surface-variant transition-colors group-hover:text-primary"
                />
                <MaterialIcon
                  name="local_drink"
                  className="text-4xl text-on-surface-variant transition-colors group-hover:text-secondary"
                />
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
