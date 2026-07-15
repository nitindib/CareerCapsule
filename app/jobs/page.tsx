import { getJobs } from "@/services/jobs";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    search?: string;
    category?: string;
  }>;
};

export default async function JobsPage({
  searchParams,
}: Props) {

  const { search, category } =
  await searchParams;
  const jobs = await getJobs(
  search,
  category
);
  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-6">

        <h1 className="mb-8 text-5xl font-bold">
          💼 Latest Government Jobs
        </h1>
        <form className="mb-10 flex gap-3">

  <input
    type="text"
    name="search"
    defaultValue={search}
    placeholder="🔍 Search jobs..."
    className="w-full rounded-xl border border-slate-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <button
    type="submit"
    className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
  >
    Search
  </button>

</form>
<div className="mb-10 flex flex-wrap gap-3">

  {[
    "All",
    "Central Govt",
    "State Govt",
    "Railway",
    "Bank",
    "Teaching",
    "Defence",
  ].map((item) => (

    <a
      key={item}
      href={`/jobs?category=${encodeURIComponent(item)}`}
      className={`rounded-full px-5 py-2 transition ${
        category === item ||
        (!category && item === "All")
          ? "bg-blue-600 text-white"
          : "bg-white shadow hover:bg-slate-100"
      }`}
    >
      {item}
    </a>

  ))}

</div>
        <div className="grid gap-6">

          {jobs.map((job: any) => (

            <div
              key={job.id}
              className="rounded-2xl bg-white p-6 shadow transition hover:shadow-xl"
            >

              <div className="flex items-start justify-between">

                <div>

                  <h2 className="text-2xl font-bold">
                    {job.title}
                  </h2>

                  <p className="mt-2 text-slate-600">
                    {job.organization}
                  </p>

                </div>

                {job.featured && (

                  <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                    ⭐ Featured
                  </span>

                )}

              </div>

              <div className="mt-6 grid gap-3 text-slate-700 md:grid-cols-2">

  <p>
    🎓 <b>Qualification:</b> {job.qualification || "-"}
  </p>

  <p>
    💼 <b>Vacancy:</b> {job.vacancy || "-"}
  </p>

  <p>
    💰 <b>Salary:</b> {job.salary || "-"}
  </p>

  <p>
    📅 <b>Last Date:</b> {job.application_last_date || "-"}
  </p>

</div>
              <div className="mt-8 flex flex-wrap gap-4">

  <Link
    href={`/jobs/${job.id}`}
    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
  >
    📄 View Details
  </Link>

  {job.apply_link && (
    <a
      href={job.apply_link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
    >
      🚀 Apply Now
    </a>
  )}

</div>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}
