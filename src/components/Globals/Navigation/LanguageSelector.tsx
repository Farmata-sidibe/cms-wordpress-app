
// version 2
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, ChevronDown } from "lucide-react"
import { locales, localeNames, type Locale } from "@/utils/i18n"

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Déterminer la langue actuelle à partir du chemin
  const getCurrentLocale = (): Locale => {
    const segments = pathname.split("/").filter(Boolean)
    const localeSegment = segments[0]
    return locales.includes(localeSegment as Locale) ? (localeSegment as Locale) : "en"
  }

  const currentLocale = getCurrentLocale()

  // Obtenir le chemin sans le préfixe de langue
  const getPathWithoutLocale = (path: string) => {
    const segments = path.split("/").filter(Boolean)
    if (locales.includes(segments[0] as Locale)) {
      return "/" + segments.slice(1).join("/")
    }
    return path
  }

  // Chemin actuel sans la langue
  const currentPath = getPathWithoutLocale(pathname)

  // Fonction pour obtenir le chemin localisé
  const getLocalizedPath = (targetLocale: Locale) => {
    return `/${targetLocale}${currentPath === "/" ? "" : currentPath}`
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-800 hover:text-blue-900"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-5 w-5 mr-1" aria-hidden="true" />
        <span className="uppercase">{currentLocale}</span>
        <ChevronDown className="h-4 w-4 ml-1" aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-2">
            {locales.map((lang) => (
              <Link
                key={lang}
                href={getLocalizedPath(lang)}
                className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                  currentLocale === lang ? "text-blue-900 font-medium" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                {localeNames[lang]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
