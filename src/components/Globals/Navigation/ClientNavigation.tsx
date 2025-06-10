"use client";

import { MenuItem } from "@/gql/graphql";
import Link from "next/link";
import { useState } from "react";

type Props = {
  items: MenuItem[];
  initialLanguage: string;
};

export default function ClientNavigation({ items, initialLanguage }: Props) {
  const [language, setLanguage] = useState(initialLanguage);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md z-50" role="navigation">
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-xl font-bold text-blue-600">Logo</Link>

        <ul className="flex items-center space-x-6">
          {items.map((item) => {
            if (!item.uri) return null;

            const hasChildren = item.childItems?.nodes?.length > 0;

            return (
              <li key={item.id} className="relative group">
                <Link
                  href={item.uri}
                  target={item.target || "_self"}
                  className="text-sm font-medium text-gray-900 hover:text-blue-600"
                >
                  {item.label}
                </Link>

                {hasChildren && (
                  <ul className="absolute left-0 mt-2 hidden min-w-[200px] bg-white border shadow-lg group-hover:block z-50">
                    {item.childItems.nodes.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={child.uri || "#"}
                          target={child.target || "_self"}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="ml-auto">
        <select
          className="border px-2 py-1 text-sm"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">🇬🇧</option>
          <option value="fr">🇫🇷</option>
          <option value="es">🇪🇸</option>
          <option value="de">🇩🇪</option>
          <option value="it">🇮🇹</option>
          <option value="zh">🇨🇳</option>
        </select>
      </div>
    </nav>
  );
}
