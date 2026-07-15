import Link from "next/link";

type Props = {
  job: any;
};

export default function JobDetailsCard({
  job,
}: Props) {

  return (

    <div className="rounded-3xl bg-white p-10 shadow-xl">

      <div className="flex flex-wrap items-start justify-between gap-6">

        <div>

          <h1 className="text-4xl font-bold">
            {job.title}
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            {job.organization}
          </p>

        </div>

        {job.featured && (

          <span className="rounded-full bg-yellow-100 px-4 py-2 font-semibold text-yellow-700">
            ⭐ Featured
          </span>

        )}

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-slate-50 p-6">

  <p className="text-sm text-slate-500">
    🎓 Qualification
  </p>

  <h2 className="mt-2 text-xl font-bold">
    {job.qualification || "Not Available"}
  </h2>

</div>

<div className="rounded-2xl border bg-slate-50 p-6">

  <p className="text-sm text-slate-500">
    📅 Last Date
  </p>

  <h2 className="mt-2 text-xl font-bold">
    {job.application_last_date || "Not Available"}
  </h2>

</div>

<div className="rounded-2xl border bg-slate-50 p-6">

  <p className="text-sm text-slate-500">
    📂 Category
  </p>

  <h2 className="mt-2 text-xl font-bold">
    {job.category || "Government Job"}
  </h2>

</div>

<div className="rounded-2xl border bg-slate-50 p-6">

  <p className="text-sm text-slate-500">
    📢 Status
  </p>

  <h2
    className={`mt-2 inline-block rounded-full px-4 py-2 text-white font-semibold ${
      job.status === "published"
        ? "bg-green-600"
        : job.status === "closed"
        ? "bg-red-600"
        : "bg-yellow-500"
    }`}
  >
    {job.status}
  </h2>

</div>

<div className="rounded-2xl border bg-slate-50 p-6">

  <p className="text-sm text-slate-500">
    💼 Vacancy
  </p>

  <h2 className="mt-2 text-xl font-bold">
    {job.vacancy || "Not Available"}
  </h2>

</div>

<div className="rounded-2xl border bg-slate-50 p-6">

  <p className="text-sm text-slate-500">
    💰 Salary
  </p>

  <h2 className="mt-2 text-xl font-bold">
    {job.salary || "Not Available"}
  </h2>

</div>

<div className="rounded-2xl border bg-slate-50 p-6">

  <p className="text-sm text-slate-500">
    🎂 Age Limit
  </p>

  <h2 className="mt-2 text-xl font-bold">
    {job.age_limit || "Not Available"}
  </h2>

</div>

<div className="rounded-2xl border bg-slate-50 p-6">

  <p className="text-sm text-slate-500">
    💵 Application Fee
  </p>

  <h2 className="mt-2 text-xl font-bold">
    {job.application_fee || "Not Available"}
  </h2>

</div>

</div>

<div className="mt-10 rounded-2xl border bg-slate-50 p-8">

  <h2 className="text-2xl font-bold">
    📝 Job Description
  </h2>

  <p className="mt-4 whitespace-pre-wrap text-slate-700">
    {job.description || "No description available."}
  </p>

</div>
{job.selection_process && (

<div className="mt-10 rounded-2xl border bg-slate-50 p-8">

  <h2 className="text-2xl font-bold">
    📚 Selection Process
  </h2>

  <p className="mt-4 whitespace-pre-wrap text-slate-700">
    {job.selection_process}
  </p>

</div>

)}
{job.important_dates && (

<div className="mt-10 rounded-2xl border bg-slate-50 p-8">

  <h2 className="text-2xl font-bold">
    📅 Important Dates
  </h2>

  <p className="mt-4 whitespace-pre-wrap text-slate-700">
    {job.important_dates}
  </p>

</div>

)}

<div className="mt-10 flex flex-wrap gap-4">
    {job.apply_link && (
  <Link
    href={job.apply_link}
    target="_blank"
    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
  >
    🚀 Apply Now
  </Link>
)}

{job.official_website && (
  <Link
    href={job.official_website}
    target="_blank"
    className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
  >
    🌐 Official Website
  </Link>
)}

{job.notification_pdf && (
  <Link
    href={job.notification_pdf}
    target="_blank"
    className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
  >
    📄 Download Notification
  </Link>
)}

<Link
  href="/jobs"
  className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
>
  ← Back to Jobs
</Link>

</div>

</div>

  );
}
