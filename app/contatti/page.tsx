import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { contact, fitList } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Lucea per fotografia e video di matrimonio a Milano, Lombardia, Italia ed estero. Form, email e WhatsApp.",
  alternates: { canonical: "/contatti" }
};

export default function ContattiPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="poster-section warm contact-page" aria-labelledby="contatti-title">
          <div className="poster-inner home-contact-grid">
            <p className="label">Contatti</p>
            <h1 id="contatti-title" className="poster-title poster-title--wide">
              Se siete arrivati fin qui,
              <br />
              parliamo di <span className="accent">voi.</span>
            </h1>
            <p className="home-contact-links">
              <a className="btn-primary" href={contact.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="link-text" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
            <ContactForm compact />
          </div>
        </section>

        <section className="fit-band" aria-labelledby="fit-title">
          <div className="fit-band-inner">
            <p className="label">Potremmo essere i fotografi giusti per voi se...</p>
            <h2 id="fit-title" className="poster-title">
              Preferite
              <br />
              <span className="accent">ridere</span>
              <br />
              che recitare.
            </h2>
            <ul className="fit-list stack-after-title">
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
