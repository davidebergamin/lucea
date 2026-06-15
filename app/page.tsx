import Image, { type StaticImageData } from "next/image";
import { SiteHeader } from "../components/SiteHeader";
import heroImage from "../public/photos/coppia-reportage.webp";
import festaImage from "../public/photos/festa-lancio-sposa.webp";
import camminoImage from "../public/photos/uscita-chiesa-festa.webp";
import aboutImage from "../public/photos/ritratto-famiglia-bn.webp";

const matrimonioUrl = "https://www.matrimonio.com/fotografo-matrimonio/lucea--e155161";
const whatsappUrl =
  "https://wa.me/393495799243?text=Ciao%20Andrea%2C%20vorrei%20informazioni%20per%20il%20mio%20matrimonio.";

const faq = [
  {
    question: "Dove lavora Lucea?",
    answer:
      "Lucea ha base a Milano e lavora in Lombardia, in Italia e anche all'estero quando il matrimonio lo richiede."
  },
  {
    question: "Che stile fotografico ha Andrea Mauri?",
    answer:
      "Reportage di matrimonio, discreto e spontaneo: poche pose, attenzione alle persone, alla festa e ai momenti non costruiti."
  },
  {
    question: "Quanto costa il servizio fotografico di matrimonio?",
    answer:
      "Dal profilo pubblico Matrimonio.com, i servizi matrimonio Lucea partono da 900 euro e arrivano fino a circa 2.300 euro, in base a durata, foto, video, album e richieste."
  },
  {
    question: "Sono disponibili foto e video?",
    answer:
      "Si. Lucea offre fotografia, video, prematrimonio, postmatrimonio, album, gallery privata online e servizi extra come drone o photocall quando concordati."
  }
];

