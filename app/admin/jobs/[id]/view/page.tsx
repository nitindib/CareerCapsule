import Link from "next/link";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import { getJobById } from "@/services/jobs";
import StatusBadge from "@/components/admin/jobs/StatusBadge";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobPreviewPage({ params }: Props) {
  const { id } = await params;

  const job = await getJobById(id);

  if (!job) {
    return (
      <AdminLayout>
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-10 shadow">
          <h1 className="text-3xl font-bold">Job Not Found</h1>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              👁 Job Preview
            </h1>

            <p className="mt-2 text-slate-500">
              Preview before publishing
            </p>
          </div>

          <div className="flex gap-3">

            <Link
              href="/admin/jobs"
              className="rounded-xl bg-slate-700 px-5 py-3 text-white"
            >
              ← Back
            </Link>

            <Link
              href={`/admin/jobs/${job.id}`}
              className="rounded-xl bg-blue-600 px-5 py-3 text-white"
            >
              Edit
            </Link>

          </div>

        </div>

        <div className="rounded-2xl bg-white p-8 shadow-xl">

          <h2 className="mb-8 text-3xl font-bold">
            {job.title}
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <p className="text-sm text-slate-500">
                Organization
              </p>

              <p className="text-lg font-semibold">
                {job.organization}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Post Name
              </p>

              <p className="text-lg font-semibold">
                {job.post_name}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Qualification
              </p>

              <p className="text-lg font-semibold">
                {job.qualification}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Last Date
              </p>

              <p className="text-lg font-semibold">
                {job.application_last_date}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Featured
              </p>

              <p className="text-lg font-semibold">
                {job.featured ? "⭐ Featured" : "☆ Normal"}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Status
              </p>

              <StatusBadge status={job.status} />
            </div>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}