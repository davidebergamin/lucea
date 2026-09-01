import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import {
  matrimonioReviews,
  matrimonioUrl,
  trustStats
} from "../../lib/site-content";

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
      <main className="page-offset">
        <section className="page-block">
          <div className="page-block-inner stack align-start">
            <h1 className="page-title">
              Le parole
              <br />
              delle coppie
              <br />
              <span className="accent">contano</span>
            </h1>
            <div className="stat-row" aria-label="Dati recensioni Lucea">
              {trustStats.map((stat) => (
                <div className="fact" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span className="label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="stack align-start matrimonio-links">
              <a className="btn-outline" href={matrimonioUrl} target="_blank" rel="noreferrer">
                Leggi tutte le recensioni su Matrimonio.com
              </a>
            </div>
          </div>
        </section>

        <section className="reviews-list-section" aria-labelledby="reviews-list-title">
          <h2 id="reviews-list-title" className="sr-only">
            Recensioni verificate
          </h2>
          <div className="review-pair-list">
            {matrimonioReviews.map((review) => (
              <article className="review-pair" key={`${review.name}-${review.date}`}>
                <figure className="review-pair-photo">
                  <Image
                    src={review.image}
                    alt={review.alt}
                    width={1600}
                    height={1066}
                    sizes="(max-width: 860px) 100vw, 50vw"
                    unoptimized
                  />
                </figure>
                <div className="review-pair-body">
                  <p className="label">
                    {review.name} · {review.date}
                  </p>
                  <h3>{review.headline}</h3>
                  <p className="body-copy">{review.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="page-block">
          <div className="page-block-inner stack align-start">
            <h2 className="section-title">
              Raccontate il vostro <span className="accent">giorno</span>
            </h2>
            <p className="section-cta section-cta--start">
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
