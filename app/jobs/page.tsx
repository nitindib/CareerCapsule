import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function JobsPage() {
  const { data: jobs, error } = await supabase
    .from("jobs_v2")
    .select("id, title, post_name, total_posts, status")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching jobs:", error);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Latest Government Jobs
        </h1>
        <p className="mt-2 text-slate-600">
          Find the latest government job notifications, admit cards, results, and more.
        </p>
      </div>

      {jobs && jobs.length > 0 ? (
        <div className="space-y-4">
          {jobs.map((job: any) => (
            <div
              key={job.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900">
                    {job.title}
                  </h2>
                  <p className="mt-1 text-slate-600">
                    {job.post_name}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
                    <span>📋 Posts: {job.total_posts || "-"}</span>
                    <span>📅 Last Date: Check Notification</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    {job.status}
                  </span>

                  <Link
                    href={`/jobs/${job.id}`}
                    className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
          <div className="text-5xl">📋</div>
          <h2 className="mt-4 text-2xl font-bold">
            No Jobs Available
          </h2>
          <p className="mt-2 text-slate-600">
            Published jobs will appear here once they are added from the admin panel.
          </p>
        </div>
      )}
    </div>
  );
}