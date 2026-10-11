import Link from "next/link";

const links = [
    { href: "/", label: "Home" },
    { href: "/cv", label: "CV" },
    { href: "/blog", label: "Blog" },
]

export default function Nav() {
    return (
        <nav className="flex gap-6 py-6 text-sm">
            {links.map((l) => (
                <Link key={l.href} href={l.href} className="hover:underline">
                    {l.label}
                </Link>
            ))}
        </nav>
    )
}