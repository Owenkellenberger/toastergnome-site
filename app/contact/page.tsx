import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Owen Kellenberger about music production, recording, mixing, and collaboration.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Toastergnome",
    description:
      "Get in touch with Owen Kellenberger about music production, recording, mixing, and collaboration.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-2xl font-medium tracking-tight mb-8">Contact</h1>
      <ContactForm />
    </section>
  );
}
