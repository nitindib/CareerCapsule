import Link from "next/link";

export default function SyllabusSearchCard({ syllabus }: any) {
  return (
    <div className="flex items-center justify-between rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition">

      <div>
        <h3 className="text-2xl font-bold">
          {syllabus.title}
        </h3>

        <p className="mt-2 text-slate-600">
          {syllabus.organization}
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm">
            📘 {syllabus.exam_name}
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm">
            {syllabus.category}
          </span>
        </div>
      </div>

      <Link
        href={`/syllabus/${syllabus.id}`}
        className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
      >
        View Details →
      </Link>

    </div>
  );
}