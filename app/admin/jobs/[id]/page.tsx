import { getJobById } from "@/services/jobs";

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job = await getJobById(id);

  if (!job) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">
          Job Not Found
        </h1>
      </div>
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