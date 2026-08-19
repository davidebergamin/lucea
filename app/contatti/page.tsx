import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { contact, fitList } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Parlatemi di voi. Contatta Lucea per fotografia e video di matrimonio a Milano, Lombardia, Italia ed estero.",
  alternates: { canonical: "/contatti" }
};

export default function ContattiPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <section className="page-block">
          <div className="page-block-inner page-block-inner--narrow stack align-start">
            <h1 className="page-title">
              Parlatemi di <span className="accent">voi</span>
            </h1>
            <p className="body-copy serif-lead">
              Leggerò ogni vostra parola, vi risponderò al più presto, solitamente nel giro di poche ore.
            </p>
            <p className="body-copy">Niente di impegnativo, giusto uno scambio con me.</p>
            <p className="andrea-sign">Andrea</p>
            <p className="section-cta section-cta--start">
              <a className="btn-whatsapp" href={contact.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btn-outline" href={contact.phoneHref}>
                {contact.phone}
              </a>
            </p>
            <ContactForm compact />
          </div>
        </section>

        <section className="page-block page-block--tight" aria-labelledby="fit-title">
          <div className="page-block-inner page-block-inner--narrow stack align-start">
            <h2 id="fit-title" className="section-title">
              Potremmo essere i fotografi giusti per voi se preferite{" "}
              <span className="accent">ridere</span> che recitare
            </h2>
            <ul className="fit-list">
              {fitList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
