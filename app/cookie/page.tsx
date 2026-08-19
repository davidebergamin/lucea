import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { contact } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Cookie",
  description: "Informativa sui cookie del sito Lucea Fotografie.",
  alternates: { canonical: "/cookie" }
};

export default function CookiePage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <section className="page-block">
          <article className="page-block-inner page-block-inner--narrow stack align-start legal-copy">
            <h1 className="page-title">Cookie</h1>
            <p className="muted-copy">Ultimo aggiornamento: 19 agosto 2026</p>

            <h2 className="section-title">Cosa sono i cookie</h2>
            <p className="body-copy">
              I cookie sono piccoli file di testo che un sito può salvare sul dispositivo durante
              la navigazione. Servono al funzionamento delle pagine, alla memorizzazione di
              preferenze o, in alcuni casi, alla raccolta di statistiche in forma aggregata.
            </p>

            <h2 className="section-title">Cookie utilizzati da questo sito</h2>
            <p className="body-copy">
              Il sito utilizza cookie e tecnologie tecniche necessarie al funzionamento, alla
              sicurezza e alla corretta erogazione dei contenuti. Non vengono utilizzati cookie di
              profilazione per attività pubblicitarie o marketing comportamentale.
            </p>

            <h2 className="section-title">Servizi di terze parti</h2>
            <p className="body-copy">
              Link esterni — come WhatsApp o Matrimonio.com — possono impostare cookie o trattare
              dati secondo le informative dei rispettivi fornitori quando li aprite.
            </p>
            <p className="body-copy">
              L&apos;hosting del sito e lo strumento di invio email del modulo contatti possono
              trattare dati tecnici necessari all&apos;erogazione del servizio.
            </p>

            <h2 className="section-title">Gestione dei cookie</h2>
            <p className="body-copy">
              Potete gestire, bloccare o eliminare i cookie dalle impostazioni del browser. La
              disattivazione dei cookie tecnici può limitare alcune funzionalità del sito.
            </p>

            <h2 className="section-title">Titolare</h2>
            <p className="body-copy">
              Il titolare del trattamento è Andrea Mauri — Lucea / Lucea Fotografie, con sede in{" "}
              {contact.address}. P. IVA {contact.vat}.
            </p>
            <p className="body-copy">
              Per richieste su privacy e cookie:{" "}
              <a className="link-text" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              .
            </p>

            <h2 className="section-title">Privacy Policy</h2>
            <p className="body-copy">
              Per maggiori informazioni sul trattamento dei dati personali consulta la{" "}
              <a className="link-text" href="/privacy">
                Privacy Policy
              </a>
              .
            </p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
