import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Toastergnome",
};

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-2xl font-medium tracking-tight mb-8">Contact</h1>
      <ContactForm />
    </section>
  );
}
