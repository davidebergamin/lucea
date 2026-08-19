import { contact, footerPlusItems, matrimonioUrl } from "../lib/site-content";

export function SiteFooter() {
  return (
    <>
      <section className="pre-footer-plus" aria-label="Approfondimenti">
        <div className="footer-plus-list">
          {footerPlusItems.map((item) => (
            <details className="footer-plus-item" key={item.href}>
              <summary className="footer-plus-trigger">
                {item.label}
                <span className="footer-plus-mark" aria-hidden="true" />
              </summary>
              <div className="footer-plus-panel">
                <p>{item.body}</p>
                <a className="link-text" href={item.href}>
                  {item.label}
                </a>
              </div>
            </details>
          ))}
        </div>
      </section>

      <footer className="site-footer" data-liquid-capture-section="footer" data-liquid-capture-name="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <strong>Lucea</strong>
            <p className="muted-copy">Fotografia di matrimonio · Milano</p>
          </div>
          <div className="footer-contact">
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={matrimonioUrl} target="_blank" rel="noreferrer">
              Matrimonio.com
            </a>
          </div>
        </div>

        <div className="footer-legal">
          <p className="muted-copy">
            {contact.address} · P.IVA {contact.vat}
          </p>
          <p className="footer-links">
            <a className="footer-link" href="/privacy">
              Privacy
            </a>
            <a className="footer-link" href="/cookie">
              Cookie
            </a>
            <a className="footer-link" href="https://liquidagency.eu/" target="_blank" rel="noopener noreferrer">
              Realizzato da Liquid
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
