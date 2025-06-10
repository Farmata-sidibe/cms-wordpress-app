// import type { Metadata } from "next";
// import { print } from "graphql/language/printer";

// import { setSeoData } from "@/utils/seoData";

// import { fetchGraphQL } from "@/utils/fetchGraphQL";
// import { ContentNode, Page } from "@/gql/graphql";
// import { PageQuery } from "@/components/Templates/Page/PageQuery";
// import { SeoQuery } from "@/queries/general/SeoQuery";

// const notFoundPageWordPressId = 501;

// export async function generateMetadata(): Promise<Metadata> {
//   const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
//     print(SeoQuery),
//     { slug: notFoundPageWordPressId, idType: "DATABASE_ID" },
//   );

//   const metadata = setSeoData({ seo: contentNode.seo });

//   return {
//     ...metadata,
//     alternates: {
//       canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/404-not-found/`,
//     },
//   } as Metadata;
// }

// export default async function NotFound() {
//   const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
//     id: notFoundPageWordPressId,
//   });

//   return <div dangerouslySetInnerHTML={{ __html: page.content || " " }} />;
// }


import { fetchGraphQL } from "@/utils/fetchGraphQL"

// Requête pour récupérer la page 404
const NOT_FOUND_QUERY = `
  query NotFoundPage {
    page(id: "404", idType: URI) {
      title
      content
    }
  }
`

export default async function NotFound() {
  let page = {
    title: "Page non trouvée",
    content: "<div><h1>404 - Page non trouvée</h1><p>La page que vous recherchez n'existe pas.</p></div>",
  }

  try {
    // Essayer de récupérer la page 404 personnalisée de WordPress
    const data = await fetchGraphQL(NOT_FOUND_QUERY)

    // Vérifier si la page existe avant d'utiliser ses propriétés
    if (data?.page?.content) {
      page = data.page
    }
  } catch (error) {
    console.error("Error fetching 404 page:", error)
    // Utiliser le contenu par défaut défini ci-dessus
  }

  return <div dangerouslySetInnerHTML={{ __html: page.content || "" }} />
}
