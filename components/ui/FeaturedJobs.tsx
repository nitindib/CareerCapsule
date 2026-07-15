import Link from "next/link";
import { getFeaturedJobs } from "@/services/jobs";

export default async function FeaturedJobs() {
  const jobs = await getFeaturedJobs();

  if (jobs.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">

      <div className="mb-10 flex items-center justify-between">

        <div>
          <h2 className="text-4xl font-bold text-slate-900">
            ⭐ Featured Opportunities
          </h2>

          <p className="mt-2 text-slate-500">
            Hand-picked government jobs you shouldn't miss.
          </p>
        </div>

        <Link
          href="/jobs"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          View All →
        </Link>

      </div>

      <div
        className={`grid gap-8 ${
          jobs.length === 1
            ? "grid-cols-1"
            : "md:grid-cols-2 xl:grid-cols-3"
        }`}
      >

        {jobs.map((job: any) => (

          <div
            key={job.id}
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
          >

            <div className="flex items-center justify-between">

              <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                ⭐ Featured
              </span>

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  job.status === "published"
                    ? "bg-green-100 text-green-700"
                    : job.status === "closed"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {job.status}
              </span>

            </div>

            <h3 className="mt-6 text-3xl font-bold text-slate-900">
              {job.title}
            </h3>

            <p className="mt-2 text-lg text-slate-600">
              {job.organization}
            </p>

            {/* Job Info */}

            <div className="mt-8 grid grid-cols-2 gap-4">

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
                  📅 Last Date
                </p>

                <h4 className="mt-2 font-bold">
                  {job.application_last_date || "N/A"}
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

            </div>

            {/* Category */}

            <div className="mt-6">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                {job.category || "Government Job"}
              </span>

            </div>

            {/* Buttons */}

            <div className="mt-8 flex gap-3">

              {job.apply_link && (
                <Link
                  href={job.apply_link}
                  target="_blank"
                  className="flex-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-center font-semibold text-white transition hover:opacity-90"
                >
                  🚀 Apply
                </Link>
              )}

              <Link
                href={`/jobs/${job.id}`}
                className="flex-1 rounded-2xl border border-slate-300 py-3 text-center font-semibold transition hover:bg-slate-100"
              >
                Details
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}