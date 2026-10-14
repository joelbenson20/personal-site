"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/writing", label: "Writing" },
]

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 py-6 text-sm">
      {links.map((l) => {
        const isActive =
          l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);

        return (
          <Link
            key={l.href}
            href={l.href}
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                ? "rounded px-3 py-1 bg-black text-white"
                : "rounded px-3 py-1 hover:underline"
            }
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  )
}
