import Link from "next/link";

type Props = {
  result: any;
};

export default function ResultDetailsCard({ result }: Props) {
  return (
    <div className="rounded-3xl bg-white p-10 shadow-xl">

      <div className="flex items-start justify-between gap-6 flex-wrap">

        <div>
          <h1 className="text-4xl font-bold">
            {result.title}
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            {result.organization}
          </p>
        </div>

        {result.featured && (
          <span className="rounded-full bg-yellow-100 px-4 py-2 font-semibold text-yellow-700">
            ⭐ Featured
          </span>
        )}

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border bg-slate-50 p-6">
          <p className="text-sm text-slate-500">
            📅 Result Date
          </p>

          <h2 className="mt-2 text-xl font-bold">
            {result.result_date || "Not Available"}
          </h2>
        </div>

        <div className="rounded-2xl border bg-slate-50 p-6">
          <p className="text-sm text-slate-500">
            📢 Status
          </p>

          <h2
            className={`mt-2 inline-block rounded-full px-4 py-2 text-white font-semibold ${
              result.status === "published"
                ? "bg-green-600"
                : result.status === "closed"
                ? "bg-red-600"
                : "bg-yellow-500"
            }`}
          >
            {result.status}
          </h2>
        </div>

      </div>

      <div className="mt-10 rounded-2xl border bg-slate-50 p-8">

        <h2 className="text-2xl font-bold">
          📝 Description
        </h2>

        <p className="mt-4 whitespace-pre-wrap text-slate-700">
          {result.description || "No Description"}
        </p>

      </div>

      <div className="mt-10 flex flex-wrap gap-4">

        {result.result_pdf && (
          <Link
            href={result.result_pdf}
            target="_blank"
            className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
          >
            📄 Download Result
          </Link>
        )}

        {result.official_website && (
          <Link
            href={result.official_website}
            target="_blank"
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            🌐 Official Website
          </Link>
        )}

        <Link
          href="/results"
          className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100"
        >
          ← Back to Results
        </Link>

      </div>

    </div>
  );
}