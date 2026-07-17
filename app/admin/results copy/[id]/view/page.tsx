import { getResultById } from "@/services/results";
import Link from "next/link";

export default async function ViewResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const result = await getResultById(id);

  if (!result) {
    return (
      <main className="min-h-screen bg-slate-100 p-10">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow">
          <h1 className="text-3xl font-bold text-red-600">
            Result Not Found
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-xl">

        <div className="mb-8 flex items-center justify-between">

          <h1 className="text-4xl font-bold">
            📄 View Result
          </h1>

          <Link
            href="/admin/results"
            className="rounded-xl bg-slate-800 px-5 py-3 text-white hover:bg-slate-900"
          >
            ← Back
          </Link>

        </div>

        <div className="grid gap-6">

          <Info title="Title" value={result.title} />

          <Info title="Organization" value={result.organization} />

          <Info title="Result Date" value={result.result_date} />

          <Info title="Result Link" value={result.result_link} />

          <Info
            title="Official Website"
            value={result.official_website}
          />

          <Info
            title="Notification PDF"
            value={result.notification_pdf}
          />

          <Info
            title="Status"
            value={result.status}
          />

          <Info
            title="Featured"
            value={result.featured ? "Yes" : "No"}
          />

          <div>
            <h3 className="mb-2 font-bold text-slate-700">
              Description
            </h3>

            <div className="rounded-xl border bg-slate-50 p-5">
              {result.description || "-"}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: any;
}) {
  return (
    <div>
      <h3 className="mb-2 font-bold text-slate-700">
        {title}
      </h3>

      <div className="rounded-xl border bg-slate-50 p-4">
        {value || "-"}
      </div>
    </div>
  );
}