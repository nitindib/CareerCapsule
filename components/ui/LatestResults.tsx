import Link from "next/link";
import { getResults } from "@/services/results";

export default async function LatestResults() {
  const results = await getResults();

  const latestResults = results
    .filter((item: any) => item.status === "published")
    .slice(0, 6);

  if (latestResults.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-4xl font-bold">
            📢 Latest Results
          </h2>

          <p className="mt-2 text-slate-600">
            Recently published exam results
          </p>

        </div>

        <Link
          href="/results"
          className="font-semibold text-blue-600 hover:underline"
        >
          View All →
        </Link>

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {latestResults.map((result: any) => (

          <div
            key={result.id}
            className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-xl transition"
          >

            <h3 className="text-2xl font-bold">
              {result.title}
            </h3>

            <p className="mt-2 text-slate-600">
              {result.organization}
            </p>

            <p className="mt-5 text-sm text-slate-500">
              📅 Result Date
            </p>

            <h4 className="font-bold">
              {result.result_date}
            </h4>

            <Link
              href={`/results/${result.id}`}
              className="mt-6 inline-block rounded-xl bg-blue-600 px-5 py-3 text-white"
            >
              View Result
            </Link>

          </div>

        ))}

      </div>

    </section>
  );
}