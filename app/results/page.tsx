import Link from "next/link";
import { getResults } from "@/services/results";

type Props = {
  searchParams: Promise<{
    search?: string;
  }>;
};

export default async function ResultsPage({
  searchParams,
}: Props) {
  const { search } = await searchParams;

  const results = await getResults(search);

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            🏆 Latest Results
          </h1>
        </div>

        <form className="mb-8">
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search Results..."
            className="w-full rounded-xl border border-slate-300 px-5 py-3"
          />
        </form>

        <div className="grid gap-6">

          {results.map((result: any) => (

            <div
              key={result.id}
              className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition"
            >

              <h2 className="text-2xl font-bold">
                {result.title}
              </h2>

              <p className="mt-2 text-slate-600">
                {result.organization}
              </p>

              <p className="mt-4">
                📅 Result Date: {result.result_date || "-"}
              </p>

              <Link
                href={`/results/${result.id}`}
                className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                View Result →
              </Link>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}