"use client";

import { CONTACT } from "@/lib/contact";
import { useState } from "react";
import { MaterialIcon } from "./MaterialIcon";

const navLinks = [
  { href: "#fleet", label: "Fleet" },
  { href: "#tech", label: "Technology" },
  { href: "#compliance", label: "Compliance" },
  { href: "#routes", label: "Routes" },
  { href: "#company", label: "Company" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 shadow-sm shadow-primary/5 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-gutter">
        <a
          href="#"
          className="font-display text-headline-md font-black tracking-tighter text-primary"
        >
          SHIV TRANS INC
        </a>

        <div className="hidden items-center gap-lg md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-label-caps uppercase tracking-widest transition-colors ${
                i === 0
                  ? "border-b-2 border-primary pb-1 text-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-md">
          <div className="hidden items-center gap-sm md:flex">
            <MaterialIcon
              name="notifications"
              className="cursor-pointer text-on-surface-variant transition-all duration-300 hover:text-secondary-fixed"
            />
            <MaterialIcon
              name="account_circle"
              className="cursor-pointer text-on-surface-variant transition-all duration-300 hover:text-secondary-fixed"
            />
          </div>
          <a
            href={CONTACT.phoneTel}
            className="hidden bg-primary px-lg py-sm font-body text-label-caps uppercase tracking-widest text-on-primary transition-all active:scale-95 sm:inline-block"
          >
            Contact Dispatch
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-lg p-sm text-on-surface md:hidden"
          >
            <MaterialIcon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-outline-variant/30 bg-surface/95 px-gutter py-md md:hidden">
          <div className="flex flex-col gap-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-label-caps uppercase tracking-widest text-on-surface-variant transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT.phoneTel}
              onClick={() => setMobileOpen(false)}
              className="mt-sm bg-primary px-lg py-sm text-center font-body text-label-caps uppercase tracking-widest text-on-primary"
            >
              Contact Dispatch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
