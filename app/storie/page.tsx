import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { stories } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Storie",
  description:
    "È successo davvero: matrimoni, risate e lacrime raccontati da Lucea. Milano, Lombardia e trasferte.",
  alternates: { canonical: "/storie" }
};

export default function StoriePage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <section className="page-block page-block--tight" aria-labelledby="storie-title">
          <div className="page-block-inner stack align-start">
            <h1 id="storie-title" className="page-title">
              È successo <span className="accent">davvero</span>
            </h1>
            <p className="body-copy">Matrimoni, risate e lacrime, raccontati da noi.</p>
          </div>
        </section>

        <section className="storie-grid" aria-label="Storie Lucea">
          {stories.map((story) => (
            <Link className="storie-card" href={`/storie/${story.slug}`} key={story.slug}>
              <Image src={story.image} alt={story.alt} width={900} height={680} sizes="(max-width: 860px) 100vw, 50vw" unoptimized />
              <span className="storie-card-caption">
                <span className="label">{story.location}</span>
                <span className="storie-card-title">{story.title}</span>
              </span>
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
