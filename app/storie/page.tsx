import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { breadcrumbJsonLd, pageMetadata } from "../../lib/seo";
import { storiesNewestFirst } from "../../lib/site-content";

export const metadata: Metadata = pageMetadata({
  title: "Storie di matrimonio a Milano e in Lombardia",
  description:
    "Matrimoni raccontati da Lucea: Cantù, Abbiategrasso, Varese, Bergamo. Reportage vero, foto spontanee, zero pose forzate.",
  path: "/storie"
});

export default function StoriePage() {
  return (
    <>
      <SiteHeader />
      <main className="page-offset">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Storie", path: "/storie" }
          ])}
        />
        <section className="page-block page-block--tight" aria-labelledby="storie-title">
          <div className="page-block-inner stack align-start">
            <h1 id="storie-title" className="page-title">
              È successo <span className="accent">davvero</span>!
            </h1>
            <p className="body-copy">Matrimoni, risate e lacrime, raccontati da noi.</p>
          </div>
        </section>

        <section className="storie-grid" aria-label="Storie Lucea">
          {storiesNewestFirst.map((story) => (
            <Link className="storie-card" href={`/storie/${story.slug}`} key={story.slug}>
              <Image src={story.image} alt={story.alt} width={900} height={680} sizes="(max-width: 860px) 100vw, 50vw" unoptimized />
              <span className="storie-card-title">{story.title}</span>
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
