import Link from "next/link";
import { formatDate } from "@/lib/formatDate";

export default function AdmitCardSearchCard({
  card,
}: {
  card: any;
}) {
  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-purple-500 hover:shadow-xl md:flex-row md:items-center md:justify-between">

      <div className="flex-1">

        <h3 className="text-2xl font-bold text-slate-900">
          {card.title}
        </h3>

        <p className="mt-2 text-slate-600">
          {card.organization}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
            🎫 Admit Card : {formatDate(card.admit_card_date)}
          </span>

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
            📝 Exam Date : {formatDate(card.exam_date)}
          </span>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            📂 {card.category || "Government"}
          </span>

        </div>

      </div>

      <Link
        href={`/admit-cards/${card.id}`}
        className="rounded-2xl bg-purple-600 px-6 py-3 text-center font-semibold text-white transition hover:scale-105"
      >
        Download Admit Card →
      </Link>

    </div>
  );
}