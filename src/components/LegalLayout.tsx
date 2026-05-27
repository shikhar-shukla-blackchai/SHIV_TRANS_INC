import Link from "next/link";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type LegalLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="mx-auto max-w-3xl px-gutter py-xl">
          <Link
            href="/"
            className="mb-lg inline-block font-body text-label-caps uppercase tracking-widest text-primary transition-colors hover:text-secondary"
          >
            ← Back to Home
          </Link>
          <h1 className="mb-xl font-display text-headline-lg text-on-surface">
            {title}
          </h1>
          <article className="prose-legal space-y-lg text-on-surface-variant">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
