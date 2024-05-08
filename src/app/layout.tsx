import type { Metadata } from "next";
import { inter } from "@/components/fonts";
import "@/components/globals.css";

export const metadata: Metadata = {
  title: "FidiJobs",
  description: "Th official app to create your resume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
