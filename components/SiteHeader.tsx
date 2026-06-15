"use client";

import { useEffect, useId, useState } from "react";

const navLinks = [
  { href: "#metodo", label: "Il metodo" },
  { href: "#about", label: "Andrea" },
  { href: "#storie", label: "Storie" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#contatti", label: "Contatto" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", open);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header
        className="site-header"
        data-liquid-capture-section="header"
        data-liquid-capture-name="header"
      >
        <a className="logo-mark" href="#top" aria-label="Lucea homepage" onClick={closeMenu}>
          <span className="logo-main">Lucea</span>
          <span className="logo-sub">Andrea Mauri / Milano</span>
        </a>
        <nav className="nav-links" aria-label="Navigazione principale">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="mobile-menu-plus"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "×" : "+"}
        </button>
      </header>

      <div
        id={menuId}
        className={`mobile-menu-panel${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Menu navigazione"
      >
        <nav className="mobile-menu-nav" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="mobile-menu-cta btn-primary" href="#contatti" onClick={closeMenu}>
          Scrivimi
        </a>
      </div>
      {open ? <button type="button" className="mobile-menu-backdrop" aria-label="Chiudi menu" onClick={closeMenu} /> : null}
    </>
  );
}
