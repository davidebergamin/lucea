import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "../../../components/JsonLd";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { breadcrumbJsonLd, pageMetadata } from "../../../lib/seo";
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

  return pageMetadata({
    title: `${story.title} | fotografie Lucea`,
    description: `${story.summary} ${story.location}. Reportage Lucea, fotografo matrimonio Milano.`,
    path: `/storie/${story.slug}`,
    image: story.image
  });
}

function StoryParagraph({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return (
    <p className="body-copy serif-lead story-copy">
      {parts.map((part, index) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) {
          return <span key={index}>{part}</span>;
        }
        return (
          <a key={index} className="link-text" href={match[2]}>
            {match[1]}
          </a>
        );
      })}
    </p>
  );
}

export default async function StoryDetailPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  const gallery = story.gallery?.length ? story.gallery : [{ src: story.image, alt: story.alt }];
  const cover = gallery[0];
  const restPhotos = gallery.slice(1);

  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Storie", path: "/storie" },
    { name: story.title, path: `/storie/${story.slug}` }
  ]);

  const storyJsonLd = {
    "@context": "https://schema.org",
    "@type": "Photograph",
    name: story.title,
    description: story.summary,
    image: `${siteUrl}${story.image}`,
    contentLocation: story.location,
    creator: {
      "@type": "Person",
      name: "Andrea Mauri"
    },
    url: `${siteUrl}/storie/${story.slug}`
  };

  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <JsonLd data={[crumbs, storyJsonLd]} />
        <figure className="story-cover">
          <Image src={cover.src} alt={cover.alt} width={2000} height={1333} sizes="100vw" priority unoptimized />
        </figure>

        <section className="page-block page-block--tight">
          <div className="page-block-inner stack align-start">
            <nav className="breadcrumbs" aria-label="Percorso">
              <a href="/storie">Storie</a>
              <span>/</span>
              <span>{story.title}</span>
            </nav>
            <h1 className="page-title">{story.title}</h1>
            <div className="stack story-copy-stack stack-after-title">
              {story.paragraphs.map((text) => (
                <StoryParagraph key={text.slice(0, 48)} text={text} />
              ))}
            </div>
          </div>
        </section>

        {restPhotos.length ? (
          <section className="story-block" aria-label="Fotografie">
            <div className="portfolio-grid story-photos">
              {restPhotos.map((photo) => (
                <figure className="portfolio-item" key={photo.src}>
                  <Image src={photo.src} alt={photo.alt} width={1200} height={900} sizes="50vw" unoptimized />
                </figure>
              ))}
            </div>
          </section>
        ) : null}

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
