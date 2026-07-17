import AdminLayout from "@/components/admin/layout/AdminLayout";
import Link from "next/link";
import { getAnswerKeys } from "@/services/answerKeys";
import { formatDate } from "@/lib/formatDate";

export default async function AnswerKeysPage() {

  const answerKeys = await getAnswerKeys();

  return (

    <AdminLayout>

      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-4xl font-bold">
          📄 Answer Keys
        </h1>

        <Link
          href="/admin/answer-keys/new"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          + Add Answer Key
        </Link>

      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">Title</th>

              <th className="p-4 text-left">Organization</th>

              <th className="p-4 text-left">Release Date</th>

              <th className="p-4 text-left">Status</th>

              <th className="p-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {answerKeys.map((item: any) => (

              <tr
                key={item.id}
                className="border-t"
              >

                <td className="p-4 font-semibold">
                  {item.title}
                </td>

                <td className="p-4">
                  {item.organization}
                </td>

                <td className="p-4">
                  
                  {formatDate(item.release_date)}
                </td>

                <td className="p-4">

                  <span
                    className={`rounded-full px-3 py-1 text-sm text-white ${
                      item.status === "published"
                        ? "bg-green-600"
                        : "bg-yellow-500"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/admin/answer-keys/${item.id}`}
                      className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                    >
                      Edit
                    </Link>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>

  );

}