import type { Metadata } from "next";
import { Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const goudy = Sorts_Mill_Goudy({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: { default: "Joel", template: "%s · Joel"},
  description: "Joel's website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${goudy.className} mx-auto max-w-2xl px-4`}>
        <Nav />
        <main className="pb-16">{children}</main>
      </body>
    </html>
  );
}
