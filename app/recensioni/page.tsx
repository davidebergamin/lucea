import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { matrimonioReviews, matrimonioUrl, trustStats } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Recensioni",
  description:
    "Recensioni Lucea su Matrimonio.com: 171 recensioni, 5.0 su 5 e 100% consigliato per fotografia di matrimonio spontanea a Milano.",
  alternates: { canonical: "/recensioni" }
};

export default function RecensioniPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero split">
          <div className="page-hero-inner">
            <div className="page-hero-copy">
              <p className="label">Recensioni</p>
              <h1 className="page-title">
                Le parole
                <br />
                delle coppie
                <br />
                contano.
              </h1>
              <p className="page-intro">
                Recensioni verificate su Matrimonio.com: disponibilità, discrezione, gentilezza e
                professionalità raccontate da chi ha vissuto il matrimonio con noi accanto.
              </p>
            </div>
            <div className="page-hero-photo contain">
              <Image
                src="/photos/bacio-cerimonia.webp"
                alt="Coppia durante un momento intimo della cerimonia fotografato da Lucea"
                width={1100}
                height={760}
                sizes="(max-width: 860px) 100vw, 50vw"
                priority
                unoptimized
              />
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="content-inner split-proof">
            <div>
              <p className="label">Matrimonio.com</p>
              <h2 className="poster-title">
                Fiducia
                <br />
                verificata.
              </h2>
            </div>
            <div>
              <div className="facts-grid" aria-label="Dati recensioni Lucea">
                {trustStats.map((stat) => (
                  <div className="fact" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span className="label">{stat.label}</span>
                  </div>
                ))}
              </div>
              <p className="body-copy stack-after-title">
                171 recensioni, valutazione 5.0 su 5 e 100% consigliato: numeri forti, ma soprattutto
                un modo di lavorare che rassicura coppie e famiglie.
              </p>
              <p className="stack-after-title">
                <a className="btn-outline" href={matrimonioUrl} target="_blank" rel="noreferrer">
                  Leggi tutte su Matrimonio.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="reviews-list-section" aria-labelledby="reviews-list-title">
          <div className="content-inner reviews-list-intro">
            <h2 id="reviews-list-title" className="poster-title">
              Cosa dicono di noi        
            </h2>
          </div>
          <div className="review-story-list">
            {matrimonioReviews.map((review) => (
              <article className="review-story-card" key={`${review.name}-${review.date}`}>
                <figure className="review-story-photo">
                  <Image
                    src={review.image}
                    alt={review.alt}
                    width={1600}
                    height={1066}
                    sizes="100vw"
                    unoptimized
                  />
                </figure>
                <div className="review-story-card-body">
                  <p className="label">
                    {review.name} · {review.date}
                  </p>
                  <h3>{review.headline}</h3>
                  <p className="body-copy stack-after-title">{review.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="content-inner reviews-cta">
            <p className="label">Vi riconoscete?</p>
            <h2 className="poster-title poster-title--wide">
              Raccontate
              <br />
              il vostro
              <br />
              <span className="accent">giorno.</span>
            </h2>
            <p className="body-copy serif-lead reviews-cta-copy">
              Se cercate fotografi di matrimonio a Milano o in Lombardia che lavorino con spontaneità,
              discrezione e attenzione alle persone, scriveteci.
            </p>
            <p className="section-cta">
              <a className="btn-primary" href="/contatti">
                Parliamo del vostro matrimonio
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
