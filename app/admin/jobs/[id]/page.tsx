import { notFound } from "next/navigation";
import { getJobById } from "@/services/jobs";
import JobForm from "@/components/admin/jobs/JobForm";

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job = await getJobById(id);

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl">

        <h1 className="mb-8 text-4xl font-bold">
          ✏️ Edit Job
        </h1>

        <JobForm
  mode="edit"
  job={job}
/>

      </div>
    </main>
  );
}