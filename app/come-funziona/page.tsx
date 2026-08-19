import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { comeFunzionaSteps, contact, faqs, services } from "../../lib/site-content";

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
                  <p className="come-funziona-step-index">{String(index + 1).padStart(2, "0")}</p>
                  <div className="stack">
                    <p className="step-kicker">{step.kicker}</p>
                    <h2>{step.title}</h2>
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
          </div>
        </section>

        <figure className="media-full">
          <Image
            src="/media/images/root/lucea-matrimonio-home-016.webp"
            alt="Un gesto di cura durante i preparativi"
            width={2000}
            height={1333}
            sizes="100vw"
            unoptimized
          />
        </figure>

        <section className="page-block">
          <div className="page-block-inner stack align-start">
            <h2 className="section-title">
              Foto, video, album.
              <br />
              Solo ciò che <span className="accent">desiderate</span>
            </h2>
            <p className="body-copy serif-lead">
              Un solo fotografo per un matrimonio intimo, oppure uno staff con più operatori. La
              stampa delle foto durante la festa, un quadro, un album, drone o photocall quando li
              concordiamo. Scegliamo insieme.
            </p>
            <ul className="plain-list">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <p className="body-copy">
              I servizi partono da 900 euro e arrivano fino a circa 2.300 euro. Il dettaglio è in{" "}
              <a className="link-text" href="/prezzi">
                Quanto può costare
              </a>
              . Lavoriamo da Milano, in{" "}
              <a className="link-text" href="/dove-lavoriamo">
                Monza Brianza, Lombardia e in trasferta
              </a>
              .
            </p>
          </div>
        </section>

        <section className="page-block page-block--tight">
          <div className="page-block-inner stack align-start">
            <h2 className="section-title">
              Domande prima di <span className="accent">scrivere</span>
            </h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <article className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p className="body-copy">{faq.answer}</p>
                </article>
              ))}
            </div>
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
