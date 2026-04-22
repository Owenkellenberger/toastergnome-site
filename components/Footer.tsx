export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-neutral-100 mt-16">
      <div className="max-w-container mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <span>© Toastergnome Publishing {year}</span>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/toastergnome/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-charcoal transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/owen.kellenberger"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-charcoal transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
