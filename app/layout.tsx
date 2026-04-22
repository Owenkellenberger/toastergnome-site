import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://toastergnome.com";
const siteName = "Toastergnome";
const defaultTitle = "Toastergnome — Music Production by Owen Kellenberger";
const defaultDescription =
  "Music production, composition, and engineering by Owen Kellenberger.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s — Toastergnome",
  },
  description: defaultDescription,
  keywords: [
    "Toastergnome",
    "Owen Kellenberger",
    "music production",
    "recording",
    "mixing",
    "composition",
    "Pajamas",
  ],
  authors: [{ name: "Owen Kellenberger" }],
  creator: "Owen Kellenberger",
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName,
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: "/images/logo.png", alt: "Toastergnome" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/logo.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-ink">
        <Header />
        <main className="flex-1 w-full max-w-container mx-auto px-6 md:px-10 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
