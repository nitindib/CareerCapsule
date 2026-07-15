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
    <main className="min-h-screen bg-slate-100 p-10">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <h1 className="text-4xl font-bold">
            🏆 Manage Results
          </h1>

          <Link
            href="/admin/results/new"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            + Add Result
          </Link>

        </div>

        <form className="mb-8 flex gap-3">

          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search Results..."
            className="w-full rounded-xl border border-slate-300 px-5 py-3"
          />

          <button
            className="rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white"
          >
            Search
          </button>

        </form>

        <div className="overflow-hidden rounded-2xl bg-white shadow">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="p-4 text-left">
                  Title
                </th>

                <th className="p-4 text-left">
                  Organization
                </th>

                <th className="p-4 text-left">
                  Result Date
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {results.map((result: any) => (

                <tr
                  key={result.id}
                  className="border-t"
                >

                  <td className="p-4">
                    {result.title}
                  </td>

                  <td className="p-4">
                    {result.organization}
                  </td>

                  <td className="p-4">
                    {result.result_date}
                  </td>

                  <td className="p-4">
                    {result.status}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}