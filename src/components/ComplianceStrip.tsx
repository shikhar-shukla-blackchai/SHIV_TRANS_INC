import { MaterialIcon } from "./MaterialIcon";

const badges = [
  { icon: "verified_user", label: "DOT AUTHORIZED" },
  { icon: "security", label: "$1M LIABILITY" },
  { icon: "inventory_2", label: "$100K CARGO" },
  { icon: "eco", label: "CARB COMPLIANT" },
  { icon: "workspace_premium", label: "FMCSA SATISFACTORY" },
];

export function ComplianceStrip() {
  return (
    <section
      className="border-y border-outline-variant/20 bg-surface-container-low py-lg"
      id="compliance"
    >
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="flex flex-wrap justify-center gap-xl opacity-60">
          {badges.map((badge) => (
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
