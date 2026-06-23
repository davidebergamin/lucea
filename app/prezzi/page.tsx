import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { contact, faqs, pricingNotes } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Prezzi",
  description:
    "Prezzi fotografia matrimonio Lucea a Milano: servizi da 900 a 2.300 euro, preventivo su misura per foto, video e album.",
  alternates: { canonical: "/prezzi" }
};

export default function PrezziPage() {
  const pricingFaqs = faqs.filter((item) =>
    ["Quanto costa un servizio matrimonio?", "Offrite anche foto e video?"].includes(item.question)
  );

  return (
    <>
      <SiteHeader />
      <main>
        <section className="poster-section warm" aria-labelledby="prezzi-title">
          <div className="poster-inner">
            <p className="label">Prezzi</p>
            <h1 id="prezzi-title" className="poster-title">
              Trasparenza,
              <br />
              senza listino
              <br />
              <span className="accent">rigido.</span>
            </h1>
            <p className="body-copy serif-lead stack-after-title">{pricingNotes.lead}</p>
          </div>
        </section>

        <section className="poster-section" aria-labelledby="range-title">
          <div className="poster-inner">
            <p className="label">Range</p>
            <h2 id="range-title" className="poster-title poster-title--wide">
              {pricingNotes.range}
            </h2>
            <p className="body-copy serif-lead stack-after-title">
              Raccontateci data, luogo, quante persone ci saranno e che tipo di festa avete in mente: prepariamo
              una proposta leggibile.
            </p>
            <ul className="plain-list pricing-list">
              {pricingNotes.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="section-cta">
              <a className="btn-primary" href="/contatti">
                Chiedi un preventivo
              </a>
            </p>
          </div>
        </section>

        <section className="poster-section warm" aria-labelledby="faq-prezzi">
          <div className="poster-inner">
            <p className="label">Domande frequenti</p>
            <h2 id="faq-prezzi" className="poster-title">
              Prima di
              <br />
              <span className="accent">scrivere.</span>
            </h2>
            <div className="faq-grid pricing-faq">
              {pricingFaqs.map((faq) => (
                <article className="faq-card" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p className="body-copy stack-after-title">{faq.answer}</p>
                </article>
              ))}
            </div>
            <p className="home-contact-links stack-after-title">
              <a className="link-text" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <a className="btn-outline" href={contact.whatsapp} target="_blank" rel="noreferrer">
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
