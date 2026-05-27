import { BUSINESS } from "@/lib/business";
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
          {BUSINESS.specializations.map((item) => (
            <div
              key={item.title}
              className={`glass glass-hover group relative h-80 overflow-hidden rounded-2xl p-xl ${
                item.colSpan === 3
                  ? "md:col-span-3"
                  : item.colSpan === 2
                    ? "md:col-span-2"
                    : ""
              }`}
            >
              {(item.colSpan === 2 || item.colSpan === 3) &&
                (item.title.includes("Produce") ||
                  item.title.includes("Multi-temp")) && (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5 opacity-60 transition-opacity duration-700 group-hover:opacity-80" />
              )}
              <div className="relative z-10 flex h-full w-full flex-col justify-between">
                <div className="w-full flex-1 pr-16">
                  <span
                    className={`inline-block rounded px-sm py-xs text-[10px] font-bold transition-all group-hover:brightness-125 ${item.badgeClass}`}
                  >
                    {item.badge}
                  </span>
                  <h3 className="mt-md font-display text-headline-md">
                    {item.title}
                  </h3>
                  <p className="mt-sm w-full text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
                <MaterialIcon
                  name={item.icon}
                  className={`absolute bottom-xl right-xl text-4xl text-primary transition-transform duration-500 ${
                    item.icon === "eco"
                      ? "group-hover:rotate-12"
                      : item.icon === "ac_unit"
                        ? "group-hover:scale-110 text-secondary"
                        : item.icon === "medical_services"
                          ? "group-hover:animate-pulse text-tertiary"
                          : ""
                  }`}
                  filled={"filled" in item ? item.filled : false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
