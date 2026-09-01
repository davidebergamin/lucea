import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { contact } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Dove lavoriamo",
  description:
    "Lucea ha base a Milano e fotografa matrimoni in Lombardia, Italia e all'estero.",
  alternates: { canonical: "/dove-lavoriamo" }
};

const places = [
  {
    title: "Milano",
    text: "Qui abbiamo sede. Via Arzaga 11, 20146 Milano. Il punto di partenza, non un recinto."
  },
  {
    title: "Lombardia",
    text: "Ville, colline, laghi, città, cascine, prati, spiagge, cime: ogni luogo è una magia per il vostro matrimonio e per le nostre foto."
  },
  {
    title: "Italia e estero",
    text: "Se il matrimonio è lontano, vi seguiamo anche in viaggio."
  }
];

export default function DoveLavoriamoPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <section className="page-block">
          <div className="page-block-inner stack align-start">
            <h1 className="page-title">
              Dove <span className="accent">lavoriamo</span>
            </h1>
            <p className="body-copy serif-lead">Con sede a Milano, vi raggiungiamo dove siete.</p>
            <ul className="plain-list">
              {places.map((place) => (
                <li key={place.title}>
                  <strong>{place.title}.</strong> {place.text}
                </li>
              ))}
            </ul>
            <p className="section-cta section-cta--start">
              <a className="btn-primary" href="/contatti">
                Diteci dove vi sposate
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
