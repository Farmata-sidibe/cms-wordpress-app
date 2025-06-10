

"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import styles from "./Navigation.module.css"

type MobileMenuProps = {
  children: React.ReactNode
}

export default function MobileMenu({ children }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className={styles.mobileMenuButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`${styles.menuItems} ${isOpen ? styles.menuItemsOpen : ""}`}>{children}</div>
    </>
  )
}
