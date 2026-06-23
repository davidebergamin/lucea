import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { stories } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Storie",
  description:
    "Album dei matrimoni Lucea: matrimoni reali a Milano, in Lombardia e in trasferta, fotografati con naturalezza.",
  alternates: { canonical: "/storie" }
};

export default function StoriePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="poster-section warm poster-section--compact" aria-labelledby="storie-title">
          <div className="poster-inner">
            <p className="label">Storie</p>
            <h1 id="storie-title" className="poster-title">
              Album
              <br />
              <span className="accent">reali.</span>
            </h1>
          </div>
        </section>

        <section className="storie-grid" aria-label="Album matrimoni Lucea">
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
