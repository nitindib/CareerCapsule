import Link from "next/link";
import { getFeaturedSyllabus } from "@/services/syllabus";

export default async function FeaturedSyllabus() {
  const syllabus = await getFeaturedSyllabus();

  if (syllabus.length === 0) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-10 text-center">

          <h2 className="text-4xl font-bold">
            📚 Featured Syllabus
          </h2>

          <p className="mt-3 text-slate-600">
            Latest and most important syllabus updates
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {syllabus.map((item: any) => (

            <div
              key={item.id}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
            >

              <div className="mb-3 flex items-center justify-between">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  {item.syllabus_type}
                </span>

                <span className="text-yellow-500">⭐</span>

              </div>

              <h3 className="mb-2 line-clamp-2 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mb-4 text-sm text-slate-600">
                {item.organization}
              </p>

              <p className="mb-6 line-clamp-3 text-sm text-slate-500">
                {item.description}
              </p>

              <div className="flex gap-3">

                <Link
                  href={item.download_link || "#"}
                  className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
                >
                  Download
                </Link>

                <Link
                  href={`/syllabus/${item.id}`}
                  className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-center font-semibold hover:bg-slate-50"
                >
                  View
                </Link>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-10 text-center">

          <Link
            href="/syllabus"
            className="inline-flex items-center rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white hover:bg-slate-800"
          >
            View All Syllabus →
          </Link>

        </div>

      </div>
    </section>
  );
}