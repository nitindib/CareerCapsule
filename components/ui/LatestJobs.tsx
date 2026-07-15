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
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold text-slate-900">
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
          <div className="rounded-3xl bg-white p-10 text-center shadow">
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
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >
              {/* Header */}

              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-bold text-slate-900">
                      {job.title}
                    </h3>

                    {job.featured && (
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-lg text-slate-600">
                    {job.organization}
                  </p>
                </div>

                <StatusBadge status={job.status} />
              </div>

              {/* Job Details */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">
                    💼 Vacancy
                  </p>

                  <h4 className="mt-2 font-bold">
                    {job.vacancy || "N/A"}
                  </h4>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">
                    💰 Salary
                  </p>

                  <h4 className="mt-2 font-bold">
                    {job.salary || "N/A"}
                  </h4>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">
                    🎓 Qualification
                  </p>

                  <h4 className="mt-2 font-bold">
                    {job.qualification || "N/A"}
                  </h4>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">
                    📅 Last Date
                  </p>

                  <h4 className="mt-2 font-bold">
                    {job.application_last_date || "N/A"}
                  </h4>
                </div>
              </div>

              {/* Footer */}

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  {job.category || "Government Job"}
                </span>

                <div className="flex gap-3">
                  {job.apply_link && (
                    <Link
                      href={job.apply_link}
                      target="_blank"
                      className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:opacity-90"
                    >
                      🚀 Apply
                    </Link>
                  )}

                  <Link
                    href={`/jobs/${job.id}`}
                    className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}