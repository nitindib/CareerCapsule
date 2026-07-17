import { formatDate } from "@/lib/formatDate";
import StatusToggle from "@/components/admin/shared/StatusToggle";
import StatusBadge from "@/components/admin/jobs/StatusBadge";
import FeaturedButton from "@/components/admin/shared/FeaturedButton";
import DeleteButton from "@/components/admin/jobs/DeleteButton";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import Link from "next/link";
import { getJobs } from "@/services/jobs";

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;

  const jobs = await getJobs(search);
  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              💼 Manage Jobs
            </h1>

            <p className="mt-2 text-slate-600">
              Total Jobs: {jobs.length}
            </p>
          </div>

          <Link
            href="/admin/jobs/new"
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            + Add New Job
          </Link>

        </div>
        <form className="mb-6 flex gap-3">

  <input
    type="text"
    name="search"
    defaultValue={search}
    placeholder="🔍 Search jobs..."
    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <button
    type="submit"
    className="rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white hover:bg-slate-900"
  >
    Search
  </button>

</form>

        {jobs.length === 0 ? (

          <div className="rounded-2xl bg-white p-10 text-center shadow-lg">

            <div className="text-6xl">
              📋
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              No Jobs Found
            </h2>

            <p className="mt-3 text-slate-600">
              Click on "Add New Job" to create your first job.
            </p>

          </div>

        ) : (

          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

            <table className="w-full">

              <thead className="bg-slate-200">

                <tr>

                  <th className="p-4 text-left">
                    Title
                  </th>

                  <th className="p-4 text-left">
                    Organization
                  </th>

                  <th className="p-4 text-left">
                    Qualification
                  </th>

                  <th className="p-4 text-left">
                    Last Date
                  </th>
                  <th className="p-4 text-left">
  Featured
</th>
<th className="p-4 text-left">
  Status
</th>
                  <th className="p-4 text-left">
  Action
</th>

                </tr>

              </thead>

              <tbody>

                {jobs.map((job: any) => (

                  <tr
                    key={job.id}
                    className="border-t hover:bg-slate-50"
                  >

                    <td className="p-4 font-semibold">
                      {job.title}
                    </td>

                    <td className="p-4">
                      {job.organization}
                    </td>

                    <td className="p-4">
                      {job.qualification}
                    </td>

                    <td className="p-4">
                      {formatDate(job.application_last_date)}
                    </td>
                    <td className="p-4">
  <FeaturedButton
  id={job.id}
  table="jobs"
  featured={job.featured}
/>
</td>
<td className="p-4">
 <StatusToggle
  id={job.id}
  table="jobs"
  status={job.status}
/>
</td>
                   <td className="p-4">
  <div className="flex gap-3">

    <Link
    href={`/admin/jobs/${job.id}/view`}
    className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
  >
    View
  </Link>

  <Link
    href={`/admin/jobs/${job.id}`}
    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
  >
    Edit
  </Link>

  <DeleteButton id={job.id} />

</div>

  
</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>
    </AdminLayout>
  );
}