import { getJobById } from "@/services/jobs";
import JobDetailsCard from "@/components/jobs/JobDetailsCard";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobDetailsPage({
  params,
}: Props) {

  const { id } = await params;

  const job = await getJobById(id);

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-10">

      <div className="mx-auto max-w-6xl px-6">

        <JobDetailsCard job={job} />

      </div>

    </main>
  );
}