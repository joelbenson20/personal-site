import Link from "next/link";
import { getAllWriting } from "@/lib/writing";
import { BsBoxArrowUpRight } from "react-icons/bs"

export const metadata = { title: "Writing" };

export default function WritingIndex() {
  const items = getAllWriting();
  return (
    <div>
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item.href}>
            <h2 className="text-xl font-semibold">
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <BsBoxArrowUpRight className="mr-2 inline align-baseline text-sm" aria-hidden="true" />
                  {item.title}
                </a>
              ) : (
                <Link href={item.href} className="hover:underline">{item.title}</Link>
              )}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {item.date}
              {item.outlet && ` · ${item.outlet}`}
              {item.summary && ` — ${item.summary}`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
