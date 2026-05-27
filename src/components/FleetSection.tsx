import Image from "next/image";
import { MaterialIcon } from "./MaterialIcon";

export function FleetSection() {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl" id="fleet">
      <div className="grid grid-cols-1 items-center gap-xl lg:grid-cols-2">
        <div className="group relative overflow-hidden rounded-2xl">
          <Image
            src="/images/reefer-unit.png"
            alt="Thermo King refrigerated trailer unit display"
            width={800}
            height={800}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-video w-full object-cover transition-transform duration-1000 group-hover:scale-110 lg:aspect-square"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
          <div className="glass absolute bottom-lg left-lg rounded-lg p-md">
            <p className="font-data text-sm text-secondary">
              OPERATIONAL INTEGRITY
            </p>
            <p className="font-display text-headline-md text-on-surface">
              Thermo King Pre-Trip Validated
            </p>
          </div>
        </div>

        <div className="space-y-lg">
          <h2 className="font-display text-headline-lg text-on-surface">
            Built by Operators Who <br />
            <span className="text-primary">Understand the Cold Chain</span>
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant">
            Based in Fresno, California, Shiv Trans Inc is an owner-operated
            logistics powerhouse running authority under our own MC# and DOT
            number. We don&apos;t just move freight — we manage environmental
            stability for high-consequence cargo with pre-trip inspection,
            confirmed set points, and continuous temperature logging.
          </p>
          <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
            <div className="glass-hover rounded-xl border border-outline-variant/30 bg-surface-container-low p-md">
              <MaterialIcon
                name="verified"
                className="mb-sm animate-pulse text-primary"
              />
              <h4 className="mb-xs font-display text-lg text-on-surface">
                Authorized Carrier
              </h4>
              <p className="text-sm text-on-surface-variant">
                Full MC#/DOT credentials with a dedicated safety monitoring
                team.
              </p>
            </div>
            <div className="glass-hover rounded-xl border border-outline-variant/30 bg-surface-container-low p-md">
              <MaterialIcon
                name="thermostat"
                className="mb-sm breath-pulse text-primary"
              />
              <h4 className="mb-xs font-display text-lg text-on-surface">
                Temp Discipline
              </h4>
              <p className="text-sm text-on-surface-variant">
                Strict pre-cooling protocols and real-time remote telemetry on
                every load.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
