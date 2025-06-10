import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";
import { setSeoData } from "@/utils/seoData";

import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ContentInfoQuery } from "@/queries/general/ContentInfoQuery";
import { ContentNode } from "@/gql/graphql";
import PageTemplate from "@/components/Templates/Page/PageTemplate";
import { nextSlugToWpSlug } from "@/utils/nextSlugToWpSlug";
import PostTemplate from "@/components/Templates/Post/PostTemplate";
import { SeoQuery } from "@/queries/general/SeoQuery";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = await  nextSlugToWpSlug(params.slug);
  const isPreview = slug.includes("preview");

  const cleanSlug = isPreview ? slug.split("preview/")[1] : slug;

  if (!cleanSlug) {
    console.warn("Missing slug for SEO query.");
    return notFound();
  }
  
  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(SeoQuery),
    {
      slug: cleanSlug,
      idType: isPreview ? "DATABASE_ID" : "URI",
      // language: locale.toUpperCase(),
    },
  );

  if (!contentNode) {
    return notFound();
  }

  const metadata = setSeoData({ seo: contentNode.seo });

  return {
    ...metadata,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${slug}`,
    },
  } as Metadata;
}
// gére pas les langues ici mais laisser vide aussi si on utilise
export function generateStaticParams() {
  return [];
}


export default async function Page({ params }: Props) {
  const slug = await  nextSlugToWpSlug(params.slug);
  const isPreview = slug.includes("preview");
  // console.log(locale);
  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(ContentInfoQuery),
    {
      slug: isPreview ? slug.split("preview/")[1] : slug,
      idType: isPreview ? "DATABASE_ID" : "URI",
      // language: locale
    },
  );

  if (!contentNode) return notFound();

  switch (contentNode.contentTypeName) {
    case "page":
      return <PageTemplate node={contentNode} />;
    case "post":
      return <PostTemplate node={contentNode} />;
    default:
      return <p>{contentNode.contentTypeName} not implemented</p>;
  }
}


export const revalidate = 60; // Rafraîchit toutes les 60 secondes


