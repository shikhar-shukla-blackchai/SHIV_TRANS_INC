"use client";

import { BUSINESS } from "@/lib/business";
import { CONTACT } from "@/lib/contact";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MaterialIcon } from "./MaterialIcon";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const enter = loaded
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-32 md:pt-28 md:pb-36">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-truck.png"
          alt="Refrigerated semi truck on coastal highway at night"
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-container-max grid-cols-1 items-center gap-xl px-gutter lg:grid-cols-2">
        <div
          className={`w-full space-y-lg transition-all duration-1000 ease-out ${enter}`}
        >
          <div className="inline-flex items-center gap-sm rounded-full border border-primary/20 bg-primary/10 px-md py-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="font-body text-label-caps uppercase tracking-widest text-primary">
              Live Operations Active
            </span>
          </div>
          <h1 className="font-display text-display-lg leading-tight text-on-surface">
            Temperature-Controlled <br />
            <span className="text-primary">Freight Excellence</span>
          </h1>
          <p className="w-full max-w-lg font-body text-body-lg text-on-surface-variant">
            {BUSINESS.subtitle}. California-based, owner-operated carrier
            specializing in temperature-controlled freight — and local dry van
            loads — from Fresno, CA, the heart of the nation&apos;s most
            productive agricultural corridor.
          </p>
          <div className="flex flex-wrap gap-md pt-md pb-md">
            <a
              href={CONTACT.mailto}
              className="rounded-lg bg-primary-container px-xl py-md font-body text-label-caps uppercase tracking-widest text-on-primary-container shadow-lg shadow-primary/20 transition-all hover:brightness-110"
            >
              Request a Quote
            </a>
            <a
              href="#routes"
              className="rounded-lg border border-outline-variant px-xl py-md font-body text-label-caps uppercase tracking-widest text-on-surface transition-all hover:bg-surface-variant"
            >
              View Service Areas
            </a>
          </div>
        </div>

        <div className="relative hidden h-[500px] lg:block">
          <div
            className={`glass absolute right-0 top-10 w-80 rounded-xl border-l-4 border-primary p-lg shadow-2xl transition-all duration-1000 delay-300 ${enter}`}
          >
            <div className="mb-md flex items-start justify-between">
              <div className="space-y-xs">
                <p className="font-body text-[10px] uppercase text-on-surface-variant">
                  Current Status
                </p>
                <h3 className="font-display text-headline-md text-primary">
                  In Transit
                </h3>
              </div>
              <MaterialIcon
                name="local_shipping"
                className="breath-pulse text-primary"
                filled
              />
            </div>
            <div className="space-y-sm">
              <div className="flex justify-between font-data text-[12px]">
                <span>TEMP SENSOR 01</span>
                <span className="breath-pulse text-secondary">-1.4°F</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-surface-variant">
                <div className="h-full w-3/4 bg-secondary" />
              </div>
            </div>
          </div>

          <div
            className={`glass absolute bottom-10 left-0 w-64 rounded-xl border-t border-primary/20 p-md shadow-2xl transition-all duration-1000 delay-500 ${enter}`}
          >
            <div className="mb-sm flex items-center gap-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <MaterialIcon
                  name="location_on"
                  className="animate-pulse text-primary"
                />
              </div>
              <div>
                <p className="font-body text-[10px] uppercase text-on-surface-variant">
                  Live Tracking
                </p>
                <p className="font-data text-sm">FRESNO, CA</p>
              </div>
            </div>
            <div className="flex h-24 w-full items-center justify-center overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container-low">
              <svg className="h-full w-full p-xs" viewBox="0 0 200 100">
                <path
                  className="draw-path"
                  d="M10,80 Q50,20 100,50 T190,20"
                  fill="none"
                  stroke="#89ceff"
                  strokeDasharray="5,5"
                  strokeWidth="2"
                />
                <circle
                  className="breath-pulse"
                  cx="190"
                  cy="20"
                  r="4"
                  fill="#89ceff"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
