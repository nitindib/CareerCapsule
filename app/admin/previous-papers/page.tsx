import StatusToggle from "@/components/admin/previous-papers/StatusToggle";
import FeaturedButton from "@/components/admin/previous-papers/FeaturedButton";
import DeleteButton from "@/components/admin/previous-papers/DeleteButton";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import Link from "next/link";
import { getPreviousPapers } from "@/services/previousPapers";

export default async function PreviousPapersPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;

  const papers = await getPreviousPapers(search);

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              📄 Manage Previous Papers
            </h1>

            <p className="mt-2 text-slate-600">
              Total Papers: {papers.length}
            </p>

          </div>

          <Link
            href="/admin/previous-papers/new"
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            + Add New Paper
          </Link>

        </div>

        <form className="mb-6 flex gap-3">

          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="🔍 Search Previous Papers..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white hover:bg-slate-900"
          >
            Search
          </button>

        </form>

        {papers.length === 0 ? (

          <div className="rounded-2xl bg-white p-10 text-center shadow-lg">

            <div className="text-6xl">
              📄
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              No Previous Papers Found
            </h2>

            <p className="mt-3 text-slate-600">
              Click on "Add New Paper" to create your first previous paper.
            </p>

          </div>

        ) : (

          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

            <table className="w-full">

              <thead className="bg-slate-200">

                <tr>

                  <th className="p-4 text-left">
                    Title
                  </th>

                  <th className="p-4 text-left">
                    Organization
                  </th>

                  <th className="p-4 text-left">
                    Exam Name
                  </th>

                  <th className="p-4 text-left">
                    Year
                  </th>

                  <th className="p-4 text-left">
                    Featured
                  </th>

                  <th className="p-4 text-left">
                    Status
                  </th>

                  <th className="p-4 text-left">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {papers.map((paper: any) => (

                  <tr
                    key={paper.id}
                    className="border-t hover:bg-slate-50"
                  >

                    <td className="p-4 font-semibold">
                      {paper.title}
                    </td>

                    <td className="p-4">
                      {paper.organization}
                    </td>

                    <td className="p-4">
                      {paper.exam_name}
                    </td>

                    <td className="p-4">
                      {paper.paper_year}
                    </td>

                    <td className="p-4">

                      <FeaturedButton
                        id={paper.id}
                        featured={paper.featured}
                      />

                    </td>

                    <td className="p-4">

                      <StatusToggle
                        id={paper.id}
                        status={paper.status}
                      />

                    </td>

                    <td className="p-4">

                      <div className="flex gap-3">

                        <Link
                          href={`/admin/previous-papers/${paper.id}/view`}
                          className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
                        >
                          View
                        </Link>

                        <Link
                          href={`/admin/previous-papers/${paper.id}`}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                          Edit
                        </Link>

                        <DeleteButton id={paper.id} />

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