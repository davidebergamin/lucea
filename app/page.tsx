import Image, { type StaticImageData } from "next/image";
import { ContactForm } from "../components/ContactForm";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { contact, faqs, matrimonioUrl, matrimonioUrlSecondary } from "../lib/site-content";
import heroImage from "../public/media/images/root/lucea-matrimonio-home-003.webp";
import proofImage from "../public/media/images/root/lucea-matrimonio-home-012.webp";
import festaImage from "../public/media/images/root/lucea-matrimonio-home-025b.webp";
import peakImage from "../public/media/images/root/lucea-matrimonio-home-022.webp";
import closeImage from "../public/media/images/root/lucea-matrimonio-home-007.webp";

function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "Lucea Fotografie",
    alternateName: ["Lucea", "Lucea Fotografie"],
    url: "https://luceafotografie.it",
    image: "https://luceafotografie.it/media/images/root/lucea-matrimonio-home-003.webp",
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
    sameAs: [matrimonioUrl, matrimonioUrlSecondary],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "171",
      bestRating: "5",
      worstRating: "1"
    },
    priceRange: "900-2500 EUR"
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
          <div className="hero-image">
            <Image
              src={heroImage}
              alt="Sposi sotto un arco di lightsaber formato dagli invitati"
              width={heroImage.width}
              height={heroImage.height}
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
          data-liquid-capture-name="Lucea fotografie"
        >
          <div className="poster-inner">
            <div className="brand-lockup">
              <p className="brand-lockup-name">Lucea</p>
              <h2 id="home-intro-title" className="brand-lockup-role">
                Fotografie di matrimonio
              </h2>
            </div>
            <p className="body-copy serif-lead stack-after-title">
              Emozioni, sguardi e dettagli raccontati con discrezione e leggerezza.
            </p>
            <span className="brand-lockup-rule" aria-hidden="true" />
            <p className="brand-lockup-place">
              Con sede a Milano, vi raggiungiamo dove siete voi
            </p>
            <p className="section-cta">
              <a className="btn-outline" href="/contatti">
                Parliamo del vostro giorno
              </a>
            </p>
          </div>
        </section>

        <FullPhoto
          src={proofImage}
          alt="Sposi che ridono dentro un'auto d'epoca azzurra"
          label="Auto d'epoca"
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
            <p className="body-copy serif-lead stack-after-title stack-after-title--roomy">
              Vivete ogni istante della vostra giornata con spontaneità e noi vi aiuteremo a
              ricordarla. E sì, faremo anche le foto di rito, ma promesso: saranno piacevoli,
              curate, vostre.
            </p>
          </div>
        </section>

        <FullPhoto
          src={festaImage}
          alt="Momento di festa durante un matrimonio"
          label="Festa"
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
            <p className="body-copy serif-lead stack-after-title stack-after-title--roomy">
              Un approccio tranquillo e amichevole per accompagnarvi con leggerezza e raccontare
              il vostro matrimonio così come accade.
            </p>
          </div>
        </section>

        <FullPhoto
          src={peakImage}
          alt="Sposa e ospite che cantano al microfono durante la festa"
          label="Canto"
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
            <p className="body-copy serif-lead stack-after-title stack-after-title--roomy">
              Qui c&apos;è spazio solo per la vostra storia vera. LUCEA è uno spazio aperto a ogni
              storia d&apos;amore, identità, cultura e credo. Senza distinzioni, sempre con cura e
              rispetto. Se questo per voi conta, il nostro viaggio inizia insieme.
            </p>
          </div>
        </section>

        <FullPhoto
          src={closeImage}
          alt="Abbraccio in un campo alto, colline sullo sfondo"
          label="Campo"
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
                Telefono
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
