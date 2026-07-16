import Link from "next/link";

export default function ResultSearchCard({
  result,
}: {
  result: any;
}) {
  return (
    <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-lg">

      <div>

        <h3 className="text-xl font-bold">
          {result.title}
        </h3>

        <p className="mt-2 text-slate-600">
          {result.organization}
        </p>

      </div>

      <Link
        href={`/results/${result.id}`}
        className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white"
      >
        View Result
      </Link>

    </div>
  );
}