import Link from "next/link";

type Props = {
  job: any;
};

export default function JobSearchCard({ job }: Props) {
  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-blue-500 hover:shadow-xl md:flex-row md:items-center md:justify-between">

      <div className="flex-1">

        <h3 className="text-2xl font-bold text-slate-900">
          {job.title}
        </h3>

        <p className="mt-2 text-slate-600">
          {job.organization}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            💼 Vacancy: {job.vacancy || "N/A"}
          </span>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            🎓 {job.qualification || "N/A"}
          </span>

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
            📅 {job.application_last_date || "N/A"}
          </span>

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
            📂 {job.category || "Government"}
          </span>

        </div>

      </div>

      <Link
        href={`/jobs/${job.id}`}
        className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-center font-semibold text-white transition hover:scale-105"
      >
        View Details →
      </Link>

    </div>
  );
}