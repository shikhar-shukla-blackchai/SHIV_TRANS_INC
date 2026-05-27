import { BUSINESS } from "@/lib/business";
import { MaterialIcon } from "./MaterialIcon";

export function ComplianceStrip() {
  return (
    <section
      className="border-y border-outline-variant/20 bg-surface-container-low py-lg"
      id="compliance"
    >
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="flex flex-wrap justify-center gap-xl opacity-60">
          {BUSINESS.compliance.map((badge) => (
            <div key={badge.label} className="group flex items-center gap-sm">
              <MaterialIcon
                name={badge.icon}
                className="text-on-surface transition-colors group-hover:text-primary"
              />
              <span className="font-body text-label-caps uppercase tracking-widest transition-colors group-hover:text-on-surface">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
