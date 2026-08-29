import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { contact, faqs, pricingNotes } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Quanto può costare",
  description:
    "Prezzi fotografia matrimonio Lucea a Milano: servizi da 900 a 2.500 euro, preventivo su misura per foto, video e album.",
  alternates: { canonical: "/prezzi" }
};

export default function PrezziPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <section className="page-block">
          <div className="page-block-inner stack align-start">
            <h1 className="page-title">
              Trasparenza,
              <br />
              senza listino
              <br />
              <span className="accent">rigido</span>
            </h1>
            <p className="body-copy serif-lead">{pricingNotes.lead}</p>
            <p className="price-range">{pricingNotes.range}</p>
            <ul className="plain-list">
              {pricingNotes.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="section-cta section-cta--start">
              <a className="btn-primary" href="/contatti">
                Chiedi un preventivo
              </a>
            </p>
          </div>
        </section>

        <section className="page-block page-block--tight">
          <div className="page-block-inner stack align-start">
            <h2 className="section-title">
              Prima di <span className="accent">scrivere</span>
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
              <a className="link-text" href={`mailto:${contact.email}`}>
                {contact.email}
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
