import CardWrapper from "@/components/dashboard/cards";
import { lusitana } from "@/fonts/fonts";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper params={{ id: "410544b2-4001-4271-9855-fec4b6a6442a" }} />
      </div>
    </main>
  );
}
