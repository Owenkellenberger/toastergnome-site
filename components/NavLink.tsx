"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  match?: "exact" | "startsWith";
  children: React.ReactNode;
};

export default function NavLink({ href, match = "startsWith", children }: Props) {
  const pathname = usePathname();
  const isActive =
    match === "exact" ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={isActive ? "text-gold" : "text-charcoal hover:text-gold transition-colors"}
    >
      {children}
    </Link>
  );
}
