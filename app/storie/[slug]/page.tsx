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
    description: `${story.title}. Storia Lucea: titolo e atmosfera, in attesa del racconto scritto.`,
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
            <p className="page-intro">{story.summary}</p>
          </div>
        </section>

        <figure className="media-full">
          <Image src={story.image} alt={story.alt} width={1600} height={1066} sizes="100vw" unoptimized />
        </figure>

        <section className="page-block">
          <div className="page-block-inner page-block-inner--narrow stack">
            <p className="body-copy serif-lead">
              Le fotografie in questa pagina sono atmosfera dal set di Andrea: non attribuiamo
              questi scatti a questa coppia finché il racconto e l&apos;album non arrivano da lui.
            </p>
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
