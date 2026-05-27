import { BUSINESS } from "@/lib/business";
import { CONTACT } from "@/lib/contact";
import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "./MaterialIcon";

export function Footer() {
  return (
    <footer
      className="border-t border-outline-variant bg-surface-container-lowest"
      id="company"
    >
      <div className="mx-auto max-w-container-max px-gutter py-xl">
        <div className="mb-xl grid grid-cols-1 gap-xl md:grid-cols-3">
          <div className="space-y-md">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Shiv Trans Inc"
                width={160}
                height={44}
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-sm text-on-surface-variant">
              Reefer specialists and local dry load carrier for shippers and
              brokers across the Western United States. Owner-operated from
              Fresno, CA.
            </p>
            <p className="text-xs text-on-surface-variant">
              {BUSINESS.footerTagline}
            </p>
          </div>
          <div>
            <h5 className="mb-md font-body text-label-caps uppercase tracking-widest text-primary">
              Legal
            </h5>
            <ul className="space-y-sm text-sm text-on-surface-variant">
              <li>
                <Link
                  className="transition-colors hover:text-primary"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-primary"
                  href="/terms"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-md font-body text-label-caps uppercase tracking-widest text-primary">
              Contact
            </h5>
            <p className="mb-xs text-sm text-on-surface-variant">
              <a
                href={CONTACT.phoneTel}
                className="transition-colors hover:text-primary"
              >
                {CONTACT.phone}
              </a>
            </p>
            <p className="text-sm text-on-surface-variant">
              <a
                href={CONTACT.mailto}
                className="transition-colors hover:text-primary"
              >
                {CONTACT.email}
              </a>
            </p>
            <p className="mt-md text-sm text-on-surface-variant">
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                {CONTACT.address}
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-md border-t border-outline-variant/30 pt-lg md:flex-row">
          <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant">
            © 2026 SHIV TRANS INC. REEFER &amp; LOCAL DRY LOADS.
          </p>
          <a href={CONTACT.mailto} aria-label="Email Shiv Trans Inc">
            <MaterialIcon
              name="mail"
              className="cursor-pointer text-on-surface-variant transition-colors hover:text-primary"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
