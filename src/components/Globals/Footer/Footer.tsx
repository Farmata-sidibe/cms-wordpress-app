import Image from "next/image"
import { print } from "graphql/language/printer"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import InstagramFeed from "@/components/ui/Instagram-feed"

// import type { FooterItem, RootQueryToMenuItemConnection } from "@/gql/graphql"
// import { fetchGraphQL } from "@/utils/fetchGraphQL"
// import gql from "graphql-tag"

const quickLinks = [
  {
    title: "International Website",
    href: "/international-website",
  },
  {
    title: "Cross-Border Ecommerce",
    href: "/cross-border-ecommerce",
  },
  {
    title: "International Marketplaces",
    href: "/international-marketplaces",
  },
  {
    title: "International Inbound Marketing",
    href: "/international-inbound-marketing",
  },
  {
    title: "International Social Media",
    href: "/international-social-media",
  },
  {
    title: "Generative AI for export",
    href: "/generative-ai-export",
  },
  {
    title: "Export Management",
    href: "/export-management",
  },
  {
    title: "Export Multichannel Audit",
    href: "/export-multichannel-audit",
  },
  {
    title: "Export Multichannel Strategy",
    href: "/export-multichannel-strategy",
  },
  {
    title: "Books",
    href: "/books",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "About us",
    href: "/about-us",
  },
]

const partnerLogos = [
  {
    src: "/logoFooter/Adherent_OSCI_RVB-r3317qaeb3gsz5nfgtpd5r7exitopsn1xfecngqee4.jpg?height=60&width=60",
    alt: "OSCI",
  },
  {
    src: "/logoFooter/Amazon-Seller-Central-Patner-Networks-r3317irosf6ie9ycoqgclt3q6fur07t78e6gt91jrw.jpg?height=60&width=60",
    alt: "Amazon Seller Central Partner Network",
  },
  {
    src: "/logoFooter/logo-activateur-e1663859105601.png?height=60&width=60",
    alt: "Activateur France num",
  },
  {
    src: "/logoFooter/logo-france-relance.png?height=60&width=60",
    alt: "France Relance",
  },
]

interface FooterProps {
  instagramAccessToken?: string
}

export default function Footer({ instagramAccessToken }: FooterProps) {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          {/* Section gauche - 5 colonnes sur desktop */}
          <div className="lg:col-span-5 space-y-8">
            {/* Logo */}
            <div>
              <Link href="/" className="inline-block">
              
                <Image
                  src="/logo.png?height=120&width=200"
                  alt="ToWebOrNotToWeb"
                  width={200}
                  height={120}
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            {/* Formulaire d'audit */}
            <div className="space-y-4">
              <h2 className="text-xl lg:text-2xl font-bold leading-tight max-w-sm">
                Get a free audit of your international site
              </h2>

              <form className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-gray-400 h-10"
                />
                <Button className="bg-red-500 hover:bg-red-600 text-white px-6 h-10 whitespace-nowrap">Send</Button>
              </form>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                <strong>
                  ToWebOrNotToWeb specialises in digital export and helps companies develop cross-border e-commerce and
                  multi-channel international sales.
                </strong>
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Contact</h4>
              <div className="space-y-1 text-gray-300 text-sm">
                <p>contact@towebornottoweb.com</p>
                <p>+33 9 53 34 96 32</p>
              </div>
            </div>

            {/* Logos partenaires */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center p-2 bg-gray-800 rounded-lg">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={120}
                    height={120}
                    className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>

            {/* Liens légaux */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy policy
              </Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                Cookie policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">
                Terms and conditions
              </Link>
            </div>
          </div>

          {/* Section centrale - Quick Links - 3 colonnes sur desktop */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Quick Links</h4>

            <div className="grid grid-cols-1 gap-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm py-1 block"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Section droite - Instagram - 4 colonnes sur desktop */}
           <div className="lg:col-span-4">
            <InstagramFeed />
          </div>
        </div>
      </div>
    </footer>
  )
}
