import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { andreaQualities } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Chi siamo: fotografia di matrimonio a Milano con presenza discreta, spirito spontaneo e accoglienza per ogni storia.",
  alternates: { canonical: "/chi-sono" }
};

export default function ChiSonoPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero split">
          <div className="page-hero-inner">
            <div className="page-hero-copy">
              <p className="label">Chi siamo</p>
              <h1 className="page-title">
                Restiamo vicini.
                <br />
                Non mettiamo
                <br />
                <span className="accent">in scena.</span>
              </h1>
              <p className="page-intro">
                Lucea è una presenza tranquilla dentro il matrimonio: abbastanza vicina da vedere quello
                che succede, abbastanza leggera da non trasformare la giornata in un set.
              </p>
            </div>
            <div className="page-hero-photo contain">
              <Image
                src="/photos/ritratto-famiglia-bn.webp"
                alt="Ritratto di famiglia in bianco e nero durante un matrimonio fotografato da Lucea"
                width={1000}
                height={1260}
                sizes="(max-width: 860px) 100vw, 50vw"
                priority
                unoptimized
              />
            </div>
          </div>
        </section>

        <section className="statement-band" aria-label="Valori Lucea">
          <div className="statement-track">
            {andreaQualities.map((quality) => (
              <span key={quality}>{quality}</span>
            ))}
          </div>
          <p className="mini-note">Le parole che devono sentirsi: un sito diretto, umano, spontaneo e professionale.</p>
        </section>

        <section className="content-section">
          <div className="content-inner text-grid centered">
            <div>
              <Image
                src="/photos/navata-bn.webp"
                alt="Sguardo documentario durante una cerimonia fotografata da Lucea"
                width={1000}
                height={1260}
                sizes="(max-width: 860px) 100vw, 45vw"
                unoptimized
              />
            </div>
            <div>
              <p className="label">Presenza discreta</p>
              <h2 className="poster-title">
                Stare vicino
                <br />
                non significa
                <br />
                comandare.
              </h2>
              <p className="body-copy stack-after-title">
                Una presenza discreta non significa stare lontani. Significa capire quando entrare,
                quando sparire e quando lasciare che le persone facciano da sole.
              </p>
              <p className="body-copy stack-after-title">
                Guardiamo quello che accade: sguardi, risate, caos buono, momenti storti inclusi. Le foto
                di rito ci sono, ma senza catena di montaggio.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="content-inner text-grid centered">
            <div>
              <p className="label">Manifesto</p>
              <h2 className="poster-title">
                Qui c&apos;è posto
                <br />
                per ogni
                <br />
                <span className="accent">storia.</span>
              </h2>
            </div>
            <div>
              <p className="body-copy serif-lead">
                Lucea è uno spazio aperto a ogni storia d&apos;amore, identità, cultura e credo. Chiunque voi
                siate, chiunque voi amiate, qui troverete accoglienza.
              </p>
              <p className="body-copy stack-after-title">
                Senza distinzione di etnia, genere, orientamento sessuale, identità, età, abilità o religione.
                Sempre con cura. Sempre con rispetto.
              </p>
              <p className="body-copy stack-after-title">
                Questo vuole essere un luogo sicuro e sereno, in cui potersi esprimere con libertà e spontaneità.
                Se questo per voi conta, siamo sulla stessa lunghezza d&apos;onda.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="content-inner text-grid centered">
            <div>
              <p className="label">Il punto</p>
              <h2 className="poster-title">
                Nelle foto
                <br />
                sarete
                <br />
                <span className="accent">voi.</span>
              </h2>
            </div>
            <div>
              <p className="body-copy serif-lead">
                Il sito deve farvi sentire subito a vostro agio: potete rilassarvi, sfogliare le storie,
                capire se questo sguardo vi assomiglia e scriverci senza pressione.
              </p>
              <p className="stack-after-title">
                <a className="btn-primary" href="/contatti">
                  Parliamo del vostro giorno
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
