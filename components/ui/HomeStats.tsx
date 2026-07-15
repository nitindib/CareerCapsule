import { getJobs } from "@/services/jobs";
import { getResults } from "@/services/results";

export default async function HomeStats() {
  const jobs = await getJobs();
  const results = await getResults();

  const publishedJobs = jobs.filter(
    (job: any) => job.status === "published"
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-6">

      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-3xl bg-white p-5 shadow text-center">

          <h2 className="text-3xl font-bold text-blue-600">
            {publishedJobs.length}
          </h2>

          <p className="mt-1 text-slate-600">
            Government Jobs
          </p>

        </div>

        <div className="rounded-3xl bg-white p-5 shadow text-center">

          <h2 className="text-3xl font-bold text-green-600">
            {results.length}
          </h2>

          <p className="mt-1 text-slate-600">
            Results
          </p>

        </div>

        <div className="rounded-3xl bg-white p-5 shadow text-center">

          <h2 className="text-3xl font-bold text-red-600">
            Coming Soon
          </h2>

          <p className="mt-1 text-slate-600">
            Admit Cards
          </p>

        </div>

        <div className="rounded-3xl bg-white p-5 shadow text-center">

          <h2 className="text-3xl font-bold text-purple-600">
            24×7
          </h2>

          <p className="mt-1 text-slate-600">
            Free Access
          </p>

        </div>

      </div>

    </section>
  );
}