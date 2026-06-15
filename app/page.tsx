import Image, { type StaticImageData } from "next/image";
import heroImage from "../public/photos/coppia-reportage.webp";
import festaImage from "../public/photos/festa-lancio-sposa.webp";
import camminoImage from "../public/photos/uscita-chiesa-festa.webp";
import bnImage from "../public/photos/uscita-chiesa-bn.webp";
import dettagliImage from "../public/photos/rito-famiglia-bn.webp";
import aboutImage from "../public/photos/ritratto-famiglia-bn.webp";
import partyImage from "../public/photos/festa-sposa-alzata.webp";

const matrimonioUrl = "https://www.matrimonio.com/fotografo-matrimonio/lucea--e155161";
const whatsappUrl =
  "https://wa.me/393495799243?text=Ciao%20Andrea%2C%20vorrei%20informazioni%20per%20il%20mio%20matrimonio.";

const fullPhotos: Array<{
  src: StaticImageData;
  alt: string;
  label: string;
}> = [
  {
    src: festaImage,
    alt: "Sposa lanciata dagli amici durante una festa di matrimonio fotografata da Lucea",
    label: "Festa vera, non recitata"
  },
  {
    src: camminoImage,
    alt: "Sposi e invitati all'uscita dalla cerimonia in una fotografia di reportage Lucea",
    label: "Persone prima delle pose"
  },
  {
    src: bnImage,
    alt: "Momento spontaneo in bianco e nero durante un matrimonio fotografato da Lucea",
    label: "Vicini, ma leggeri"
  },
  {
    src: dettagliImage,
    alt: "Ritratto in bianco e nero di famiglia e sposi durante la firma del matrimonio",
    label: "Le cose piccole contano"
  }
];

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

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="logo-mark" href="#top" aria-label="Lucea homepage">
        <span className="logo-main">Lucea</span>
        <span className="logo-sub">Andrea Mauri / Milano</span>
      </a>
      <nav className="nav-links" aria-label="Navigazione principale">
        <a href="#metodo">Il metodo</a>
        <a href="#about">Andrea</a>
        <a href="#storie">Storie</a>
        <a href="#servizi">Prezzi</a>
        <a href="#recensioni">Recensioni</a>
        <a href="#contatti">Contatto</a>
      </nav>
      <a className="mobile-menu-plus" href="#contatti" aria-label="Vai ai contatti">
        +
      </a>
    </header>
  );
}

