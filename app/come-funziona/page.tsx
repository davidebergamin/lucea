import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { faqs, services } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Come funziona",
  description:
    "Metodo, servizi, prezzi, album e video Lucea: fotografia di matrimonio a Milano senza pose forzate, con approccio reportage e presenza discreta.",
  alternates: { canonical: "/come-funziona" }
};

const steps = [
  {
    title: "Prima ci conosciamo",
    text: "Una chiacchierata serve a capire che festa state immaginando, cosa vi mette a disagio e quali foto non volete assolutamente vedere."
  },
  {
    title: "Il giorno del matrimonio restiamo vicini",
    text: "Seguiamo preparativi, cerimonia, aperitivo e festa senza trasformare la giornata in un set fotografico."
  },
  {
    title: "Le foto di rito ci sono",
    text: "Famiglia e parenti sono importanti. Le foto si fanno, ma con ritmo umano, senza catena di montaggio."
  },
  {
    title: "Il racconto resta vostro",
    text: "La consegna diventa un racconto completo: foto, eventuale video, album e gallery privata quando previsti dal servizio."
  }
];

export default function ComeFunzionaPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero split">
          <div className="page-hero-inner">
            <div className="page-hero-copy">
              <p className="label">Come funziona</p>
              <h1 className="page-title">
                Godetevi
                <br />
                la festa.
                <br />
                Ai ricordi
                <br />
                ci pensiamo <span className="accent">noi.</span>
              </h1>
              <p className="page-intro">
                Niente pose forzate, niente ore rubate agli invitati, nessuna recita. Un approccio tranquillo
                e amichevole per raccontare la giornata esattamente così come accade.
              </p>
              <div className="proof-strip">
                <span>foto di rito sì</span>
                <span>zero catena di montaggio</span>
                <span>video e album</span>
              </div>
            </div>
            <div className="page-hero-photo">
              <Image
                src="/photos/aperitivo-sposi.webp"
                alt="Sposi e invitati durante un aperitivo spontaneo fotografato da Lucea"
                width={1600}
                height={1066}
                sizes="(max-width: 860px) 100vw, 50vw"
                priority
                unoptimized
              />
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="content-inner">
            <div className="service-grid">
              {steps.map((step) => (
                <article className="service-card" key={step.title}>
                  <p className="label">Metodo</p>
                  <h2>{step.title}</h2>
                  <p className="body-copy stack-after-title">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <figure className="full-photo">
          <Image
            src="/photos/festa-sposa-alzata.webp"
            alt="Sposa alzata dagli amici durante una festa di matrimonio fotografata da Lucea"
            width={1600}
            height={1066}
            sizes="100vw"
            unoptimized
          />
        </figure>

        <section className="content-section warm">
          <div className="content-inner text-grid">
            <div>
              <p className="label">Cosa possiamo aggiungere</p>
              <h2 className="poster-title">
                Foto,
                <br />
                video,
                <br />
                album.
              </h2>
            </div>
            <div>
              <p className="body-copy serif-lead">
                La base resta il racconto fotografico. Poi si possono aggiungere film del matrimonio,
                prematrimonio, postmatrimonio, album, gallery privata e servizi extra quando servono davvero.
              </p>
              <ul className="plain-list">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="content-inner text-grid centered">
            <div>
              <p className="label">Prezzi</p>
              <h2 className="poster-title">
                Trasparenza,
                <br />
                senza listino
                <br />
                rigido.
              </h2>
            </div>
            <div>
              <p className="body-copy serif-lead">
                I servizi matrimonio partono da 900 euro e arrivano fino a circa 2.300 euro.
                Il preventivo cambia in base a durata, video, album,
                trasferta e richieste.
              </p>
              <p className="body-copy stack-after-title">
                In pratica: raccontateci che festa avete in mente, poi prepariamo una proposta leggibile.
              </p>
              <p className="stack-after-title">
                <a className="btn-primary" href="/contatti">
                  Chiedi un preventivo
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="content-section warm">
          <div className="content-inner">
            <p className="label">FAQ</p>
            <h2 className="poster-title">
              Domande
              <br />
              prima di
              <br />
              scrivere.
            </h2>
            <div className="faq-grid">
              {faqs.map((faq) => (
                <article className="faq-card" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p className="body-copy stack-after-title">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
