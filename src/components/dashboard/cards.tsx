import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  RssIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/fonts/fonts";
import { fetchResumeById } from "@/db/resumes";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const resume = await fetchResumeById(id);

  if (!resume) {
    return <div>Loading...</div>; // Or any other placeholder you'd like to show
  }

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Collected" value={resume.id} type="collected" />
      <Card title="Pending" value={resume.user_id} type="pending" />
      <Card title="Total Invoices" value={resume.name} type="invoices" />
      <Card title="Total Customers" value={resume.title} type="customers" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
