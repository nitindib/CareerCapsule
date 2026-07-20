import StatusToggle from "@/components/admin/syllabus/StatusToggle";
import FeaturedButton from "@/components/admin/syllabus/FeaturedButton";
import DeleteButton from "@/components/admin/syllabus/DeleteButton";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import Link from "next/link";
import { getSyllabus } from "@/services/syllabus";

export default async function SyllabusPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;

  const syllabus = await getSyllabus(search);

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              📚 Manage Syllabus
            </h1>

            <p className="mt-2 text-slate-600">
              Total Syllabus: {syllabus.length}
            </p>

          </div>

          <Link
            href="/admin/syllabus/new"
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            + Add New Syllabus
          </Link>

        </div>

        <form className="mb-6 flex gap-3">

          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="🔍 Search Syllabus..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white hover:bg-slate-900"
          >
            Search
          </button>

        </form>

        {syllabus.length === 0 ? (

          <div className="rounded-2xl bg-white p-10 text-center shadow-lg">

            <div className="text-6xl">
              📚
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              No Syllabus Found
            </h2>

            <p className="mt-3 text-slate-600">
              Click on "Add New Syllabus" to create your first syllabus.
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
                    Type
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

                {syllabus.map((item: any) => (

                  <tr
                    key={item.id}
                    className="border-t hover:bg-slate-50"
                  >

                    <td className="p-4 font-semibold">
                      {item.title}
                    </td>

                    <td className="p-4">
                      {item.organization}
                    </td>

                    <td className="p-4">
                      {item.exam_name}
                    </td>

                    <td className="p-4">
                      {item.syllabus_type}
                    </td>

                    <td className="p-4">

                      <FeaturedButton
                        id={item.id}
                        featured={item.featured}
                      />

                    </td>

                    <td className="p-4">

                      <StatusToggle
                        id={item.id}
                        status={item.status}
                      />

                    </td>

                    <td className="p-4">

                      <div className="flex gap-3">

                        <Link
                          href={`/admin/syllabus/${item.id}/view`}
                          className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
                        >
                          View
                        </Link>

                        <Link
                          href={`/admin/syllabus/${item.id}`}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                          Edit
                        </Link>

                        <DeleteButton id={item.id} />

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