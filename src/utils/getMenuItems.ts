import { print } from "graphql/language/printer";
import { RootQueryToMenuItemConnection } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import gql from "graphql-tag";

export async function getMenuItems(language: string) {
  const menuQuery = gql`
    query MenuQuery($lang: LanguageCodeFilterEnum!) {
      menuItems(where: { location: PRIMARY, language: $lang }, first: 100) {
        nodes {
          id
          uri
          label
          target
          childItems {
            nodes {
              id
              uri
              label
              target
            }
          }
        }
      }
    }
  `;

  const { menuItems } = await fetchGraphQL<{ menuItems: RootQueryToMenuItemConnection }>(
    print(menuQuery),
    { lang: language }
  );

  return menuItems?.nodes ?? [];
}
