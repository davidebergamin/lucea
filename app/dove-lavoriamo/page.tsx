import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { contact } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Dove lavoriamo",
  description:
    "Lucea ha base a Milano e fotografa matrimoni in Monza Brianza, Lombardia, Italia e all'estero.",
  alternates: { canonical: "/dove-lavoriamo" }
};

const places = [
  {
    title: "Milano",
    text: "Qui abbiamo sede. Via Arzaga 11, 20146 Milano. Il punto di partenza, non un recinto."
  },
  {
    title: "Monza Brianza",
    text: "La stessa area in cui ci trovate su Matrimonio.com. Matrimoni vicini, stesso modo di esserci."
  },
  {
    title: "Lombardia",
    text: "Ville, colline, laghi, città: vi raggiungiamo dove festeggiate."
  },
  {
    title: "Italia e estero",
    text: "Se il matrimonio è lontano, ne parliamo. Trasferte in Italia e all'estero quando ha senso per voi."
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
            <p className="body-copy serif-lead">
              Con sede a Milano, vi raggiungiamo dove siete. Niente pagine città inventate: questi
              sono i luoghi veri.
            </p>
            <ul className="plain-list">
              {places.map((place) => (
                <li key={place.title}>
                  <strong>{place.title}.</strong> {place.text}
                </li>
              ))}
            </ul>
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
