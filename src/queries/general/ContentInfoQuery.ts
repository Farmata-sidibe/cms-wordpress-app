// import gql from "graphql-tag";

// export const ContentInfoQuery = gql`
//   query ContentInfo($slug: ID!, $idType: ContentNodeIdTypeEnum!) {
//     contentNode(id: $slug, idType: $idType) {
//       contentTypeName
//       databaseId
//       status
//       uri
//     }
//   }
// `;

// NEW

import gql from "graphql-tag";

export const ContentInfoQuery = gql`
  query ContentInfo($slug: ID!, $idType: ContentNodeIdTypeEnum!) {
  contentNode(id: $slug, idType: $idType) {
    contentTypeName
    databaseId
    status
    uri
    ... on Page {
      title
      content
      enqueuedStylesheets {
        nodes {
          src
        }
      }
      enqueuedScripts {
        nodes {
          src
        }
      }
    }
    ... on Post {
      title
      content
      enqueuedStylesheets {
        nodes {
          src
        }
      }
      enqueuedScripts {
        nodes {
          src
        }
      }
    }
  }
}
`;
