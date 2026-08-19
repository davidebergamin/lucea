import Image, { type StaticImageData } from "next/image";
import { ContactForm } from "../components/ContactForm";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { contact, faqs, matrimonioUrl } from "../lib/site-content";
import heroImage from "../public/media/images/root/dsc02552.webp";
import heroMobileImage from "../public/media/images/root/dsc07272.webp";
import proofImage from "../public/media/images/root/dsc00317.webp";
import festaImage from "../public/media/images/root/dsc0080.webp";
import peakImage from "../public/media/images/root/dsc07067.webp";
import closeImage from "../public/media/images/root/dsc06827.webp";

function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "Lucea Fotografie",
    alternateName: ["Lucea", "Lucea Fotografie"],
    url: "https://luceafotografie.it",
    image: "https://luceafotografie.it/media/images/root/dsc02552.webp",
    email: "eamauri@gmail.com",
    telephone: "+393495799243",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Arzaga, 11",
      addressLocality: "Milano",
      postalCode: "20146",
      addressCountry: "IT"
    },
    areaServed: ["Milano", "Monza Brianza", "Lombardia", "Italia", "Estero"],
    knowsAbout: [
      "fotografia di matrimonio",
      "wedding photojournalism",
      "reportage di matrimonio",
      "fotografo matrimonio Milano",
      "foto spontanee di matrimonio",
      "video matrimonio",
      "album matrimonio"
    ],
    vatID: "IT09388090962",
    sameAs: [matrimonioUrl],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "171",
      bestRating: "5",
      worstRating: "1"
    },
    priceRange: "900-2300 EUR"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

function FullPhoto({ src, alt, label }: { src: StaticImageData; alt: string; label: string }) {
  return (
    <figure
      className="full-photo"
      data-liquid-capture-section="section"
      data-liquid-capture-name="full-width-photo"
    >
      <Image src={src} alt={alt} sizes="100vw" loading="lazy" unoptimized />
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <SiteHeader />
      <main id="top">
        <section
          className="hero"
          aria-labelledby="hero-title"
          data-liquid-capture-section="section"
          data-liquid-capture-name="Storie vere"
        >
          <div className="hero-image hero-image--desktop">
            <Image
              src={heroImage}
              alt="Sposa e invitati a braccia alzate durante una festa di matrimonio"
              width={heroImage.width}
              height={heroImage.height}
              priority
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="hero-image hero-image--mobile">
            <Image
              src={heroMobileImage}
              alt="Sposi che si guardano sorridendo, luce calda su un muro di pietra"
              width={heroMobileImage.width}
              height={heroMobileImage.height}
              priority
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="hero-overlay" />
          <div className="hero-copy">
            <h1 id="hero-title" className="display hero-headline">
              <span className="hero-headline-line">
                <span className="accent">Storie</span> vere
              </span>
              <span className="hero-headline-line">
                Zero <span className="accent">pose</span>
              </span>
            </h1>
          </div>
        </section>

        <section
          className="poster-section warm poster-section--compact home-intro"
          aria-labelledby="home-intro-title"
          data-liquid-capture-section="section"
          data-liquid-capture-name="Lucea fotografia"
        >
          <div className="poster-inner">
            <div className="brand-lockup">
              <p className="brand-lockup-name">Lucea</p>
              <h2 id="home-intro-title" className="brand-lockup-role">
                Fotografia di matrimonio
              </h2>
            </div>
            <p className="body-copy serif-lead stack-after-title">
              Emozioni, sguardi e dettagli raccontati con discrezione e leggerezza.
            </p>
            <p className="body-copy muted-copy stack-after-title">
              Con sede a Milano, vi raggiungiamo dove siete.
            </p>
            <p className="section-cta">
              <a className="btn-primary" href="/contatti">
                Parliamo del vostro giorno
              </a>
            </p>
          </div>
        </section>

        <FullPhoto
          src={proofImage}
          alt="Sposi che escono tra invitati e bolle, sorrisi spontanei"
          label="Uscita tra gli invitati"
        />

        <section
          className="poster-section warm poster-section--compact"
          aria-labelledby="voi-title"
          data-liquid-capture-section="section"
          data-liquid-capture-name="Voi vi sposate"
        >
          <div className="poster-inner">
            <h2 id="voi-title" className="poster-title poster-title--wide">
              Voi vi sposate
              <br />
              noi vi <span className="accent">fotografiamo</span>
            </h2>
            <p className="body-copy serif-lead stack-after-title">
              Vivete ogni istante della vostra giornata con spontaneità e noi vi aiuteremo a
              ricordarla. E sì, faremo anche le foto di rito, ma promesso: saranno piacevoli,
              curate, vostre.
            </p>
          </div>
        </section>

        <FullPhoto
          src={festaImage}
          alt="Ingresso in sala: sposi di spalle e invitati che sventolano tovaglioli"
          label="La festa in sala"
        />

        <section
          className="poster-section poster-section--compact"
          aria-labelledby="agio-title"
          data-liquid-capture-section="section"
          data-liquid-capture-name="A vostro agio"
        >
          <div className="poster-inner">
            <h2 id="agio-title" className="poster-title poster-title--wide">
              Il primo obiettivo è farvi sentire a <span className="accent">vostro agio</span>
            </h2>
            <p className="body-copy serif-lead stack-after-title">
              Un approccio tranquillo e amichevole per accompagnarvi con leggerezza e raccontare
              il vostro matrimonio così come accade.
            </p>
          </div>
        </section>

        <FullPhoto
          src={peakImage}
          alt="Sposi e invitati sotto una pioggia di riso"
          label="Riso e invitati"
        />

        <section
          className="poster-section warm poster-section--compact"
          aria-labelledby="festa-title"
          data-liquid-capture-section="section"
          data-liquid-capture-name="La vostra festa"
        >
          <div className="poster-inner">
            <h2 id="festa-title" className="poster-title poster-title--wide">
              Emozionatevi, divertitevi:
              <br />
              è la vostra <span className="accent">festa</span>
            </h2>
            <p className="body-copy serif-lead stack-after-title">
              Qui c&apos;è spazio solo per la vostra storia vera. LUCEA è uno spazio aperto a ogni
              storia d&apos;amore, identità, cultura e credo. Senza distinzioni, sempre con cura e
              rispetto. Se questo per voi conta, il nostro viaggio inizia insieme.
            </p>
          </div>
        </section>

        <FullPhoto
          src={closeImage}
          alt="Corsa tra le bolle in giardino durante un matrimonio"
          label="Bolle e corsa"
        />

        <section
          id="contatti"
          className="poster-section home-contact-section poster-section--compact"
          aria-labelledby="contatti-title"
          data-liquid-capture-section="section"
          data-liquid-capture-name="Parliamo di voi"
        >
          <div className="poster-inner home-contact-grid">
            <h2 id="contatti-title" className="poster-title poster-title--wide">
              Se siete arrivati fin qui,
              <br />
              ora parliamo di <span className="accent">voi</span>
            </h2>
            <p className="body-copy serif-lead">
              Due parole o una lunga chiacchierata: siamo sempre disponibili.
            </p>
            <ContactForm compact />
            <p className="home-contact-links">
              <a className="btn-whatsapp" href={contact.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btn-outline" href={contact.phoneHref}>
                {contact.phone}
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
