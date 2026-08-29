import { footerPlusItems } from "../lib/site-content";

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
        <div className="footer-legal footer-legal--only">
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
