import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { contact, siteUrl, stories } from "../../../lib/site-content";

type StoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    return {};
  }

  return {
    title: story.title,
    description: `${story.title}: storia Lucea in stile reportage di matrimonio, con foto spontanee, contesto reale e racconto naturale.`,
    alternates: { canonical: `/storie/${story.slug}` },
    openGraph: {
      title: story.title,
      description: story.summary,
      images: [story.image]
    }
  };
}

export default async function StoryDetailPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Storie",
        item: `${siteUrl}/storie`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: story.title,
        item: `${siteUrl}/storie/${story.slug}`
      }
    ]
  };

  return (
    <>
      <SiteHeader />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <section className="page-hero">
          <div className="page-hero-inner">
            <nav className="breadcrumbs" aria-label="Percorso">
              <a href="/storie">Storie</a>
              <span>/</span>
              <span>{story.title}</span>
            </nav>
            <p className="label">{story.eyebrow}</p>
            <h1 className="page-title">{story.title}</h1>
            <p className="page-intro">{story.summary}</p>
            <span className="status-pill">{story.status}</span>
          </div>
        </section>

        <figure className="full-photo photo-contained">
          <Image src={story.image} alt={story.alt} width={1600} height={1066} sizes="100vw" unoptimized />
        </figure>

        <section className="content-section">
          <div className="content-inner text-grid">
            <div>
              <p className="label">Luogo</p>
              <h2 className="poster-title">
                {story.location}
              </h2>
            </div>
            <div>
              <p className="body-copy serif-lead">
                Ogni storia Lucea nasce da un equilibrio semplice: persone prima delle pose, contesto prima
                della decorazione, immagini grandi da sfogliare senza interruzioni.
              </p>
              <ul className="plain-list">
                <li>Foto grandi e intere, senza tagli decorativi.</li>
                <li>Scroll naturale anche da telefono.</li>
                <li>Momenti spontanei, foto di rito comprese ma senza catena di montaggio.</li>
                <li>Un racconto che lascia spazio alla festa.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section warm">
          <div className="content-inner text-grid centered">
            <div>
              <p className="label">Vi riconoscete?</p>
              <h2 className="poster-title">
                Raccontate
                <br />
                la vostra
                <br />
                <span className="accent">storia.</span>
              </h2>
            </div>
            <div>
              <p className="body-copy serif-lead">
                Se cercate fotografi di matrimonio a Milano o in Lombardia che lavorino con spontaneità,
                discrezione e attenzione alle persone, potete scriverci.
              </p>
              <div className="action-row">
                <a className="btn-primary" href="/contatti">
                  Compila il form
                </a>
                <a className="btn-outline" href={contact.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
