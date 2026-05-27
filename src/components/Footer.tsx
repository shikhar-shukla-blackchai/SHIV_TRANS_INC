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
              Precision cold-chain logistics for shippers and brokers across the
              Western United States. Owner-operated from Fresno, CA.
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
              {/* Update with real phone before go-live */}
              Operations: Contact via dispatch
            </p>
            <p className="text-sm text-on-surface-variant">
              {/* Update with real email before go-live */}
              Dispatch: Available 7 days a week
            </p>
            <p className="mt-md text-sm text-on-surface-variant">
              Fresno, CA 93706
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-md border-t border-outline-variant/30 pt-lg md:flex-row">
          <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant">
            © 2026 SHIV TRANS INC. PRECISION COLD-CHAIN SYSTEMS.
          </p>
          <div className="flex gap-md">
            <MaterialIcon
              name="share"
              className="cursor-pointer text-on-surface-variant transition-colors hover:text-primary"
            />
            <MaterialIcon
              name="mail"
              className="cursor-pointer text-on-surface-variant transition-colors hover:text-primary"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
