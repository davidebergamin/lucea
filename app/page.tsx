import Image, { type StaticImageData } from "next/image";
import { ContactForm } from "../components/ContactForm";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { contact, faqs, matrimonioUrl } from "../lib/site-content";
import heroImage from "../public/photos/hero-graffiti.webp";
import festaImage from "../public/photos/festa-lancio-sposa.webp";
import famigliaImage from "../public/photos/ritratto-famiglia-bn.webp";
import balloImage from "../public/photos/ballo-sala.webp";
import contattoImage from "../public/photos/aperitivo-sposi.webp";

function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "Lucea Fotografie",
    alternateName: ["Lucea", "Lucea Fotografie"],
    url: "https://luceafotografie.it",
    image: "https://luceafotografie.it/photos/hero-graffiti.webp",
    email: "eamauri@gmail.com",
    telephone: "+393495799243",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Arzaga, 11",
      addressLocality: "Milano",
      postalCode: "20146",
      addressCountry: "IT"
    },
    areaServed: ["Milano", "Lombardia", "Italia", "Estero"],
    knowsAbout: [
      "fotografia di matrimonio",
      "wedding photojournalism",
      "reportage di matrimonio",
      "fotografo matrimonio Milano",
      "foto spontanee di matrimonio",
      "video matrimonio",
      "album matrimonio"
    ],
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

function HomeCta() {
  return (
    <p className="section-cta">
      <a className="btn-primary" href="/contatti">
        Parliamo del vostro giorno
      </a>
    </p>
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
              alt="Coppia Lucea in una scena urbana e spontanea"
              width={1600}
              height={1066}
              priority
              sizes="100vw"
              style={{ width: "100%", height: "auto", display: "block" }}
              unoptimized
            />
          </div>
          <div className="hero-overlay" />
          <div className="hero-copy">
            <h1 id="hero-title" className="display hero-headline">
              <span className="hero-headline-line">
                <span className="accent">Storie</span> vere.
              </span>
              <span className="hero-headline-line">
                Zero <span className="accent">pose.</span>
              </span>
            </h1>
          </div>
        </section>

        <section
          className="poster-section warm poster-section--compact home-intro"
          aria-labelledby="home-intro-title"
          data-liquid-capture-section="section"
          data-liquid-capture-name="Posizionamento"
        >
          <div className="poster-inner">
            <p className="label">Cosa</p>
            <h2 id="home-intro-title" className="poster-title poster-title--wide">
              Fotografie di <span className="accent">matrimonio</span>
              <br />
              senza <span className="accent">finzioni.</span>
            </h2>
            <p className="body-copy serif-lead stack-after-title">
              A Milano, in Lombardia e ovunque.
            </p>
            <HomeCta />
          </div>
        </section>

        <FullPhoto
          src={festaImage}
          alt="Sposa lanciata dagli amici durante una festa di matrimonio fotografata da Lucea"
          label="Festa vera, non recitata"
        />

        <section
          id="chi-sono"
          className="poster-section warm poster-section--compact"
          aria-labelledby="chi-sono-title"
          data-liquid-capture-section="section"
          data-liquid-capture-name="Restiamo vicini"
        >
          <div className="poster-inner">
            <p className="label">Chi siamo</p>
            <h2 id="chi-sono-title" className="poster-title">
              Restiamo <span className="accent">vicini.</span>
              <br />
              Non <span className="accent">interrompiamo.</span>
              <br />
              Non mettiamo in scena.
            </h2>
            <p className="body-copy serif-lead stack-after-title">
              Raccontiamo gli sguardi, i sorrisi e la vita vera con semplicità e discrezione. E sì,
              faremo anche le foto di rito, ma promesso: ci divertiremo.
            </p>
          </div>
        </section>

        <FullPhoto
          src={famigliaImage}
          alt="Ritratto di famiglia in bianco e nero durante un matrimonio fotografato da Lucea"
          label="Famiglia e momenti di rito"
        />

        <section
          id="come-avviene"
          className="poster-section poster-section--compact"
          aria-labelledby="come-avviene-title"
          data-liquid-capture-section="section"
          data-liquid-capture-name="Godetevi la festa"
        >
          <div className="poster-inner">
            <p className="label">Come avviene</p>
            <h2 id="come-avviene-title" className="poster-title">
              Godetevi la <span className="accent">festa.</span>
              <br />
              Ai ricordi ci pensiamo noi.
            </h2>
            <p className="body-copy serif-lead stack-after-title">
              Niente pose forzate, niente ore rubate agli invitati, nessuna recita. Un approccio
              tranquillo e amichevole per raccontare la vostra giornata esattamente così come accade.
            </p>
          </div>
        </section>

        <FullPhoto
          src={balloImage}
          alt="Coppia che balla durante la festa di matrimonio fotografata da Lucea"
          label="Festa e ballo"
        />

        <section
          className="poster-section warm poster-section--compact"
          aria-labelledby="voi-title"
          data-liquid-capture-section="section"
          data-liquid-capture-name="Emozionatevi"
        >
          <div className="poster-inner">
            <p className="label">Voi</p>
            <h2 id="voi-title" className="poster-title poster-title--wide">
              Emozionatevi, divertitevi, godetevi ogni momento:
              <br />
              è la vostra <span className="accent">festa.</span>
            </h2>
            <p className="body-copy serif-lead stack-after-title">
              Qui c&apos;è spazio solo per la vostra storia così com&apos;è. Lucea è uno spazio aperto a
              ogni storia d&apos;amore, identità, cultura e credo. Senza distinzioni, sempre con cura e
              rispetto. Se questo per voi conta, questo viaggio inizia insieme.
            </p>
          </div>
        </section>

        <FullPhoto
          src={contattoImage}
          alt="Sposi durante l'aperitivo di matrimonio fotografati da Lucea"
          label="Aperitivo e convivialità"
        />

        <section
          id="contatti"
          className="poster-section home-contact-section poster-section--compact"
          aria-labelledby="contatti-title"
          data-liquid-capture-section="section"
          data-liquid-capture-name="Parliamo di voi"
        >
          <div className="poster-inner home-contact-grid">
            <p className="label">Contatto</p>
            <h2 id="contatti-title" className="poster-title poster-title--wide">
              Se siete arrivati fin qui,
              <br />
              parliamo di <span className="accent">voi.</span>
            </h2>
            <ContactForm compact />
            <p className="home-contact-links">
              <a className="link-text" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <a className="btn-outline" href={contact.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
