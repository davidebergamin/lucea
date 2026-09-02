import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../lib/seo";
import { contact, siteUrl } from "../../lib/site-content";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Cookie",
    description: "Informativa sui cookie del sito Lucea Fotografie.",
    path: "/cookie"
  }),
  robots: { index: false, follow: true }
};

export default function CookiePage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <section className="page-block">
          <article className="page-block-inner page-block-inner--narrow stack align-start legal-copy">
            <h1 className="page-title">Cookie policy</h1>
            <p className="muted-copy">Ultimo aggiornamento: 2 settembre 2026</p>

            <p className="body-copy">
              Questa informativa è resa ai sensi dell&apos;art. 122 del D.Lgs. 196/2003 e del
              provvedimento del Garante del 10 giugno 2021. Descrive cookie e tecnologie simili usati
              su {siteUrl}.
            </p>

            <h2 className="section-title">Cosa sono i cookie</h2>
            <p className="body-copy">
              I cookie sono piccoli file di testo che un sito può salvare sul dispositivo. Si
              distinguono in cookie tecnici, necessari al funzionamento, e cookie di profilazione o
              misurazione non tecnica, che in Italia richiedono il consenso prima
              dell&apos;installazione.
            </p>

            <h2 className="section-title">Cookie utilizzati da questo sito</h2>
            <p className="body-copy">
              Il Sito utilizza <strong>solo cookie e storage tecnici</strong> necessari a erogare le
              pagine, alla sicurezza e al CDN. Per questi strumenti non è richiesto il consenso
              preventivo. Non vengono usati cookie di profilazione, pubblicità o analitici di terze
              parti. Non è presente un banner cookie.
            </p>
            <p className="body-copy">
              L&apos;hosting (Vercel) può impostare cookie tecnici di rete. L&apos;invio del modulo
              non installa cookie di marketing; l&apos;email è recapitata tramite Resend.
            </p>

            <h2 className="section-title">Terze parti attivate da un vostro click</h2>
            <p className="body-copy">
              Link verso WhatsApp o Matrimonio.com possono far installare cookie di quei titolari
              dopo che lasciate il Sito. Lucea non li controlla.
            </p>

            <h2 className="section-title">Gestione nel browser</h2>
            <p className="body-copy">
              Potete bloccare o cancellare i cookie dalle impostazioni del browser. Disabilitare i
              cookie tecnici può impedire il corretto funzionamento del Sito.
            </p>
            <ul className="plain-list">
              <li>
                <a className="link-text" href="https://support.google.com/chrome/answer/95647">
                  Chrome
                </a>
              </li>
              <li>
                <a className="link-text" href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie">
                  Firefox
                </a>
              </li>
              <li>
                <a className="link-text" href="https://support.apple.com/it-it/guide/safari/sfri11471/mac">
                  Safari
                </a>
              </li>
              <li>
                <a className="link-text" href="https://support.microsoft.com/it-it/microsoft-edge">
                  Edge
                </a>
              </li>
            </ul>

            <h2 className="section-title">Titolare</h2>
            <p className="body-copy">
              Andrea Mauri — Lucea / Lucea Fotografie, {contact.address}. P. IVA {contact.vat}. Per
              richieste:{" "}
              <a className="link-text" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              .
            </p>

            <h2 className="section-title">Privacy</h2>
            <p className="body-copy">
              Per il trattamento dei dati personali consulta la{" "}
              <a className="link-text" href="/privacy">
                Privacy policy
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
