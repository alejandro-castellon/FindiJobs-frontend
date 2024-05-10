import "@/styles/globals.css";
import type { Metadata } from "next";
import { inter } from "@/components/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | FindiJobs",
    default: "FindiJobs",
  },
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
