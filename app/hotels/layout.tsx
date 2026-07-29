import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Hotels Worldwide | Global Travel Solutions LLC",
  description:
    "A curated selection of exceptional hotels around the world, with filters by region and travel style.",
};

export default function HotelsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
