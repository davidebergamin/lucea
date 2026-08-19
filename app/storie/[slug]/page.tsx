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
    description: `${story.title} — ${story.location}. Fotografie Lucea.`,
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

  const gallery = story.gallery?.length ? story.gallery : [{ src: story.image, alt: story.alt }];

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
      <main className="page-offset">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <section className="page-block">
          <div className="page-block-inner stack align-start">
            <nav className="breadcrumbs" aria-label="Percorso">
              <a href="/storie">Storie</a>
              <span>/</span>
              <span>{story.title}</span>
            </nav>
            <h1 className="page-title">{story.title}</h1>
            <p className="page-intro">
              {story.location}
              {story.status ? ` · ${story.status}` : ""}
            </p>
            <p className="body-copy muted-copy">{story.summary}</p>
          </div>
        </section>

        <section className="portfolio-grid" aria-label={`Galleria ${story.title}`}>
          {gallery.map((photo) => (
            <figure className="portfolio-item" key={photo.src}>
              <Image src={photo.src} alt={photo.alt} width={1200} height={900} sizes="50vw" unoptimized />
            </figure>
          ))}
        </section>

        <section className="page-block">
          <div className="page-block-inner page-block-inner--narrow stack">
            <p className="section-cta section-cta--start">
              <a className="btn-primary" href="/contatti">
                Compila il form
              </a>
              <a className="btn-whatsapp" href={contact.whatsapp} target="_blank" rel="noreferrer">
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
