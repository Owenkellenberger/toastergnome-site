import Link from "next/link";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-100">
      <div className="max-w-container mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
        <Link href="/" aria-label="Toastergnome home" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Toastergnome"
            className="h-20 md:h-24 w-auto"
          />
        </Link>
        <nav className="flex items-center gap-8 text-sm md:text-base tracking-[0.18em] font-medium">
          <NavLink href="/" match="exact">
            WORKS
          </NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
        </nav>
      </div>
    </header>
  );
}
