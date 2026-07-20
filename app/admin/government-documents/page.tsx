import Link from "next/link";

import AdminLayout from "@/components/admin/layout/AdminLayout";

import DeleteButton from "@/components/admin/government-documents/DeleteButton";
import FeaturedButton from "@/components/admin/government-documents/FeaturedButton";
import StatusToggle from "@/components/admin/government-documents/StatusToggle";

import {
  getGovernmentDocuments,
} from "@/services/governmentDocuments";

type Props = {
  searchParams: Promise<{
    search?: string;
  }>;
};

export default async function GovernmentDocumentsPage({
  searchParams,
}: Props) {

  const { search } = await searchParams;

  const documents =
    await getGovernmentDocuments(search);

  return (

    <AdminLayout>

      <div className="space-y-8">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">

              📄 Government Documents

            </h1>

            <p className="mt-2 text-slate-500">

              Manage Government Documents

            </p>

          </div>

          <Link
            href="/admin/government-documents/new"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            + Add Document
          </Link>

        </div>

        <form>

          <input
            name="search"
            defaultValue={search}
            placeholder="Search Government Document..."
            className="w-full rounded-xl border p-4"
          />

        </form>

        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="p-4 text-left">
                  Title
                </th>

                <th className="p-4 text-left">
                  Category
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-left">
                  Featured
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

                          {documents.map((item: any) => (

                <tr
                  key={item.id}
                  className="border-t"
                >

                  <td className="p-4">

                    <div className="font-semibold">

                      {item.title}

                    </div>

                    <div className="text-sm text-slate-500">

                      {item.required_for}

                    </div>

                  </td>

                  <td className="p-4">

                    {item.category}

                  </td>

                  <td className="p-4">

                    <StatusToggle
                      id={item.id}
                      status={item.status}
                    />

                  </td>

                  <td className="p-4">

                    <FeaturedButton
                      id={item.id}
                      featured={item.featured}
                    />

                  </td>

                  <td className="p-4">

                    <div className="flex gap-2">

                      <Link
                        href={`/admin/government-documents/${item.id}/view`}
                        className="rounded-lg bg-green-600 px-3 py-2 text-sm text-white"
                      >
                        View
                      </Link>

                      <Link
                        href={`/admin/government-documents/${item.id}`}
                        className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white"
                      >
                        Edit
                      </Link>

                      <DeleteButton
                        id={item.id}
                      />

                    </div>

                  </td>

                </tr>

              ))}
                          </tbody>

          </table>

          {documents.length === 0 && (

            <div className="p-10 text-center text-slate-500">

              No Government Documents Found

            </div>

          )}

        </div>

      </div>

    </AdminLayout>

  );

}