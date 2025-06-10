
import { draftMode } from "next/headers";
import { Inter } from "next/font/google";

import "@/app/globals.css";

import Navigation from "@/components/Globals/Navigation/Navigation";
import Footer from "@/components/Globals/Footer/Footer"
import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en">
      {/* <style>@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');</style> */}
      <body className={inter.className}>
        {isEnabled && <PreviewNotice />}
        <Navigation />
        {children}
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <Footer />
      </body>
    </html>
  );
}