import "@/styles/globals.css";
import { Metadata } from "next";
import { inter } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | FindiJobs",
    default: "FindiJobs",
  },
  description: "The official app to create your resume.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
