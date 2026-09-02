import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";
import { JsonLd } from "../../components/JsonLd";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { breadcrumbJsonLd, pageMetadata } from "../../lib/seo";
import { contact, fitList } from "../../lib/site-content";

export const metadata: Metadata = pageMetadata({
  title: "Contatti fotografo matrimonio Milano",
  description:
    "Scrivi a Lucea: Andrea Mauri, fotografo matrimonio a Milano. WhatsApp, email, form. Niente di impegnativo, uno scambio vero.",
  path: "/contatti"
});

export default function ContattiPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contatti", path: "/contatti" }
          ])}
        />
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
              <a className="btn-whatsapp btn-compact" href={contact.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </p>
            <ContactForm compact />
          </div>
        </section>

        <section className="page-block page-block--tight fit-block" aria-labelledby="fit-title">
          <div className="page-block-inner page-block-inner--narrow stack align-start">
            <p className="fit-kicker">Potremmo essere i fotografi giusti per voi se</p>
            <h2 id="fit-title" className="fit-headline">
              preferite <span className="accent">ridere</span> che recitare
            </h2>
            <p className="fit-also">Ma anche se</p>
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
