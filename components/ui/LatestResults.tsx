import Link from "next/link";
import { getResults } from "@/services/results";

export default async function LatestResults() {

  const results = await getResults();

  const latestResults = results
    .filter((item: any) => item.status === "published")
    .slice(0, 6);

  return (

    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-4xl font-bold">
          🏆 Latest Results
        </h2>

        <Link
          href="/results"
          className="font-semibold text-blue-600 hover:underline"
        >
          View All →
        </Link>

      </div>

      <div className="grid gap-6">

        {latestResults.map((result: any) => (

          <div
            key={result.id}
            className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg"
          >

            <h3 className="text-2xl font-bold">
              {result.title}
            </h3>

            <p className="mt-2 text-slate-600">
              {result.organization}
            </p>

            <p className="mt-4">
              📅 {result.result_date}
            </p>

            <Link
              href={`/results/${result.id}`}
              className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              View Result
            </Link>

          </div>

        ))}

      </div>

    </section>

  );
}