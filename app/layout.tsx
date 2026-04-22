import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Toastergnome",
  description: "Music production, composition, and engineering by Owen Kellenberger.",
  icons: { icon: "/favicon.ico" },
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
