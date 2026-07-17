import { formatDate } from "@/lib/formatDate";
import StatusToggle from "@/components/admin/admit-cards/StatusToggle";
import FeaturedButton from "@/components/admin/admit-cards/FeaturedButton";
import DeleteButton from "@/components/admin/admit-cards/DeleteButton";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import Link from "next/link";
import { getAdmitCards } from "@/services/admitCards";

export default async function AdmitCardsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;

  const admitCards = await getAdmitCards(search);

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              🎫 Manage Admit Cards
            </h1>

            <p className="mt-2 text-slate-600">
              Total Admit Cards: {admitCards.length}
            </p>

          </div>

          <Link
            href="/admin/admit-cards/new"
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            + Add New Admit Card
          </Link>

        </div>

        <form className="mb-6 flex gap-3">

          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="🔍 Search Admit Cards..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white hover:bg-slate-900"
          >
            Search
          </button>

        </form>

        {admitCards.length === 0 ? (

          <div className="rounded-2xl bg-white p-10 text-center shadow-lg">

            <div className="text-6xl">
              🎫
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              No Admit Cards Found
            </h2>

            <p className="mt-3 text-slate-600">
              Click on "Add New Admit Card" to create your first Admit Card.
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
                    Exam
                  </th>

                  <th className="p-4 text-left">
                    Release Date
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

                {admitCards.map((card: any) => (

                  <tr
                    key={card.id}
                    className="border-t hover:bg-slate-50"
                  >

                    <td className="p-4 font-semibold">
                      {card.title}
                    </td>

                    <td className="p-4">
                      {card.organization}
                    </td>

                    <td className="p-4">
                      {card.exam_name}
                    </td>

                    <td className="p-4">
                      {formatDate(card.admit_card_date)}
                    </td>

                    <td className="p-4">

                      <FeaturedButton
                        id={card.id}
                        featured={card.featured}
                      />

                    </td>

                    <td className="p-4">

                      <StatusToggle
                        id={card.id}
                        status={card.status}
                      />

                    </td>

                    <td className="p-4">

                      <div className="flex gap-3">

                        <Link
                          href={`/admin/admit-cards/${card.id}/view`}
                          className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
                        >
                          View
                        </Link>

                        <Link
                          href={`/admin/admit-cards/${card.id}`}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                          Edit
                        </Link>

                        <DeleteButton id={card.id} />

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