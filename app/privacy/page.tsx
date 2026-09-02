import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../lib/seo";
import { contact, siteUrl } from "../../lib/site-content";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Privacy",
    description: "Informativa privacy del sito Lucea Fotografie, fotografia di matrimonio a Milano.",
    path: "/privacy"
  }),
  robots: { index: false, follow: true }
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <section className="page-block">
          <article className="page-block-inner page-block-inner--narrow stack align-start legal-copy">
            <h1 className="page-title">Informativa privacy</h1>
            <p className="muted-copy">Ultimo aggiornamento: 2 settembre 2026</p>

            <p className="body-copy">
              La presente informativa è resa ai sensi degli articoli 13 e 14 del Regolamento (UE)
              2016/679 (“GDPR”) e del D.Lgs. 196/2003 a chi visita il sito {siteUrl} (il “Sito”) o
              invia una richiesta tramite i recapiti e il modulo presenti.
            </p>

            <h2 className="section-title">Titolare del trattamento</h2>
            <p className="body-copy">
              Andrea Mauri, titolare di Lucea / Lucea Fotografie, con sede in {contact.address}.
            </p>
            <p className="body-copy">P. IVA {contact.vat}.</p>
            <p className="body-copy">
              Per esercitare i diritti:{" "}
              <a className="link-text" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              {contact.phone ? (
                <>
                  {" "}
                  ·{" "}
                  <a className="link-text" href={contact.phoneHref}>
                    {contact.phone}
                  </a>
                </>
              ) : null}
              .
            </p>
            <p className="body-copy">Non è stato nominato un Responsabile della protezione dei dati (DPO).</p>

            <h2 className="section-title">Dati trattati</h2>
            <p className="body-copy">
              Tramite il modulo o l&apos;email possono essere trattati nome, email, telefono, nome del
              partner, data e luogo del matrimonio, numero di invitati, desideri su foto, video o
              album, canale con cui avete trovato Lucea e il contenuto del messaggio.
            </p>
            <p className="body-copy">
              Il Sito tratta anche dati tecnici di navigazione necessari al funzionamento e alla
              sicurezza: indirizzo IP, user agent, log del server e del CDN. Non sono usati per
              profilarvi. Non è prevista la creazione di un account.
            </p>

            <h2 className="section-title">Finalità e basi giuridiche</h2>
            <ul className="plain-list">
              <li>Rispondere a richieste di informazioni, disponibilità o preventivo — art. 6(1)(b) GDPR.</li>
              <li>Adempimenti amministrativi, fiscali o contrattuali — art. 6(1)(c) GDPR.</li>
              <li>Funzionamento, sicurezza e prevenzione abusi sul Sito — art. 6(1)(f) GDPR.</li>
            </ul>

            <h2 className="section-title">Natura del conferimento</h2>
            <p className="body-copy">
              I dati del modulo sono facoltativi, ma senza i campi indispensabili non è possibile
              evadere la richiesta. La navigazione delle pagine pubbliche non richiede dati
              anagrafici.
            </p>

            <h2 className="section-title">Conservazione</h2>
            <p className="body-copy">
              I dati di contatto restano per il tempo necessario a gestire la conversazione e, se
              nasce un incarico, per i termini civilistici e fiscali. I log tecnici restano per il
              tempo strettamente necessario a sicurezza e diagnostica.
            </p>

            <h2 className="section-title">Destinatari</h2>
            <p className="body-copy">
              I dati non vengono venduti né ceduti a terzi per finalità commerciali. Possono
              trattarli, nei limiti del proprio incarico:
            </p>
            <ul className="plain-list">
              <li>
                Vercel Inc. (hosting, CDN) —{" "}
                <a className="link-text" href="https://vercel.com/legal/privacy-policy">
                  privacy Vercel
                </a>
              </li>
              <li>
                Resend (invio dell&apos;email del modulo) —{" "}
                <a className="link-text" href="https://resend.com/legal/privacy-policy">
                  privacy Resend
                </a>
              </li>
            </ul>

            <h2 className="section-title">Trasferimenti extra SEE</h2>
            <p className="body-copy">
              Vercel e Resend hanno sede o infrastruttura negli Stati Uniti. I trasferimenti
              avvengono con Clausole Contrattuali Standard e, ove applicabile, EU-US Data Privacy
              Framework. In alternativa potete scrivere solo via email, telefono o WhatsApp.
            </p>

            <h2 className="section-title">Decisioni automatizzate</h2>
            <p className="body-copy">
              Non viene svolta profilazione né un processo decisionale automatizzato ai sensi
              dell&apos;art. 22 GDPR.
            </p>

            <h2 className="section-title">Diritti</h2>
            <p className="body-copy">
              Potete chiedere accesso, rettifica, cancellazione, limitazione, opposizione e, nei
              casi previsti, portabilità (artt. 15–22 GDPR) scrivendo a{" "}
              <a className="link-text" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              . Avete anche diritto di reclamo al{" "}
              <a className="link-text" href="https://www.garanteprivacy.it">
                Garante per la protezione dei dati personali
              </a>
              .
            </p>

            <h2 className="section-title">Cookie e terze parti</h2>
            <p className="body-copy">
              L&apos;uso di cookie è descritto nella{" "}
              <a className="link-text" href="/cookie">
                Cookie policy
              </a>
              . Link verso WhatsApp o Matrimonio.com aprono siti di titolari autonomi.
            </p>

            <h2 className="section-title">Modifiche</h2>
            <p className="body-copy">
              La versione vigente è quella pubblicata su questa pagina, con la data di ultimo
              aggiornamento.
            </p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
