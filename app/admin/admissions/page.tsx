import StatusToggle from "@/components/admin/admissions/StatusToggle";
import FeaturedButton from "@/components/admin/admissions/FeaturedButton";
import DeleteButton from "@/components/admin/admissions/DeleteButton";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import Link from "next/link";
import { getAdmissions } from "@/services/admissions";

export default async function AdmissionsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;

  const admissions = await getAdmissions(search);

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              🎓 Manage Admissions
            </h1>

            <p className="mt-2 text-slate-600">
              Total Admissions: {admissions.length}
            </p>

          </div>

          <Link
            href="/admin/admissions/new"
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            + Add New Admission
          </Link>

        </div>

        <form className="mb-6 flex gap-3">

          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="🔍 Search Admissions..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white hover:bg-slate-900"
          >
            Search
          </button>

        </form>

        {admissions.length === 0 ? (

          <div className="rounded-2xl bg-white p-10 text-center shadow-lg">

            <div className="text-6xl">
              🎓
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              No Admissions Found
            </h2>

            <p className="mt-3 text-slate-600">
              Click on "Add New Admission" to create your first admission entry.
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
                    Course
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

                {admissions.map((admission: any) => (

                  <tr
                    key={admission.id}
                    className="border-t hover:bg-slate-50"
                  >

                    <td className="p-4 font-semibold">
                      {admission.title}
                    </td>

                    <td className="p-4">
                      {admission.organization}
                    </td>

                    <td className="p-4">
                      {admission.course_name}
                    </td>

                    <td className="p-4">
                      {admission.admission_year}
                    </td>

                    <td className="p-4">

                      <FeaturedButton
                        id={admission.id}
                        featured={admission.featured}
                      />

                    </td>

                    <td className="p-4">

                      <StatusToggle
                        id={admission.id}
                        status={admission.status}
                      />

                    </td>

                    <td className="p-4">

                      <div className="flex gap-3">

                        <Link
                          href={`/admin/admissions/${admission.id}/view`}
                          className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
                        >
                          View
                        </Link>

                        <Link
                          href={`/admin/admissions/${admission.id}`}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                          Edit
                        </Link>

                        <DeleteButton id={admission.id} />

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