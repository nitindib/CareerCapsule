import { getJobById } from "@/services/jobs";
import EditJobForm from "@/components/admin/jobs/EditJobForm";

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job = await getJobById(id);

  if (!job) {
    return (
  <main className="min-h-screen bg-slate-100 p-10">

    <div className="mx-auto max-w-5xl">

      <h1 className="mb-8 text-4xl font-bold">
        ✏️ Edit Job
      </h1>

      <EditJobForm job={job} />

    </div>

  </main>
);
  }

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Edit Job
      </h1>

      <div className="rounded-xl bg-white p-6 shadow">

        <p>
          <b>Title:</b> {job.title}
        </p>

        <p className="mt-3">
          <b>Organization:</b> {job.organization}
        </p>

        <p className="mt-3">
          <b>Qualification:</b> {job.qualification}
        </p>

      </div>

    </div>
  );
}