import Link from "next/link";
import { supabase } from "@/lib/supabase";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import { formatDate } from "@/lib/formatDate";
import { deleteJob, toggleStatus, toggleFeatured } from "./actions";

export default async function JobsV2Page() {


const { data: jobs, error } = await supabase
.from("jobs_v2")
.select("*")
.order("created_at", { ascending: false });

if (error) {
console.error(error);
}

return ( <AdminLayout> <div className="mx-auto max-w-7xl"> <div className="mb-8 flex items-center justify-between"> <div> <h1 className="text-4xl font-bold">
💼 Manage Jobs V2 </h1> <p className="mt-2 text-slate-600">
Total Jobs: {jobs?.length || 0} </p> </div>

```
      <Link
        href="/admin/jobs-v2/new"
        className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
      >
        + Add New Job
      </Link>
    </div>

    {!jobs || jobs.length === 0 ? (
      <div className="rounded-2xl bg-white p-10 text-center shadow-lg">
        <div className="text-6xl">📋</div>
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
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Post Name</th>
              <th className="p-4 text-left">Total Posts</th>
              <th className="p-4 text-left">Created At</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
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
                  {job.post_name}
                </td>
                <td className="p-4">
                  {job.total_posts || "-"}
                </td>
                <td className="p-4">
                  {formatDate(job.created_at)}
                </td>
                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      job.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {job.status || "draft"}
                  </span>
                </td>
                <td className="p-4">
  <div className="flex flex-wrap gap-2">
    <Link
      href={`/admin/jobs-v2/${job.id}/view`}
      className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 hover:bg-blue-200"
    >
      View
    </Link>

    <Link
      href={`/admin/jobs-v2/${job.id}`}
      className="rounded-lg bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700 hover:bg-yellow-200"
    >
      Edit
    </Link>

    <form action={toggleStatus.bind(null, job.id, job.status)}>
      <button
        type="submit"
        className="rounded-lg bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700 hover:bg-purple-200"
      >
        {job.status === "published" ? "Draft" : "Publish"}
      </button>
    </form>

    <form action={toggleFeatured.bind(null, job.id, job.featured)}>
      <button
        type="submit"
        className="rounded-lg bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700 hover:bg-orange-200"
      >
        {job.featured ? "Unfeature" : "Feature"}
      </button>
    </form>

    <form action={deleteJob.bind(null, job.id)}>
      <button
        type="submit"
        className="rounded-lg bg-red-100 px-3 py-1 text-sm font-semibold text-red-700 hover:bg-red-200"
      >
        Delete
      </button>
    </form>
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
