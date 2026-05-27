import { BUSINESS } from "@/lib/business";
import { CONTACT } from "@/lib/contact";
import Image from "next/image";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-xl">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-truck.png"
          alt="Refrigerated truck at night"
          fill
          sizes="100vw"
          className="ken-burns object-cover"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>
      <div className="relative z-10 mx-auto max-w-container-max px-gutter py-xl text-center">
        <h2 className="mb-md font-display text-headline-lg">
          Cold chain integrity is not a feature — <br />
          <span className="text-primary">it is our promise.</span>
        </h2>
        <p className="mx-auto mb-xl max-w-2xl font-body text-body-lg text-on-surface-variant">
          Ready to partner with a carrier that values your cargo&apos;s
          environment as much as you do? We move refrigerated freight and local
          dry loads with direct driver ownership, responsive communication, and
          dispatch available 7 days a week.
        </p>
        <div className="flex flex-wrap justify-center gap-md">
          <a
            href={CONTACT.mailto}
            className="rounded-lg bg-primary px-xl py-md font-body text-label-caps uppercase tracking-widest text-on-primary shadow-xl shadow-primary/30 transition-all hover:brightness-110"
          >
            Book a Load
          </a>
          <a
            href={CONTACT.phoneTel}
            className="glass rounded-lg px-xl py-md font-body text-label-caps uppercase tracking-widest text-on-surface transition-all hover:bg-surface-variant"
          >
            Talk to Dispatch
          </a>
        </div>
      </div>
    </section>
  );
}