function FullPhoto({ src, alt, label }: { src: StaticImageData; alt: string; label: string }) {
  return (
    <figure
      className="full-photo"
      data-liquid-capture-section="section"
      data-liquid-capture-name="full-width-photo"
    >
      <Image src={src} alt={alt} sizes="100vw" loading="eager" unoptimized />
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "Lucea Fotografie",
    alternateName: ["Lucea", "Andrea Mauri fotografo"],
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
    mainEntity: faq.map((item) => ({
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
              alt="Coppia di sposi in un momento spontaneo fotografato da Lucea"
              fill
              priority
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="hero-overlay" />
          <div className="hero-copy">
            <h1 id="hero-title" className="display">
              <span className="accent">Storie</span> vere
              <br />
              Zero posa.
            </h1>
          </div>
        </section>

        <section
          className="poster-section"
          aria-labelledby="manifesto"
          data-liquid-capture-section="section"
          data-liquid-capture-name="DOCUMENTARY"
        >
          <div className="poster-inner">
            <p className="label">Lucea / Andrea Mauri</p>
            <h2 id="manifesto" className="poster-title">
              Reportage
              <br />
              di matrimonio <span className="accent">alternativo</span>
              <br />
              a Milano
            </h2>
            <p className="body-copy stack-after-title">
              Per coppie che non vogliono recitare. Per chi vuole ritrovare nelle foto la giornata
              com&apos;è stata: festa, amici, caos buono e momenti storti inclusi.
            </p>
          </div>
        </section>

        <div id="storie">
          <FullPhoto
            src={festaImage}
            alt="Sposa lanciata dagli amici durante una festa di matrimonio fotografata da Lucea"
            label="Festa vera, non recitata"
          />
        </div>

        <section
          id="metodo"
          className="poster-section dark-band"
          aria-labelledby="metodo-title"
          data-liquid-capture-section="section"
          data-liquid-capture-name="We stay close"
        >
          <div className="poster-inner">
            <h2 id="metodo-title" className="poster-title">
              Restiamo <span className="accent">vicini.</span>
              <br />
              Non interrompiamo.
              <br />
              Non mettiamo in scena.
            </h2>
            <p className="body-copy stack-after-title">
              Una presenza discreta non significa stare lontani. Significa capire quando entrare,
              quando sparire e quando lasciare che le persone facciano da sole.
            </p>
          </div>
        </section>

        <FullPhoto
          src={camminoImage}
          alt="Sposi e invitati all'uscita dalla cerimonia in una fotografia di reportage Lucea"
          label="Persone prima delle pose"
        />

        <section
          id="recensioni"
          className="poster-section"
          aria-labelledby="legends"
          data-liquid-capture-section="section"
          data-liquid-capture-name="WHAT OUR"
        >
          <div className="poster-inner split-proof">
            <div>
              <p className="label">Matrimonio.com</p>
              <h2 id="legends" className="poster-title">
                Cosa dicono
                <br />
                le <span className="accent">coppie.</span>
              </h2>
            </div>
            <div>
              <div className="facts-grid" aria-label="Dati recensioni Lucea">
                <div className="fact">
                  <strong>171</strong>
                  <span className="label">recensioni</span>
                </div>
                <div className="fact">
                  <strong>5.0</strong>
                  <span className="label">su 5</span>
                </div>
                <div className="fact">
                  <strong>100%</strong>
                  <span className="label">consigliato</span>
                </div>
              </div>
              <p className="body-copy stack-after-title">
                Il dato arriva dal profilo pubblico Matrimonio.com di Lucea. Le citazioni testuali
                verranno scelte solo da recensioni reali approvate.
              </p>
              <p className="stack-after-title">
                <a className="btn-outline" href={matrimonioUrl} target="_blank" rel="noreferrer">
                  Leggi su Matrimonio.com
                </a>
              </p>
              <div className="trust-row" aria-label="Aree e segnali di fiducia">
                <span>Milano</span>
                <span>Lombardia</span>
                <span>Italia</span>
                <span>Estero</span>
                <span>15 anni</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="poster-section"
          aria-labelledby="about"
          data-liquid-capture-section="section"
          data-liquid-capture-name="Hi Andrea"
        >
          <div className="poster-inner split-proof">
            <div>
              <Image
                src={aboutImage}
                alt="Ritratto di famiglia in bianco e nero durante un matrimonio fotografato da Lucea"
                sizes="(max-width: 860px) 100vw, 45vw"
                loading="eager"
                unoptimized
              />
            </div>
            <div>
              <p className="label">Hi, sono Andrea</p>
              <h2 className="poster-title">
                Dietro Lucea
                <br />
                c&apos;e una presenza
                <br />
                <span className="accent">leggera.</span>
              </h2>
              <p className="body-copy stack-after-title">
                Da circa 15 anni fotografo matrimoni. Non mi interessa trasformare una coppia in
                due attori. Mi interessa stare abbastanza vicino da vedere, abbastanza lontano da non rovinare.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contatti"
          className="poster-section"
          aria-labelledby="say-hello"
          data-liquid-capture-section="section"
          data-liquid-capture-name="IF IT FEELS RIGHT"
        >
          <div className="poster-inner contact-grid">
            <div>
              <p className="label">Se ti sembra giusto</p>
              <h2 id="say-hello" className="poster-title">
                Scrivi.
                <br />
                Anche solo
                <br />
                per capire.
              </h2>
              <p className="body-copy stack-after-title">
                Dimmi data, luogo, che tipo di festa state immaginando e cosa non volete assolutamente
                vedere nelle vostre foto.
              </p>
              <p className="body-copy stack-after-title">
                <a className="link-text" href="mailto:eamauri@gmail.com">
                  eamauri@gmail.com
                </a>
                <br />
                <a className="link-text" href="tel:+393495799243">
                  349 579 9243
                </a>
              </p>
              <p className="stack-after-title">
                <a className="btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Scrivimi su WhatsApp
                </a>
              </p>
            </div>
            <form className="contact-form" action="mailto:eamauri@gmail.com" method="post" encType="text/plain">
              <label className="field">
                <span>Nome</span>
                <input name="nome" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label className="field">
                <span>Data matrimonio</span>
                <input name="data" placeholder="Es. 14 settembre 2027" />
              </label>
              <label className="field">
                <span>Location o zona</span>
                <input name="location" placeholder="Milano, Brianza, lago, estero..." />
              </label>
              <label className="field">
                <span>Messaggio</span>
                <textarea name="messaggio" required />
              </label>
              <button className="btn-primary" type="submit">
                Invia richiesta
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer
        className="site-footer"
        data-liquid-capture-section="footer"
        data-liquid-capture-name="footer"
      >
        <div>
          <strong className="label">Lucea Fotografie / Andrea Mauri</strong>
          <p className="muted-copy">Fotografo matrimonio Milano. Reportage spontaneo, foto e video.</p>
        </div>
        <div className="footer-links label">
          <a className="link-text" href={matrimonioUrl} target="_blank" rel="noreferrer">
            Matrimonio.com
          </a>
          <a className="link-text" href="mailto:eamauri@gmail.com">
            Email
          </a>
          <a className="link-text" href="#top">
            Torna su
          </a>
        </div>
      </footer>
    </>
  );
}
