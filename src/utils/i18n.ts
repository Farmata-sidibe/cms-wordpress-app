export type Locale = "en" | "fr" | "it" | "es" | "de" | "zh-hans"

export const locales: Locale[] = ["en", "fr", "it", "es", "de", "zh-hans"]

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  it: "Italiano",
  es: "Español",
  de: "Deutsch",
  "zh-hans": "中文",
}

export const defaultLocale: Locale = "en"

export function getLocaleFromPath(path: string): Locale {
  const segments = path.split("/").filter(Boolean)
  const localeSegment = segments[0]

  return locales.includes(localeSegment as Locale) ? (localeSegment as Locale) : defaultLocale
}
