"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import styles from "./Navigation.module.css"

type NavItemProps = {
  label: string
  uri: string
  target?: string | null
  children?: {
    uri: string
    label: string
    target?: string | null
  }[]
}

export default function NavItem({ label, uri, target, children }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const hasDropdown = children && children.length > 0

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

 return (
  <div className="relative" ref={dropdownRef}>
    {hasDropdown ? (
      <div
        className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
        onClick={toggleDropdown}
      >
        <span>{label}</span>
        <ChevronDown
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </div>
    ) : (
      <Link
        href={uri}
        target={target || "_self"}
        className="px-4 py-2 text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
      >
        {label}
      </Link>
    )}

    {hasDropdown && isOpen && (
      <div className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-lg border border-gray-100 z-50 py-2 w-56">
        {children.map((child, idx) => (
          <Link
            key={idx}
            href={child.uri}
            target={child.target || "_self"}
            className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-red-500 transition-colors duration-150"
            onClick={() => setIsOpen(false)}
          >
            {child.label}
          </Link>
        ))}
      </div>
    )}
  </div>
)

}
