import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { comeFunzionaClose, comeFunzionaSteps, contact, faqs, services } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Come funziona",
  description:
    "Dal primo pensiero al giorno del matrimonio: come lavora Lucea a Milano. Foto, video, album, stampa sul posto. Niente set.",
  alternates: { canonical: "/come-funziona" }
};

export default function ComeFunzionaPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <section className="page-block">
          <div className="page-block-inner stack align-start">
            <h1 className="page-title">
              Dal primo pensiero al giorno del matrimonio… e <span className="accent">oltre</span>
            </h1>
            <p className="page-intro">
              Voi state immaginando quel giorno. Noi pensiamo a come potrete riviverlo. Vogliamo
              raccontare la vostra storia, creare un ricordo vivo: vogliamo farvi stare bene. È qui
              che comincia il viaggio: scriveteci, chiamateci, chiedeteci tutto quello che vorreste
              sapere.
            </p>
          </div>
        </section>

        <figure className="media-full">
          <Image
            src="/media/images/root/lucea-matrimonio-home-005.webp"
            alt="Preparativi in una cucina, vita vera prima del matrimonio"
            width={2000}
            height={1333}
            sizes="100vw"
            priority
            unoptimized
          />
        </figure>

        <section className="page-block">
          <div className="page-block-inner">
            <div className="come-funziona-steps">
              {comeFunzionaSteps.map((step, index) => (
                <article className="come-funziona-step" key={step.title}>
                  <p className="come-funziona-step-index">{index + 1}.</p>
                  <div className="stack">
                    <h2 className="come-funziona-step-concept">{step.title}</h2>
                    <p className="come-funziona-step-slogan">{step.kicker}</p>
                    <p className="body-copy">{step.text}</p>
                    {step.cta ? (
                      <p>
                        <a className="btn-primary" href={step.cta.href}>
                          {step.cta.label}
                        </a>
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <div className="come-funziona-close stack">
              <p className="come-funziona-close-slogan">{comeFunzionaClose.kicker}</p>
              <p className="body-copy">{comeFunzionaClose.text}</p>
              <p>
                <a className="btn-primary" href={comeFunzionaClose.cta.href}>
                  {comeFunzionaClose.cta.label}
                </a>
              </p>
            </div>
          </div>
        </section>

        <figure className="media-full">
          <Image
            src="/media/images/lucea-miscellaneous/lucea-miscellaneous-lucea-matrimoni-miscellaneous-022.webp"
            alt="Momento di festa durante un matrimonio, reportage Lucea"
            width={2000}
            height={1333}
            sizes="100vw"
            unoptimized
          />
        </figure>

        <section className="page-block page-block--tight">
          <div className="page-block-inner stack align-start">
            <h2 className="section-title">FAQ</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <article className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p className="body-copy">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <figure className="media-full">
          <Image
            src="/media/images/lucea-miscellaneous/lucea-miscellaneous-lucea-matrimoni-miscellaneous-015.webp"
            alt="Dettaglio di un matrimonio in reportage, Lucea"
            width={2000}
            height={1333}
            sizes="100vw"
            unoptimized
          />
        </figure>

        <section className="page-block">
          <div className="page-block-inner stack align-start">
            <h2 className="section-title section-title--services">
              Foto, video, album.
              <br />
              Solo ciò che desiderate <span className="accent">voi</span>.
            </h2>
            <ul className="plain-list">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <p className="services-price">
              Pacchetti da 950 euro a 2400: oppure personalizziamo il tuo servizio su misura
            </p>
            <p className="body-copy">
              Da Milano a dove siete voi, senza confini. Il dettaglio è in{" "}
              <a className="link-text" href="/prezzi">
                Quanto può costare
              </a>
              .
            </p>
            <p className="section-cta section-cta--start">
              <a className="btn-primary" href="/contatti">
                Parliamo del vostro giorno
              </a>
              <a className="btn-whatsapp" href={contact.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
