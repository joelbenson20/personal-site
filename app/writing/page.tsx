import Link from "next/link";
import { getAllWriting } from "@/lib/writing";

export const metadata = { title: "Writing" };

export default function WritingIndex() {
  const items = getAllWriting();
  return (
    <div>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.href}>
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                {item.title} ↗
              </a>
            ) : (
              <Link href={item.href} className="font-medium hover:underline">{item.title}</Link>
            )}
            <p className="text-sm text-gray-500">
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