function FullPhoto({ src, alt, label }: { src: StaticImageData; alt: string; label: string }) {
  return (
    <figure className="full-photo">
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
        <section className="hero" aria-labelledby="hero-title">
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
              <span className="accent">Momenti</span> veri
              <br />
              Niente posato.
            </h1>
          </div>
        </section>

        <section className="poster-section" aria-labelledby="manifesto">
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
              Per coppie che non vogliono recitare. Per famiglie che vogliono riconoscersi nelle foto.
              Per matrimoni dove la festa, gli amici e i momenti storti contano quanto quelli perfetti.
            </p>
          </div>
        </section>

        <div id="storie">
          <FullPhoto {...fullPhotos[0]} />
        </div>

        <section className="poster-section" aria-labelledby="dance-floor">
          <div className="poster-inner">
            <h2 id="dance-floor" className="poster-title">
              Dalla preparazione
              <br />
              alla pista,
              <br />
              conta <span className="accent">come succede.</span>
            </h2>
            <p className="body-copy stack-after-title">
              La giornata non viene fermata per farla sembrare piu ordinata. Andrea resta dentro al flusso:
              casa, rito, brindisi, parenti, amici, caos buono, festa.
            </p>
          </div>
        </section>

        <FullPhoto {...fullPhotos[1]} />

        <section id="metodo" className="poster-section dark-band" aria-labelledby="metodo-title">
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

        <FullPhoto {...fullPhotos[2]} />

        <section className="poster-section" aria-labelledby="notice">
          <div className="poster-inner">
            <h2 id="notice" className="poster-title">
              Notiamo
              <br />
              le cose <span className="accent">piccole.</span>
            </h2>
            <p className="body-copy stack-after-title">
              La mano sul tavolo. Una faccia prima di ridere. La nonna che controlla tutto.
              Un abito che vola male, quindi bene. Sono dettagli, ma spesso sono la memoria.
            </p>
          </div>
        </section>

        <FullPhoto {...fullPhotos[3]} />

        <section id="recensioni" className="poster-section" aria-labelledby="legends">
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
            </div>
          </div>
        </section>

        <section id="servizi" className="poster-section dark-band" aria-labelledby="sicurezza">
          <div className="poster-inner">
            <h2 id="sicurezza" className="poster-title">
              Fresco per voi.
              <br />
              Chiaro per chi <span className="accent">vi aiuta</span> a scegliere.
            </h2>
            <p className="body-copy stack-after-title">
              Agli sposi servono immagini vive. Ai genitori spesso servono conferme: esperienza,
              puntualita, famiglia fotografata bene, servizi chiari, contatti semplici.
            </p>
            <div className="trust-row" aria-label="Aree e segnali di fiducia">
              <span>Milano</span>
              <span>Lombardia</span>
              <span>Italia</span>
              <span>Estero</span>
              <span>15 anni</span>
            </div>
          </div>
        </section>

        <section className="poster-section" aria-labelledby="ai-search">
          <div className="poster-inner">
            <h2 id="ai-search" className="poster-title">
              In breve,
              <br />
              per chi cerca <span className="accent">Lucea.</span>
            </h2>
            <div className="seo-panel">
              <div>
                <p className="body-copy">
                  Lucea e il progetto wedding di Andrea Mauri, fotografo matrimonio a Milano.
                  Lavora con uno stile reportage spontaneo, documentario e poco invasivo.
                </p>
                <p className="body-copy stack-after-title">
                  E adatto a coppie che cercano foto naturali, festa vera, video matrimonio,
                  album, prematrimonio, postmatrimonio e gallery privata.
                </p>
              </div>
              <ul className="body-copy">
                <li>Base: Milano, Via Arzaga 11.</li>
                <li>Area: Lombardia, Italia, estero.</li>
                <li>Recensioni: 171 su Matrimonio.com, 5.0/5.</li>
                <li>Servizi matrimonio pubblici: da 900 a 2.300 euro.</li>
                <li>Contatto: eamauri@gmail.com, 349 579 9243.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="poster-section" aria-labelledby="about">
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
              <h2 id="about" className="poster-title">
                Dietro Lucea
                <br />
                c'e una presenza
                <br />
                <span className="accent">leggera.</span>
              </h2>
              <p className="body-copy stack-after-title">
                Da circa 15 anni fotografo matrimoni. Non mi interessa trasformare una coppia in
                due attori. Mi interessa stare abbastanza vicino da vedere, abbastanza lontano da non rovinare.
              </p>
              <p className="body-copy stack-after-title">
                Il risultato deve assomigliare a voi: alle persone che c'erano, alla festa che avete scelto,
                al modo in cui vi siete mossi dentro quella giornata.
              </p>
            </div>
          </div>
        </section>

        <figure className="full-photo">
          <Image
            src={partyImage}
            alt="Sposa sollevata dagli invitati durante la festa di matrimonio"
            sizes="100vw"
            loading="eager"
            unoptimized
          />
        </figure>

        <section id="contatti" className="poster-section" aria-labelledby="say-hello">
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
                <span>Che atmosfera volete?</span>
                <select name="atmosfera" defaultValue="">
                  <option value="" disabled>
                    Scegli una traccia
                  </option>
                  <option>Spontanea e familiare</option>
                  <option>Festa, amici, pista</option>
                  <option>Elegante ma non rigida</option>
                  <option>Non lo so ancora</option>
                </select>
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
      <footer className="site-footer">
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
