import { LegalLayout } from "@/components/LegalLayout";
import { CONTACT } from "@/lib/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Shiv Trans Inc",
  description:
    "Privacy Policy for Shiv Trans Inc — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="text-sm text-on-surface-variant">
        Last updated: May 27, 2026
      </p>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          Introduction
        </h2>
        <p>
          Shiv Trans Inc (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          operates this website to provide information about our refrigerated
          and dry van freight services. This Privacy Policy explains how we
          collect, use, and safeguard information when you visit our site or
          contact us.
        </p>
      </section>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          Information We Collect
        </h2>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc space-y-sm pl-md">
          <li>
            Contact details you voluntarily provide (name, email, phone number,
            company name) when you email or call us.
          </li>
          <li>
            Load-related information you share for quoting or booking (origin,
            destination, commodity, temperature requirements).
          </li>
          <li>
            Technical data such as IP address, browser type, and pages visited,
            collected automatically through standard web server logs or
            analytics tools.
          </li>
          <li>
            Cookies and similar technologies used to improve site performance
            and remember preferences.
          </li>
        </ul>
      </section>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          How We Use Your Information
        </h2>
        <p>We use collected information to:</p>
        <ul className="list-disc space-y-sm pl-md">
          <li>Respond to load inquiries, quotes, and dispatch requests.</li>
          <li>Communicate about shipments, documentation, and billing.</li>
          <li>Improve our website and customer experience.</li>
          <li>Comply with legal and regulatory obligations.</li>
        </ul>
        <p>
          We do not sell your personal information to third parties for marketing
          purposes.
        </p>
      </section>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          Cookies
        </h2>
        <p>
          Our website may use cookies to enable basic functionality and analyze
          traffic. You can control cookies through your browser settings.
          Disabling cookies may affect certain site features.
        </p>
      </section>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          Data Sharing
        </h2>
        <p>
          We may share information with service providers who assist our
          operations (e.g., hosting, email, factoring partners for payment
          processing) under confidentiality obligations. We may also disclose
          information when required by law or to protect our rights and safety.
        </p>
      </section>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          Data Security
        </h2>
        <p>
          We implement reasonable administrative and technical measures to protect
          your information. No method of transmission over the Internet is 100%
          secure; we cannot guarantee absolute security.
        </p>
      </section>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          California Residents
        </h2>
        <p>
          Shiv Trans Inc is based in Fresno, California. California residents
          may have additional rights under the California Consumer Privacy Act
          (CCPA), including the right to request information about data we
          collect and to request deletion of personal information, subject to
          legal exceptions. To exercise these rights, contact us using the
          information below.
        </p>
      </section>

      <section className="space-y-md">
        <h2 className="font-display text-headline-md text-on-surface">
          Contact Us
        </h2>
        <p>
          For questions about this Privacy Policy or your personal information,
          contact us at{" "}
          <a
            href={CONTACT.mailto}
            className="text-primary transition-colors hover:text-secondary"
          >
            {CONTACT.email}
          </a>{" "}
          or {CONTACT.phone}. Mailing address: {CONTACT.address}.
        </p>
      </section>
    </LegalLayout>
  );
}
