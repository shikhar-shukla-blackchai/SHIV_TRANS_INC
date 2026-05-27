import { LegalLayout } from "@/components/LegalLayout";
import { CONTACT } from "@/lib/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Shiv Trans Inc",
  description:
    "Terms of Service for Shiv Trans Inc carrier and freight services.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <p className="text-sm text-on-surface-variant">
        Last updated: May 27, 2026
      </p>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          Agreement
        </h2>
        <p>
          By accessing this website or engaging Shiv Trans Inc for freight
          services, you agree to these Terms of Service. If you do not agree,
          please do not use our site or services.
        </p>
      </section>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          Services
        </h2>
        <p>
          Shiv Trans Inc provides temperature-controlled (reefer) and dry van
          motor carrier services as an authorized interstate and intrastate
          carrier operating under applicable FMCSA regulations. Specific terms
          for each shipment — including rates, equipment, temperature
          requirements, and delivery windows — are set forth in the rate
          confirmation or broker/carrier agreement for that load.
        </p>
      </section>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          Shipper &amp; Broker Responsibilities
        </h2>
        <ul className="list-disc space-y-sm pl-md">
          <li>
            Provide accurate load details, including commodity, weight,
            temperature set points, and appointment times.
          </li>
          <li>
            Ensure freight is properly packaged, labeled, and ready for pickup at
            the scheduled time.
          </li>
          <li>
            Pay agreed rates per the rate confirmation and applicable payment
            terms.
          </li>
        </ul>
      </section>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          Liability Disclaimer
        </h2>
        <p>
          Carrier liability for cargo loss or damage is governed by applicable
          federal and state law and the terms of the bill of lading, rate
          confirmation, or broker agreement. Shiv Trans Inc maintains cargo and
          liability insurance as disclosed to customers. Website content is
          provided for informational purposes only and does not constitute a
          binding offer until confirmed in writing.
        </p>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHIV TRANS INC DISCLAIMS
          WARRANTIES REGARDING THIS WEBSITE, INCLUDING IMPLIED WARRANTIES OF
          MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WE ARE NOT LIABLE
          FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING FROM USE OF
          THIS SITE.
        </p>
      </section>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          Intellectual Property
        </h2>
        <p>
          All content on this website — including text, logos, and design — is
          owned by Shiv Trans Inc or its licensors and may not be reproduced
          without written permission.
        </p>
      </section>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          Governing Law
        </h2>
        <p>
          These Terms are governed by the laws of the State of California,
          without regard to conflict-of-law principles. Any disputes shall be
          resolved in the courts of Fresno County, California, unless otherwise
          required by applicable federal transportation law.
        </p>
      </section>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          Changes
        </h2>
        <p>
          We may update these Terms from time to time. Continued use of the
          website after changes constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          Contact
        </h2>
        <p>
          Questions about these Terms:{" "}
          <a
            href={CONTACT.mailto}
            className="text-primary transition-colors hover:text-secondary"
          >
            {CONTACT.email}
          </a>{" "}
          · {CONTACT.phone} · {CONTACT.address}
        </p>
      </section>
    </LegalLayout>
  );
}
