// import { draftMode } from "next/headers";
// import { Inter } from "next/font/google";
// import Head from "next/head"; // Ajouté
// import Script from "next/script";

// import "@/app/globals.css";

// import Navigation from "@/components/Globals/Navigation/Navigation";
// import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { isEnabled } = draftMode();

//   return (
//     <html lang="en">
//       <Head>
//         <link
//           rel="stylesheet"
//           href="https://towebornottoweb.com/wp-content/themes/astra/assets/css/minified/style.min.css"
//         />
//       </Head>
//       <body className={inter.className}>
//         {isEnabled && <PreviewNotice />}
//         <Navigation />
//         {children}
//         <Script
//           strategy="afterInteractive"
//           src="https://towebornottoweb.com/wp-content/themes/astra/assets/css/minified/style.min.css"
//         />
//       </body>
//     </html>
//   );
// }

//new version

import { draftMode } from "next/headers";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

import Navigation from "@/components/Globals/Navigation/Navigation";
import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Export - All you need is at ToWebOrNotToWeb",
  description:
    "Check our digital export services: we can help you sell more internationally through cross-border e-commerce, marketplaces, SEO, SEA & more!",
  alternates: {
    languages: {
      "en-US": "https://towebornottoweb.com/en/",
      "fr-FR": "https://towebornottoweb.com/fr/",
      "it-IT": "https://towebornottoweb.com/it/",
      "de-DE": "https://towebornottoweb.com/de/",
      "es-ES": "https://towebornottoweb.com/es/",
      "zh-CN": "https://towebornottoweb.com/zh-hans/",
      "x-default": "https://towebornottoweb.com/en/",
    },
  },
  openGraph: {
    title: "Digital Export",
    description:
      "With digital export, we help companies sell more internationally by providing cross-border e-commerce, marketplaces, SEO, SEA & much more.",
    url: "https://towebornottoweb.com/en/digital-export/",
    siteName: "ToWebOrNotToWeb",
    images: [
      {
        url: "https://towebornottoweb.com/wp-content/uploads/2024/11/vehicles-laptop-supply-chain-representation-scaled.jpg",
        width: 2560,
        height: 1707,
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://towebornottoweb.com/wp-content/uploads/2024/11/vehicles-laptop-supply-chain-representation-scaled.jpg",
    ],
    site: "@ToWebOrNoToWeb",
  },
  verification: {
    google: "87rSWkbyOt8NJK5mbSylM3FOiQkvtD3eO4mRpE2lPAQ",
  },
  icons: {
    icon: [
      {
        url: "https://towebornottoweb.com/wp-content/uploads/2021/12/cropped-cropped-cropped-cropped-to-web-or-not-to-web_towebornottoweb_logo-2-1-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://towebornottoweb.com/wp-content/uploads/2021/12/cropped-cropped-cropped-cropped-to-web-or-not-to-web_towebornottoweb_logo-2-1-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: {
      url: "https://towebornottoweb.com/wp-content/uploads/2021/12/cropped-cropped-cropped-cropped-to-web-or-not-to-web_towebornottoweb_logo-2-1-180x180.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        url: "https://towebornottoweb.com/wp-content/uploads/2021/12/cropped-cropped-cropped-cropped-to-web-or-not-to-web_towebornottoweb_logo-2-1-270x270.png",
        rel: "msapplication-TileImage",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Attendre la valeur de draftMode()
  const { isEnabled } = await draftMode();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      {/* Ajoute ici ton CSS WordPress */}
      <link
          rel="stylesheet"
          href="https://towebornottoweb.com/wp-content/themes/astra/assets/css/minified/style.min.css"
        />
      
      {/* Replace X with your page/post ID */}
        <link rel="stylesheet" href="https://towebornottoweb.com/wp-content/plugins/elementor/assets/css/frontend.min.css" />
        <link rel="stylesheet" id="astra-theme-css-css" href="https://towebornottoweb.com/wp-content/themes/astra/assets/css/minified/main.min.css?ver=4.9.0" media="all"/>
        <link rel="stylesheet" href="https://towebornottoweb.com/wp-content/uploads/elementor/css/post-146.css" /> 
       
      </head>

      <body className={inter.className}>
        {isEnabled && <PreviewNotice />}
        <Navigation />
        {children}
      </body>
    </html>
  );
}
