import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Instagram } from "lucide-react"

export default function InstagramFeed() {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-400 uppercase tracking-wide">Follow us</h4>
{/* Container pour l'iframe Instagram */}
        {/* <div className="relative"> */}
          {/* Iframe WordPress avec le feed Instagram */}
          <div className="w-full h-100 rounded-lg overflow-hidden bg-black">
            <iframe
              src="https://towebornottoweb.com/feed-2/"
              title="Instagram Feed"
              width="100%"
              height="100%"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              
              loading="lazy"
              className="w-full h-full bg-transparent"
            />
          </div>
        {/* </div> */}
    </div>
  )
}
