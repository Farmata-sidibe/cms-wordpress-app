
// version 2
import Image from "next/image"
import { print } from "graphql/language/printer"
import Link from "next/link"

import styles from "./Navigation.module.css"
import NavItem from "./NavItem"
import LanguageSelector from "./LanguageSelector"
import MobileMenu from "./MobileMenu"

import type { MenuItem, RootQueryToMenuItemConnection } from "@/gql/graphql"
import { fetchGraphQL } from "@/utils/fetchGraphQL"
import gql from "graphql-tag"

// ✅ Fonction pour filtrer les doublons
function getFilteredMenuItems(items: MenuItem[]): MenuItem[] {
  const childIds = new Set(
    items.flatMap((item) => item.childItems?.nodes.map((child) => child.id) || [])
  )

  return items.filter((item) => !childIds.has(item.id))
}

// ✅ Récupération des données du menu
async function getData() {
  const menuQuery = gql`
    query MenuQuery {
      menuItems(where: { location: PRIMARY, language: "fr" }, first: 100) {
        nodes {
          id
          uri
          label
          target
          childItems {
            nodes {
              id
              uri
              target
              label
            }
          }
        }
      }
    }
  `

  const { menuItems } = await fetchGraphQL<{
    menuItems: RootQueryToMenuItemConnection
  }>(print(menuQuery))

  if (menuItems === null) {
    throw new Error("Failed to fetch data")
  }

  return menuItems
}

// ✅ Composant principal
export default async function Navigation() {
  const menuItems = await getData()
  const filteredMenuItems = getFilteredMenuItems(menuItems.nodes)

  return (
    <nav
      className={styles.navigation}
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <div className={styles.navigationContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={120} height={60} priority />
          </Link>
        </div>

        <MobileMenu>
          {filteredMenuItems.map((item: MenuItem, index: number) => {
            if (!item.uri) return null

            return (
              <NavItem
                key={index}
                label={item.label}
                uri={item.uri}
                target={item.target}
                children={item.childItems?.nodes.map((child) => ({
                  uri: child.uri || "",
                  target: child.target,
                  label: child.label || "",
                }))}
              />
            )
          })}
        </MobileMenu>

        <LanguageSelector />
      </div>
    </nav>
  )
}

