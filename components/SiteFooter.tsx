import { contact, matrimonioUrl, navLinks } from "../lib/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer" data-liquid-capture-section="footer" data-liquid-capture-name="footer">
      <div>
        <strong className="label">Lucea Fotografie</strong>
        <p className="muted-copy">Fotografia di matrimonio a Milano. Reportage spontaneo, foto e video.</p>
        <p className="muted-copy">
          Realizzato da{" "}
          <a className="link-text" href="https://liquidagency.eu/" target="_blank" rel="noreferrer">
            Liquid
          </a>
        </p>
      </div>
      <div className="footer-links label">
        {navLinks.map((link) => (
          <a className="link-text" key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a className="link-text" href={matrimonioUrl} target="_blank" rel="noreferrer">
          Matrimonio.com
        </a>
        <a className="link-text" href={`mailto:${contact.email}`}>
          Email
        </a>
      </div>
    </footer>
  );
}
