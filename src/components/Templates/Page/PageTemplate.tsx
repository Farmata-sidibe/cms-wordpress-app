
import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { PageQuery } from "./PageQuery";
import HomePage from "./Homepage";
import "@/app/globals.css";


interface TemplateProps {
  node: ContentNode;
}

export default async function PageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: node.databaseId,
    preview: false,
    
  });
  console.log("node.databaseId", node.databaseId);
  // Si c'est la page d'accueil, utiliser le composant HomePage
  if (node.slug === "/" || node.databaseId === 27975 || node.databaseId === 1) {
    console.log(node.slug);
    // return <HomePage />
    return <HomePage content={page?.content || ""} />
  }
  return <div dangerouslySetInnerHTML={{ __html: page?.content || "" }} />;
}

// VERSION 1
// import { Page } from "@/gql/graphql";
// import Script from "next/script";

// interface TemplateProps {
//   node: Page;
// }

// export default function PageTemplate({ node }: TemplateProps) {
//   return (
//     <>
//       {/* Enqueued styles */}
//       {node.enqueuedStylesheets?.nodes.map((style, index) => (
//         <link
//           key={index}
//           rel="stylesheet"
//           href={style?.src || ""}
//         />
//       ))}

//       {/* Enqueued scripts */}
//       {node.enqueuedScripts?.nodes.map((script, index) => (
//         <Script
//           key={index}
//           src={script?.src || ""}
//           strategy="afterInteractive"
//         />
//       ))}

//       <div dangerouslySetInnerHTML={{ __html: node.content || "" }} />
//     </>
//   );
// }


// 2
// import { Page } from "@/gql/graphql";
// import Script from "next/script";

// interface TemplateProps {
//   node: Page;
// }

// export default function PageTemplate({ node }: TemplateProps) {
//   return (
//     <>

//       {/* 3. Enqueued Stylesheets */}
//       {node.enqueuedStylesheets?.nodes.map((style, i) => (
//         <link
//           key={`style-${i}`}
//           rel="stylesheet"
//           href={style?.src || ""}
//         />
//       ))}

//       {/* 4. Enqueued Scripts */}
//       {node.enqueuedScripts?.nodes.map((script, i) => (
//         <Script
//           key={`script-${i}`}
//           src={script?.src || ""}
//           strategy="beforeInteractive"
//         />
//       ))}

//       {/* 5. HTML Content from WordPress */}
//       <div 
//       suppressHydrationWarning={true}
//       dangerouslySetInnerHTML={{ __html: node.content || "" }} />
//     </>
//   );
// }