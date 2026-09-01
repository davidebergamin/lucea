"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

type Photo = {
  src: string;
  alt: string;
};

function useDesktopLightbox() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 861px) and (hover: hover)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return enabled;
}

export function PhotoLightbox({
  photos,
  className = "portfolio-grid"
}: {
  photos: Photo[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const titleId = useId();
  const lightboxEnabled = useDesktopLightbox();
  const active = open !== null ? photos[open] : null;

  useEffect(() => {
    if (!lightboxEnabled && open !== null) setOpen(null);
  }, [lightboxEnabled, open]);

  useEffect(() => {
    if (open === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") setOpen((value) => (value === null ? value : (value + 1) % photos.length));
      if (event.key === "ArrowLeft") {
        setOpen((value) => (value === null ? value : (value - 1 + photos.length) % photos.length));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, photos.length]);

  return (
    <>
      <section className={className} aria-label="Galleria">
        {photos.map((photo, index) =>
          lightboxEnabled ? (
            <button
              type="button"
              className="portfolio-item lightbox-trigger"
              key={photo.src}
              onClick={() => setOpen(index)}
            >
              <Image src={photo.src} alt={photo.alt} width={1200} height={900} sizes="50vw" unoptimized />
              <span className="sr-only">Ingrandisci foto</span>
            </button>
          ) : (
            <figure className="portfolio-item" key={photo.src}>
              <Image src={photo.src} alt={photo.alt} width={1200} height={900} sizes="50vw" unoptimized />
            </figure>
          )
        )}
      </section>

      {active ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-labelledby={titleId}>
          <p id={titleId} className="sr-only">
            {active.alt}
          </p>
          <button type="button" className="lightbox-backdrop" aria-label="Chiudi" onClick={() => setOpen(null)} />
          <figure className="lightbox-figure">
            <Image src={active.src} alt={active.alt} width={2000} height={1333} sizes="100vw" unoptimized />
          </figure>
          {photos.length > 1 ? (
            <>
              <button
                type="button"
                className="lightbox-nav lightbox-nav--prev"
                aria-label="Foto precedente"
                onClick={() => setOpen((value) => (value === null ? 0 : (value - 1 + photos.length) % photos.length))}
              >
                ‹
              </button>
              <button
                type="button"
                className="lightbox-nav lightbox-nav--next"
                aria-label="Foto successiva"
                onClick={() => setOpen((value) => (value === null ? 0 : (value + 1) % photos.length))}
              >
                ›
              </button>
            </>
          ) : null}
          <button type="button" className="lightbox-close" onClick={() => setOpen(null)}>
            Chiudi
          </button>
        </div>
      ) : null}
    </>
  );
}
