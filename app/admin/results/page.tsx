import StatusToggle from "@/components/admin/results/StatusToggle";
import FeaturedButton from "@/components/admin/results/FeaturedButton";
import DeleteButton from "@/components/admin/results/DeleteButton";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import Link from "next/link";
import { getResults } from "@/services/results";

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;
  const results = await getResults(search);

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              📊 Manage Results
            </h1>
            <p className="mt-2 text-slate-600">
              Total Results: {results.length}
            </p>
          </div>

          <Link
            href="/admin/results/new"
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            + Add New Result
          </Link>
        </div>

        <form className="mb-6 flex gap-3">
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="🔍 Search Results..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white hover:bg-slate-900"
          >
            Search
          </button>
        </form>

        {results.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-lg">
            <div className="text-6xl">📊</div>
            <h2 className="mt-5 text-3xl font-bold">
              No Results Found
            </h2>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <table className="w-full">
              <thead className="bg-slate-200">
                <tr>
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Organization</th>
                  <th className="p-4 text-left">Result Date</th>
                  <th className="p-4 text-left">Featured</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {results.map((result: any) => (
                  <tr
                    key={result.id}
                    className="border-t hover:bg-slate-50"
                  >
                    <td className="p-4 font-semibold">
                      {result.title}
                    </td>
                    <td className="p-4">
                      {result.organization}
                    </td>
                    <td className="p-4">
                      {result.result_date}
                    </td>

                    <td className="p-4">
                      <FeaturedButton
                        id={result.id}
                        featured={result.featured}
                      />
                    </td>

                    <td className="p-4">
                      <StatusToggle
                        id={result.id}
                        status={result.status}
                      />
                    </td>

                    <td className="p-4">
                      <div className="flex gap-3">
                        <Link
                          href={`/admin/results/${result.id}/view`}
                          className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
                        >
                          View
                        </Link>

                        <Link
                          href={`/admin/results/${result.id}`}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                          Edit
                        </Link>

                        <DeleteButton id={result.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </AdminLayout>
  );
}