// import { gql } from "graphql-tag"
// new version 
// graphql/queries.ts

// import { gql } from "@apollo/client";

// 🔹 Pages par langue

// New 1

// export const ContentInfoQuery = gql`
//   query ContentInfo($slug: ID!, $idType: ContentNodeIdTypeEnum!) {
//     contentNode(id: $slug, idType: $idType) {
//       menuItems(where: {location: PRIMARY, language: "en"}, first: 100) {
//       nodes {
//         id
//         uri
//         label
//         childItems {
//           nodes {
//             id
//             uri
//             target
//             label
//           }
//       }
//       }
//     }
//     pages {
//       nodes {
//         id
//         title
//         slug
//         uri
//         translations {
//           id
//           locale
//           post_title
//           href
//         }
//       }
//     }
//     posts {
//       nodes {
//         id
//         title
//         slug
//         uri
//         translations {
//           id
//           locale
//           post_title
//           href
//         }
//       }
//     }
//     }
//   }
// `

import gql from "graphql-tag";

export const ContentInfoQuery = gql`
  query ContentInfo($slug: ID!, $idType: ContentNodeIdTypeEnum!) {
    contentNode(id: $slug, idType: $idType) {
      contentTypeName
      databaseId
      status
      uri
    }
  }

`;

// NEW

// import gql from "graphql-tag";

// export const ContentInfoQuery = gql`
//   query ContentInfo($slug: ID!, $idType: ContentNodeIdTypeEnum!) {
//   contentNode(id: $slug, idType: $idType) {
//     contentTypeName
//     databaseId
//     status
//     uri
//     ... on Page {
//       title
//       content
//       enqueuedStylesheets {
//         nodes {
//           src
//         }
//       }
//       enqueuedScripts {
//         nodes {
//           src
//         }
//       }
//     }
//     ... on Post {
//       title
//       content
//       enqueuedStylesheets {
//         nodes {
//           src
//         }
//       }
//       enqueuedScripts {
//         nodes {
//           src
//         }
//       }
//     }
//   }
// }
// `;
