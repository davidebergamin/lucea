import type { Metadata } from "next";
import { JsonLd } from "../../components/JsonLd";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { breadcrumbJsonLd, pageMetadata } from "../../lib/seo";
import { contact, pricingNotes } from "../../lib/site-content";

export const metadata: Metadata = pageMetadata({
  title: "Prezzi fotografo matrimonio Milano",
  description:
    "Quanto costa un fotografo matrimonio a Milano con Lucea: da 950 a 2.400 euro, preventivo su misura per foto, video e album.",
  path: "/prezzi"
});

export default function PrezziPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Quanto può costare", path: "/prezzi" }
          ])}
        />
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
