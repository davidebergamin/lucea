import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { identityWords } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Chi è LUCEA",
  description:
    "Qui c'è posto per ogni storia. LUCEA è uno spazio aperto a ogni storia d'amore, identità, cultura e credo.",
  alternates: { canonical: "/chi-sono" }
};

export default function ChiSonoPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <section className="page-block">
          <div className="page-block-inner stack align-start">
            <h1 className="page-title">
              Qui c&apos;è posto per ogni <span className="accent">storia</span>
            </h1>
            <p className="page-intro">Il nostro impegno per l&apos;uguaglianza nella diversità.</p>
          </div>
        </section>

        <figure className="media-full">
          <Image
            src="/media/images/root/lucea-matrimonio-home-018.webp"
            alt="Momento intimo durante i preparativi di un matrimonio"
            width={2000}
            height={1333}
            sizes="100vw"
            priority
            unoptimized
          />
        </figure>

        <section className="page-block">
          <div className="page-block-inner page-block-inner--narrow stack align-start">
            <Image
              src="/logo/logo-lucea-320.png"
              alt="Logo LUCEA"
              width={88}
              height={88}
              unoptimized
            />
            <p className="body-copy serif-lead">
              LUCEA è uno spazio aperto a ogni storia d&apos;amore, identità, cultura e credo.
            </p>
            <p className="body-copy">
              Chiunque voi siate, chiunque voi amiate, qui troverete accoglienza. C&apos;è posto per
              ogni persona, senza distinzione di etnia, genere, orientamento sessuale, identità,
              età, abilità o religione. Sempre con cura. Sempre con rispetto.
            </p>
            <p className="body-copy">
              Questo vuole essere un luogo sicuro, sereno. Un porto in cui esprimersi in totale
              libertà e spontaneità.
            </p>
            <p className="body-copy">
              Se questo per voi conta, siamo sulla stessa lunghezza d&apos;onda.
            </p>
          </div>
        </section>

        <section className="statement-band" aria-label="Parole Lucea">
          <div className="statement-track">
            {identityWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
        </section>

        <section className="page-block">
          <div className="page-block-inner page-block-inner--narrow stack align-start">
            <h2 className="section-title">
              Una presenza <span className="accent">leggera</span>
            </h2>
            <p className="body-copy serif-lead">
              Una presenza discreta non significa stare lontani. Significa capire quando entrare,
              quando sparire e quando lasciare che le persone facciano da sole.
            </p>
            <p className="section-cta section-cta--start">
              <a className="btn-primary" href="/contatti">
                Parliamo del vostro giorno
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
