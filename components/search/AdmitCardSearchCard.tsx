import Link from "next/link";

export default function AdmitCardSearchCard({
  card,
}: {
  card: any;
}) {
  return (
    <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-lg">

      <div>

        <h3 className="text-xl font-bold">
          {card.title}
        </h3>

        <p className="mt-2 text-slate-600">
          {card.organization}
        </p>

      </div>

      <Link
        href={`/admit-cards/${card.id}`}
        className="rounded-2xl bg-purple-600 px-6 py-3 font-semibold text-white"
      >
        Download
      </Link>

    </div>
  );
}