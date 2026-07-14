import AdminLayout from "@/components/admin/layout/AdminLayout";
import Link from "next/link";
import { getDashboardStats } from "@/services/jobs";

export default async function AdminDashboard() {

  const stats = await getDashboardStats();
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold">
        👋 Welcome to CareerCapsule Admin
      </h1>

      <p className="mt-3 text-slate-600">
        Manage Jobs, Results, Admit Cards, Schemes and everything from one place.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

  <div className="rounded-2xl bg-white p-6 shadow">
    <p className="text-slate-500">💼 Total Jobs</p>
    <h2 className="mt-3 text-4xl font-bold">
      {stats.total}
    </h2>
  </div>

  <div className="rounded-2xl bg-green-50 p-6 shadow">
    <p className="text-green-700">🟢 Published</p>
    <h2 className="mt-3 text-4xl font-bold">
      {stats.published}
    </h2>
  </div>

  <div className="rounded-2xl bg-yellow-50 p-6 shadow">
    <p className="text-yellow-700">🟡 Pending</p>
    <h2 className="mt-3 text-4xl font-bold">
      {stats.pending}
    </h2>
  </div>

  <div className="rounded-2xl bg-red-50 p-6 shadow">
    <p className="text-red-700">🔴 Closed</p>
    <h2 className="mt-3 text-4xl font-bold">
      {stats.closed}
    </h2>
  </div>

</div>
<div className="mt-10 grid gap-8 lg:grid-cols-2">

  <div className="rounded-2xl bg-white p-6 shadow">

    <h2 className="mb-5 text-2xl font-bold">
      📋 Recent Jobs
    </h2>

    <div className="space-y-4">

      {stats.recent.map((job: any) => (

        <div
          key={job.id}
          className="flex items-center justify-between rounded-xl border p-4"
        >

          <div>

            <p className="font-semibold">
              {job.title}
            </p>

            <p className="text-sm text-slate-500">
              {job.organization}
            </p>

          </div>

          <Link
            href={`/admin/jobs/${job.id}`}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white"
          >
            Edit
          </Link>

        </div>

      ))}

    </div>

  </div>

  <div className="rounded-2xl bg-white p-6 shadow">

    <h2 className="mb-5 text-2xl font-bold">
      ⚡ Quick Actions
    </h2>

    <div className="space-y-4">

      <Link
        href="/admin/jobs/new"
        className="block rounded-xl bg-blue-600 p-4 text-center font-semibold text-white"
      >
        ➕ Add New Job
      </Link>

      <Link
        href="/admin/jobs"
        className="block rounded-xl bg-slate-800 p-4 text-center font-semibold text-white"
      >
        📋 Manage Jobs
      </Link>

      <Link
        href="/"
        className="block rounded-xl bg-green-600 p-4 text-center font-semibold text-white"
      >
        🌐 Visit Website
      </Link>

    </div>

  </div>

</div>
    </AdminLayout>
  );
}