import Link from "next/link";
import { getJobs } from "@/services/jobs";
import StatusBadge from "@/components/admin/jobs/StatusBadge";
export default async function LatestJobs() {
  const jobs = await getJobs();

  const latestJobs = jobs
  .filter((job: any) => job.status === "published")
  .sort(
    (a: any, b: any) =>
      new Date(b.created_at).getTime() -
      new Date(a.created_at).getTime()
  )
  .slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-4xl font-bold">
            🔥 Latest Government Jobs
          </h2>

          <p className="mt-2 text-slate-600">
            Latest published government jobs
          </p>

        </div>

        <Link
          href="/jobs"
          className="font-semibold text-blue-600 hover:underline"
        >
          View All →
        </Link>

      </div>

      <div className="grid gap-6">
        {latestJobs.length === 0 ? (

  <div className="rounded-2xl bg-white p-10 text-center shadow">

    <div className="text-6xl">📋</div>

    <h3 className="mt-5 text-3xl font-bold">
      No Jobs Available
    </h3>

    <p className="mt-3 text-slate-600">
      New government jobs will appear here soon.
    </p>

  </div>

) : (

  latestJobs.map((job: any) => (

    <div
      key={job.id}
      className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg"
    >

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-2xl font-bold">
            {job.title}
          </h3>

          <p className="mt-2 text-slate-600">
            {job.organization}
          </p>

        </div>

        {job.featured && (
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
            ⭐ Featured
          </span>
        )}

      </div>

      <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
          {job.qualification}
        </span>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
          {job.category || "Government"}
        </span>

        <span className="rounded-full bg-red-100 px-4 py-2 text-red-700">
          Last Date: {job.application_last_date}
        </span>

      </div>

      <div className="mt-6 flex items-center justify-between">

        <StatusBadge status={job.status} />

        <Link
          href={`/jobs/${job.id}`}
          className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
        >
          View Details
        </Link>

      </div>

    </div>

  ))

)}
      </div>

    </section>
  );
}
     