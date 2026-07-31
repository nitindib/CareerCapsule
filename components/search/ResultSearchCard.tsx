import Link from "next/link";
import { formatDate } from "@/lib/formatDate";

export default function ResultSearchCard({
  result,
}: {
  result: any;
}) {
  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-green-500 hover:shadow-xl md:flex-row md:items-center md:justify-between">

      <div className="flex-1">

        <h3 className="text-2xl font-bold text-slate-900">
          {result.title}
        </h3>

        <p className="mt-2 text-slate-600">
          {result.organization}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            📢 Result Date : {formatDate(result.result_date)}
          </span>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            📂 {result.category || "Government"}
          </span>

        </div>

      </div>

      <Link
  href={`/jobs/${result.job_id}`}
        className="rounded-2xl bg-green-600 px-6 py-3 text-center font-semibold text-white transition hover:scale-105"
      >
        View Result →
      </Link>

    </div>
  );
}