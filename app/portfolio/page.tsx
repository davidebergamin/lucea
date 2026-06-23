import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { portfolioImages } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio matrimoni Lucea: fotografie reportage a Milano e in Lombardia, senza pose forzate e senza matrimonio trasformato in set.",
  alternates: { canonical: "/portfolio" }
};

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="poster-section warm" aria-labelledby="portfolio-title">
          <div className="poster-inner">
            <p className="label">Portfolio</p>
            <h1 id="portfolio-title" className="poster-title poster-title--wide">
              Raccontiamo il vostro matrimonio
              <br />
              come si è sentito <span className="accent">davvero.</span>
            </h1>
          </div>
        </section>

        <section className="portfolio-copy" aria-label="Approccio portfolio">
          <div className="portfolio-copy-inner">
            <p>I momenti forti.</p>
            <p>I momenti quieti.</p>
            <p>Le persone senza cui non immaginereste la giornata.</p>
            <p className="portfolio-copy-gap">Niente pose rigide.</p>
            <p>Niente matrimonio trasformato in un set.</p>
            <p className="portfolio-copy-lead">Solo fotografie oneste che restano voi anche tra qualche anno.</p>
          </div>
        </section>

        <section className="portfolio-grid" aria-label="Galleria portfolio Lucea">
          {portfolioImages.map((photo) => (
            <figure className={`portfolio-item${photo.tall ? " portfolio-item--tall" : ""}`} key={photo.src}>
              <Image src={photo.src} alt={photo.alt} width={1200} height={photo.tall ? 1600 : 900} sizes="50vw" unoptimized />
            </figure>
          ))}
        </section>

        <section className="poster-section">
          <div className="poster-inner">
            <p className="body-copy serif-lead stack-after-title">
              Volete vedere matrimoni interi, con titolo e racconto? Sono nelle{" "}
              <a className="link-text" href="/storie">
                Storie
              </a>
              .
            </p>
            <p className="section-cta">
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
