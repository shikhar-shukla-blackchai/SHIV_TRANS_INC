import { CONTACT } from "@/lib/contact";
import { MaterialIcon } from "./MaterialIcon";

export function Footer() {
  return (
    <footer
      className="border-t border-outline-variant bg-surface-container-lowest"
      id="company"
    >
      <div className="mx-auto max-w-container-max px-gutter py-xl">
        <div className="mb-xl grid grid-cols-1 gap-xl md:grid-cols-4">
          <div className="space-y-md">
            <div className="font-display text-headline-md text-on-surface">
              SHIV TRANS INC
            </div>
            <p className="text-sm text-on-surface-variant">
              Reefer specialists and local dry load carrier for shippers and
              brokers across the Western United States. Owner-operated from
              Fresno, CA.
            </p>
          </div>
          <div>
            <h5 className="mb-md font-body text-label-caps uppercase tracking-widest text-primary">
              Portals
            </h5>
            <ul className="space-y-sm text-sm text-on-surface-variant">
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Carrier Portal
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Customer Dashboard
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Driver Login
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-md font-body text-label-caps uppercase tracking-widest text-primary">
              Legal
            </h5>
            <ul className="space-y-sm text-sm text-on-surface-variant">
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Privacy Protocol
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#">
                  Fleet API
                </a>
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
            <p className="mt-sm text-sm text-on-surface-variant">
              Available 7 days a week
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-md border-t border-outline-variant/30 pt-lg md:flex-row">
          <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant">
            © 2026 SHIV TRANS INC. REEFER &amp; LOCAL DRY LOADS.
          </p>
          <div className="flex gap-md">
            <MaterialIcon
              name="share"
              className="cursor-pointer text-on-surface-variant transition-colors hover:text-primary"
            />
            <a href={CONTACT.mailto} aria-label="Email Shiv Trans Inc">
              <MaterialIcon
                name="mail"
                className="cursor-pointer text-on-surface-variant transition-colors hover:text-primary"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
