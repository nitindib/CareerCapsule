import Link from "next/link";
import { formatDate } from "@/lib/formatDate";

export default function AnswerKeySearchCard({
  answerKey,
}: {
  answerKey: any;
}) {
  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-indigo-500 hover:shadow-xl md:flex-row md:items-center md:justify-between">

      <div className="flex-1">

        <h3 className="text-2xl font-bold text-slate-900">
          {answerKey.title}
        </h3>

        <p className="mt-2 text-slate-600">
          {answerKey.organization}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            📝 Answer Key Date : {formatDate(answerKey.answer_key_date)}
          </span>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            📂 {answerKey.category || "Government"}
          </span>

        </div>

      </div>

      <Link
        href={`/answer-keys/${answerKey.id}`}
        className="rounded-2xl bg-indigo-600 px-6 py-3 text-center font-semibold text-white transition hover:scale-105"
      >
        View Details →
      </Link>

    </div>
  );
}