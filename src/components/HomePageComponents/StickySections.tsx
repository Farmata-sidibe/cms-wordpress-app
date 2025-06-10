"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Globe, ShoppingCart, Store, Share2, TrendingUp, Bot, Search, Target, Settings } from "lucide-react"

interface FlipCardProps {
  icon: React.ReactNode
  title: string
  bgColorCard: string
  textColor: string
  href: string
}

function FlipCard({ icon, title, bgColorCard,textColor, href }: FlipCardProps) {
  return (
    <div className="group relative h-40 w-[390px] overflow-hidden">
      {/* Front face */}
      <div className={`absolute inset-0 w-full h-full ${bgColorCard} backdrop-blur-sm flex flex-col items-center justify-center text-white p-6 border border-blue-500/30 transition-all duration-500 group-hover:scale-95 group-hover:opacity-0`}>
        <div className="mb-4 text-white transform transition-transform duration-500 group-hover:scale-110">{icon}</div>
        <h3 className="text-lg font-semibold text-center leading-tight">{title}</h3>
      </div>

      {/* Back face */}
      <div className={`absolute inset-0 w-full h-full bg-white backdrop-blur-sm flex flex-col items-center justify-center ${textColor} p-6 border border-white opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100`}>
        <a href={href} className="text-lg font-semibold text-center leading-tight mb-4">{title}</a>
      </div>
    </div>
  )
}

export default function StickySections() {
  return (
    <div className="relative">
      {/* Section 1: Cross-border online sales */}
      <section
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://towebornottoweb.com/wp-content/uploads/2022/03/3-e1662541983681.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        
        <div className="absolute inset-0 bg-black/40"></div>

        <div
         
        >
          <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Commerce en ligne cross-border</h2>
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Pour réussir sur les marchés étrangers, la vente en ligne doit être adaptée aux usages locaux. Nous vous
              aidons avec :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
              <FlipCard
                icon={<Globe size={48} />}
                title="Site web international"
                bgColorCard="bg-[#1E3052A1]"
                textColor="text-[#1e3052]"
                href="/international-website/"
              />
              <FlipCard
                icon={<ShoppingCart size={48} />}
                title="Ecommerce cross-border"
                bgColorCard="bg-[#1E3052A1]"
                textColor="text-[#1e3052]"
                href="/cross-border-ecommerce/"
              />
              <FlipCard
                icon={<Store size={48} />}
                title="Marketplaces internationales"
                bgColorCard="bg-[#1E3052A1]"
                textColor="text-[#1e3052]"
                href="/international-marketplaces/"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: AI and Digital Marketing */}
      <section
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://towebornottoweb.com/wp-content/uploads/2024/10/technological-futuristic-holograms-logistics-means-transport-scaled.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div
        
        >
          <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">IA et Marketing Digital</h2>
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Le numérique offre de nombreux canaux pour vendre à l'e-export. Nous vous aidons avec :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <FlipCard
                icon={<Share2 size={48} />}
                title="Réseaux sociaux internationaux"
                bgColorCard="bg-[#2DB6C47A]"
                textColor="text-[#2db6c4]"
                href="/international-social-media/"
              />
              <FlipCard
                icon={<TrendingUp size={48} />}
                title="Inbound marketing international"
                bgColorCard="bg-[#2DB6C47A]"
                textColor="text-[#2db6c4]"
                href="/international-inbound-marketing/"
              />
              <FlipCard
                icon={<Bot size={48} />}
                title="L'IA générative pour l'Export"
                bgColorCard="bg-[#2DB6C47A]"
                textColor="text-[#2db6c4]"
                href="/international-marketing-automation/"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Export & Multichannel Services */}
      <section
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://towebornottoweb.com/wp-content/uploads/2023/01/davide-manzini-dbolyOWXZ5w-unsplash-small.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        // data-sticky-section
        // className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900"
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div
         
        >
          <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Export & multichannel services</h2>
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Boost digital export sales with effective cross-border multichannel strategies. We can help with:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <FlipCard
                icon={<Search size={40} />}
                title="Export Multichannel Diagnostic"
                bgColorCard="bg-[#D57A3F80]"
                textColor="text-[#d57a3f]"
                href="https://www.towebornottoweb.com/export-multichannel-audit/"
              />
              <FlipCard
                icon={<Target size={40} />}
                title="Export Sales Strategy"
                bgColorCard="bg-[#D57A3F80]"
                textColor="text-[#d57a3f]"
                href="https://www.towebornottoweb.com/export-multichannel-strategy-design/"
              />
              <FlipCard
                icon={<Settings size={40} />}
                title="Export Sales Management"
                bgColorCard="bg-[#D57A3F80]"
                textColor="text-[#d57a3f]"
                href="https://www.towebornottoweb.com/export-management/"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
