//import CardWrapper from '@/app/ui/dashboard/cards';
import { lusitana } from "@/components/fonts";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        My Resumes
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <CardWrapper /> */}
      </div>
    </main>
  );
}