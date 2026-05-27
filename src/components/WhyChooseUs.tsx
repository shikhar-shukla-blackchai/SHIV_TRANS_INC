import { BUSINESS } from "@/lib/business";
import { MaterialIcon } from "./MaterialIcon";

export function WhyChooseUs() {
  return (
    <section className="bg-surface-container-low py-xl" id="why-us">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-xl text-center">
          <p className="font-body text-label-caps uppercase tracking-widest text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-sm font-display text-headline-lg text-on-surface">
            Owner-Operator Accountability, Professional Execution
          </h2>
          <p className="mx-auto mt-md max-w-2xl text-on-surface-variant">
            Shippers and brokers choose Shiv Trans Inc because we combine direct
            ownership with disciplined cold-chain operations.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
          {BUSINESS.whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="glass glass-hover rounded-xl border border-outline-variant/30 p-lg"
            >
              <MaterialIcon
                name={item.icon}
                className="mb-md text-3xl text-primary"
              />
              <h3 className="mb-sm font-display text-lg text-on-surface">
                {item.title}
              </h3>
              <p className="text-sm text-on-surface-variant">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
