import type { Metadata } from "next";
import { JsonLd } from "../../components/JsonLd";
import { PhotoLightbox } from "../../components/PhotoLightbox";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { breadcrumbJsonLd, pageMetadata } from "../../lib/seo";
import { portfolioImages } from "../../lib/site-content";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio fotografia matrimonio Milano",
  description:
    "Portfolio Lucea: reportage di matrimonio a Milano, discrezione e spontaneità. Fotografie intere, niente set.",
  path: "/portfolio"
});

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" }
          ])}
        />
        <section className="page-block page-block--intro portfolio-intro" aria-labelledby="portfolio-title">
          <div className="portfolio-intro-inner">
            <h1 id="portfolio-title" className="sr-only">
              Portfolio Lucea
            </h1>
            <p className="portfolio-words">
              discrezione leggerezza spontaneità semplicità delicatezza ironia ritmo.
            </p>
            <p className="portfolio-racconto">Racconto.</p>
            <p className="portfolio-line">I momenti forti e quelli tranquilli.</p>
            <p className="portfolio-line">Le risate e le lacrime.</p>
            <p className="portfolio-line">
              Le persone senza le quali quella giornata non sarebbe stata la stessa.
            </p>
            <p className="portfolio-line">
              Niente pose rigide, niente matrimonio trasformato in un set.
            </p>
            <p className="portfolio-line">Solo fotografie che parlano di voi, nel tempo.</p>
          </div>
        </section>

        <PhotoLightbox photos={portfolioImages} />

        <section className="page-block page-block--tight">
          <div className="page-block-inner stack align-start">
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
