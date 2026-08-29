"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { contact, navLinks } from "../lib/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const menuId = useId();
  const pathname = usePathname();

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

  useEffect(() => {
    setOpen(false);
    setVisible(true);
  }, [pathname]);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        if (open) {
          setVisible(true);
        } else if (y < 48) {
          setVisible(true);
        } else if (y > lastY + 6) {
          setVisible(false);
        } else if (y < lastY - 6) {
          setVisible(true);
        }
        lastY = y;
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  const hiddenClass = visible ? "" : " site-header--hidden";

  return (
    <>
      <header
        className={`site-header${hiddenClass}`}
        data-liquid-capture-section="header"
        data-liquid-capture-name="header"
      >
        <a className="logo-mark" href="/" aria-label="Lucea fotografie, homepage" onClick={closeMenu}>
          <Image
            src="/logo/logo-lucea-mono-640.png"
            alt="Lucea fotografie"
            width={640}
            height={476}
            priority
            unoptimized
          />
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
        <a
          className="mobile-menu-cta btn-whatsapp"
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          WhatsApp
        </a>
      </div>
      {open ? <button type="button" className="mobile-menu-backdrop" aria-label="Chiudi menu" onClick={closeMenu} /> : null}
    </>
  );
}
