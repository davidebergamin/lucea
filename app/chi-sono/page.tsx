import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Chi è LUCEA",
  description:
    "Dietro LUCEA c'è Andrea: fotografia di matrimonio leggera, gentile, reale. Qui c'è posto per ogni storia.",
  alternates: { canonical: "/chi-sono" }
};

export default function ChiSonoPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <section className="page-block">
          <div className="page-block-inner page-block-inner--narrow stack align-start">
            <h1 className="page-title chi-sono-lead-title">
              Fotografiamo matrimoni
              <br />
              Raccontiamo <span className="accent">persone</span>
            </h1>
            <div className="chi-sono-intro">
              <p>LUCEA è fotografia di matrimonio.</p>
              <p>Leggera, gentile, reale.</p>
              <p>
                Dietro LUCEA ci sono io, Andrea: quello che risponde ai vostri messaggi, che vi
                incontra, che viene al matrimonio e che crea con cura il vostro ricordo.
              </p>
              <p>
                Lavoro da solo, se volete vivere quel giorno con semplicità, ma più spesso
                lavoriamo in staff con colleghi fotografi e operatori video: Luciano, Yuki, Luca,
                Lorenzo, che condividono lo spirito di LUCEA. Discrezione, leggerezza, disponibilità
                e spontaneità.
              </p>
              <p>
                Non vogliamo soltanto la bella immagine: cerchiamo quell&apos;emozione che avete
                vissuto e che potrete rivivere in futuro.
              </p>
            </div>
          </div>
        </section>

        <section className="page-block page-block--tight">
          <div className="page-block-inner page-block-inner--narrow stack align-start manifesto">
            <p className="label">Il nostro impegno per l&apos;uguaglianza nella diversità</p>
            <h2 className="page-title">
              Qui c&apos;è posto per ogni <span className="accent">storia</span>
            </h2>

            <p className="body-copy serif-lead manifesto-lead">
              LUCEA è uno spazio aperto a ogni storia d&apos;amore, identità, cultura e credo.
            </p>

            <div className="manifesto-lines" role="presentation">
              <p>Chiunque voi siate, chiunque voi amiate, qui troverete accoglienza.</p>
            </div>

            <p className="body-copy">
              C&apos;è posto per ogni persona, senza distinzione di etnia, genere, orientamento
              sessuale, identità, età, abilità o religione. Sempre con cura. Sempre con rispetto.
            </p>

            <div className="manifesto-lines" role="presentation">
              <p>Questo vuole essere un luogo sicuro, sereno.</p>
              <p>Un porto in cui esprimersi in totale libertà e spontaneità.</p>
            </div>

            <p className="body-copy serif-lead manifesto-close">
              Se questo per voi conta, siamo sulla stessa lunghezza d&apos;onda.
            </p>
          </div>
        </section>

        <figure className="media-full">
          <Image
            src="/media/images/root/lucea-matrimonio-home-018.webp"
            alt="Momento intimo durante i preparativi di un matrimonio"
            width={2000}
            height={1333}
            sizes="100vw"
            unoptimized
          />
        </figure>

        <section className="page-block">
          <div className="page-block-inner page-block-inner--narrow stack align-start">
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
