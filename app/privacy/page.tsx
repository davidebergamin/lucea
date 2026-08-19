import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { contact } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Informativa privacy del sito Lucea Fotografie, fotografia di matrimonio a Milano.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <section className="page-block">
          <article className="page-block-inner page-block-inner--narrow stack align-start legal-copy">
            <h1 className="page-title">Privacy</h1>
            <p className="muted-copy">Ultimo aggiornamento: 19 agosto 2026</p>

            <h2 className="section-title">Titolare del trattamento</h2>
            <p className="body-copy">
              Il titolare del trattamento è Andrea Mauri, titolare di Lucea / Lucea Fotografie, con
              sede in {contact.address}.
            </p>
            <p className="body-copy">P. IVA {contact.vat}.</p>
            <p className="body-copy">
              Per informazioni sul trattamento dei dati:{" "}
              <a className="link-text" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              .
            </p>

            <h2 className="section-title">Dati trattati</h2>
            <p className="body-copy">
              Tramite il modulo contatti possono essere trattati nome, email, telefono, nome del
              partner, data e luogo del matrimonio, numero di invitati, desideri (foto, video,
              album), canale con cui avete trovato Lucea e il contenuto del messaggio, inviati
              volontariamente.
            </p>
            <p className="body-copy">
              Il sito può trattare anche dati tecnici di navigazione necessari al funzionamento e
              alla sicurezza, come indirizzo IP, informazioni sul browser e log tecnici generati
              dal server.
            </p>

            <h2 className="section-title">Finalità del trattamento</h2>
            <p className="body-copy">I dati vengono utilizzati per:</p>
            <ul className="plain-list">
              <li>rispondere a richieste di informazioni, disponibilità o preventivo;</li>
              <li>gestire comunicazioni relative ai servizi fotografici e video;</li>
              <li>adempiere a obblighi amministrativi, fiscali o contrattuali;</li>
              <li>garantire il corretto funzionamento tecnico e la sicurezza del sito.</li>
            </ul>

            <h2 className="section-title">Base giuridica</h2>
            <p className="body-copy">
              Il trattamento si basa sull&apos;esecuzione di misure precontrattuali richieste
              dall&apos;interessato, sul consenso per l&apos;invio del modulo, sull&apos;adempimento
              di obblighi di legge e sul legittimo interesse alla sicurezza e al corretto
              funzionamento del sito.
            </p>

            <h2 className="section-title">Conservazione e destinatari</h2>
            <p className="body-copy">
              I dati sono conservati per il tempo necessario a gestire la richiesta e, se nasce un
              rapporto professionale, per il periodo previsto dagli obblighi fiscali e
              amministrativi applicabili.
            </p>
            <p className="body-copy">
              I dati non vengono venduti né ceduti a terzi per finalità commerciali. Possono essere
              trattati da fornitori tecnici indispensabili all&apos;hosting (Vercel), all&apos;invio
              email (Resend) e alla pubblicazione del sito, nei limiti delle rispettive funzioni.
            </p>

            <h2 className="section-title">Diritti dell&apos;interessato</h2>
            <p className="body-copy">
              Potete chiedere accesso, rettifica, cancellazione, limitazione o opposizione al
              trattamento dei dati personali, nei casi previsti dalla normativa applicabile,
              scrivendo a{" "}
              <a className="link-text" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              .
            </p>

            <h2 className="section-title">Cookie</h2>
            <p className="body-copy">
              Per informazioni sull&apos;uso dei cookie consulta la{" "}
              <a className="link-text" href="/cookie">
                Cookie Policy
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
