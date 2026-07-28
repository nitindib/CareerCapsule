import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { formatDate } from "@/lib/formatDate";
import Link from "next/link";


export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // ===========================
  // Fetch Current Job
  // ===========================

  const { data: job, error } = await supabase
    .from("jobs_v2")
    .select("*")
    .eq("id", id)
    .single();
    

  if (error || !job) {
    notFound();
  }

  // ===========================
  // Auto FAQ
  // ===========================

  const autoFaq = [
    {
      question: "What is the minimum age limit?",
      answer: job.age_limit?.min_age
        ? `${job.age_limit.min_age} Years`
        : "As per official notification",
    },

    {
      question: "What is the maximum age limit?",
      answer: job.age_limit?.max_age
        ? `${job.age_limit.max_age} Years`
        : "As per official notification",
    },

    {
      question: "What is the educational qualification?",
      answer:
        job.qualification?.[0]?.details ??
        "Refer Official Notification",
    },

    {
      question: "How many vacancies are available?",
      answer: job.total_posts
        ? `${job.total_posts} Posts`
        : "Not Mentioned",
    },

    {
      question: "What is the salary?",
      answer:
        job.salary ||
        "As per official notification",
    },

    {
      question: "What is the job location?",
      answer:
        job.job_location ||
        "Not Mentioned",
    },

    {
      question: "How can I apply online?",
      answer:
        "Click on the Apply Online button available above.",
    },
  ];

  // ===========================
  // Related Jobs
  // ===========================

  const { data: relatedJobs } = await supabase
  .from("jobs_v2")
  .select(`
    id,
    title,
    post_name,
    total_posts,
    salary,
    job_location,
    featured,
    application_last_date
  `)
  .neq("id", id)
  .limit(6);

return (
  <div className="mx-auto max-w-7xl px-6 py-10 pb-32">

    <div></div>

      {/* LEFT */}

      <div>

        <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-bold text-green-700">
          🟢 {job.status?.toUpperCase() || "PUBLISHED"}
        </span>

        <h1 className="mt-5 text-5xl font-extrabold leading-tight text-slate-900">
          {job.title}
        </h1>

        <p className="mt-4 text-2xl font-semibold text-blue-600">
          {job.post_name}
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {job.short_description}
        </p>
        

      </div>

      
    {/* ===== CONTENT START ===== */}

    {/* ================= BASIC INFORMATION ================= */}

<div className="mt-12">

<h2 className="mb-6 text-3xl font-bold">

📋 Basic Information

</h2>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

<div className="rounded-2xl border bg-white p-6 shadow-sm">

<div className="text-sm text-slate-500">
👥 Total Posts
</div>

<div className="mt-2 text-2xl font-bold">
{job.total_posts || "-"}
</div>

</div>

<div className="rounded-2xl border bg-white p-6 shadow-sm">

<div className="text-sm text-slate-500">
💰 Salary
</div>

<div className="mt-2 text-2xl font-bold">
{job.salary || "-"}
</div>

</div>

<div className="rounded-2xl border bg-white p-6 shadow-sm">

<div className="text-sm text-slate-500">
📍 Job Location
</div>

<div className="mt-2 text-2xl font-bold">
{job.job_location || "-"}
</div>

</div>

<div className="rounded-2xl border bg-white p-6 shadow-sm">

<div className="text-sm text-slate-500">
📅 Published
</div>

<div className="mt-2 text-xl font-bold">
{formatDate(job.created_at)}
</div>

</div>

</div>

</div>

    {/* ================= IMPORTANT DATES ================= */}

<div className="mt-12">

  <h2 className="mb-8 text-3xl font-bold">
    📅 Important Dates
  </h2>

  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

    {[
      {
        title: "Application Start",
        date: job.application_start_date,
        icon: "🟢",
      },
      {
        title: "Application Last Date",
        date: job.application_last_date,
        icon: "🔴",
      },
      {
        title: "Fee Payment Last Date",
        date: job.fee_payment_last_date,
        icon: "💳",
      },
      {
        title: "Correction Last Date",
        date: job.correction_last_date,
        icon: "✏️",
      },
      {
        title: "Exam Date",
        date: job.exam_date,
        icon: "📝",
      },
      {
        title: "Admit Card",
        date: job.admit_card_date,
        icon: "🎫",
      },
      {
        title: "Result Date",
        date: job.result_date,
        icon: "🏆",
      },
    ].map(
      (item, index) =>
        item.date && (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-3xl">
              {item.icon}
            </div>

            <div className="mt-3 text-sm text-slate-500">
              {item.title}
            </div>

            <div className="mt-2 text-xl font-bold text-slate-900">
              {formatDate(item.date)}
            </div>
          </div>
        )
    )}

  </div>

</div>

<div className="mt-12 grid gap-6 lg:grid-cols-2">

  {/* Vacancy Details */}

  {job.vacancy_details && job.vacancy_details.length > 0 && (

    <div>

      <h2 className="mb-4 text-2xl font-bold">
        📊 Vacancy Details
      </h2>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-4 py-3 text-left">
                Category
              </th>

              <th className="px-4 py-3 text-right">
                Posts
              </th>

            </tr>

          </thead>

          <tbody>

            {job.vacancy_details.map((item:any,index:number)=>(

              <tr key={index} className="border-t">

                <td className="px-4 py-3">
                  {item.category}
                </td>

                <td className="px-4 py-3 text-right font-semibold">
                  {item.posts}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )}

  {/* Application Fee */}

  {job.application_fee && job.application_fee.length > 0 && (

    <div>

      <h2 className="mb-4 text-2xl font-bold">
        💰 Application Fee
      </h2>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-4 py-3 text-left">
                Category
              </th>

              <th className="px-4 py-3 text-right">
                Fee
              </th>

            </tr>

          </thead>

          <tbody>

            {job.application_fee.map((item:any,index:number)=>(

              <tr key={index} className="border-t">

                <td className="px-4 py-3">
                  {item.category}
                </td>

                <td className="px-4 py-3 text-right font-semibold">
                  {item.fee}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )}

</div>

 {/* ================= AGE LIMIT + QUALIFICATION ================= */}

<div className="mt-14 grid gap-8 lg:grid-cols-2">

  {/* ================= AGE LIMIT ================= */}

  {job.age_limit && (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm h-full">

      <h2 className="mb-8 text-3xl font-bold">
        🎂 Age Limit
      </h2>

      <div className="grid grid-cols-2 gap-5">

        <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <div className="text-sm text-green-700">
            Minimum Age
          </div>

          <div className="mt-3 text-3xl font-bold text-green-800">
            {job.age_limit.min_age || "-"} Years
          </div>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <div className="text-sm text-red-700">
            Maximum Age
          </div>

          <div className="mt-3 text-3xl font-bold text-red-800">
            {job.age_limit.max_age || "-"} Years
          </div>
        </div>

        <div className="col-span-2 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <div className="text-sm text-blue-700">
            Age Relaxation
          </div>

          <div className="mt-3 text-base leading-7 font-semibold text-blue-900">
            {job.age_limit.relaxation || "As per Government Rules"}
          </div>
        </div>

      </div>

    </div>
  )}

  {/* ================= QUALIFICATION ================= */}

  {job.qualification && job.qualification.length > 0 && (

    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm h-full">

      <h2 className="mb-8 text-3xl font-bold">
        🎓 Educational Qualification
      </h2>

      <div className="space-y-5">

        {job.qualification.map((item: any, index: number) => (

          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >

            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                🎓
              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.type}
                </h3>

                <p className="mt-2 leading-7 text-slate-700">
                  {item.details}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  )}

</div>

    {/* ================= SELECTION PROCESS ================= */}

{job.selection_process && job.selection_process.length > 0 && (

<div className="mt-14">

  <h2 className="mb-8 text-3xl font-bold">
    📝 Selection Process
  </h2>

  <div className="space-y-6">

    {job.selection_process.map((item:any,index:number)=>(

      <div
        key={index}
        className="flex items-start gap-5"
      >

        {/* Timeline */}

        <div className="flex flex-col items-center">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">

            {index+1}

          </div>

          {index !== job.selection_process.length-1 && (

            <div className="mt-2 h-16 w-1 rounded bg-blue-200"></div>

          )}

        </div>

        {/* Content */}

        <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <h3 className="text-xl font-bold">

            {item.title}

          </h3>

          <p className="mt-3 leading-7 text-slate-700">

            {item.details}

          </p>

        </div>

      </div>

    ))}

  </div>

</div>

)}
    {/* 📝 Exam Pattern */}
{job.exam_pattern && job.exam_pattern.length > 0 && (
  <div className="mt-12">
    <h2 className="text-2xl font-bold">
      📝 Exam Pattern
    </h2>

    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>

            <th className="p-4 text-left">
              Subject
            </th>

            <th className="p-4 text-center">
              Questions
            </th>

            <th className="p-4 text-center">
              Marks
            </th>

          </tr>

        </thead>

        <tbody>

          {job.exam_pattern.map(
            (item: any, index: number) => (

              <tr
                key={index}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-4 font-semibold">
                  {item.subject}
                </td>

                <td className="p-4 text-center">
                  {item.questions}
                </td>

                <td className="p-4 text-center font-bold text-blue-600">
                  {item.marks}
                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>
  </div>
)}
    
{/* ================= SYLLABUS ================= */}

{job.syllabus && job.syllabus.length > 0 && (

<div className="mt-14">

  <h2 className="mb-8 text-3xl font-bold">
    📚 Syllabus
  </h2>

  <div className="space-y-5">

    {job.syllabus.map((item:any,index:number)=>(

      <details
        key={index}
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      >

        <summary className="cursor-pointer bg-slate-50 px-6 py-5 text-xl font-bold hover:bg-slate-100">

          📘 {item.subject}

        </summary>

        <div className="border-t px-6 py-5">

          <p className="leading-8 text-slate-700">

            {item.topics}

          </p>

        </div>

      </details>

    ))}

  </div>

</div>

)}
    {/* ================= DOCUMENTS REQUIRED ================= */}

{job.documents_required && job.documents_required.length > 0 && (

<div className="mt-14">

  <h2 className="mb-8 text-3xl font-bold">
    📄 Documents Required
  </h2>

  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

    {job.documents_required.map((item:any,index:number)=>(

      <div
        key={index}
        className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      >

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">

          ✅

        </div>

        <div>

          <h3 className="font-bold text-slate-900">

            {item.document}

          </h3>

          <p className="text-sm text-slate-500">

            Required during application / verification

          </p>

        </div>

      </div>

    ))}

  </div>

</div>

)}
    {/* 🔗 Important Links */}
    <div className="mt-8">

  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

    {job.apply_link && (

      <a
        href={job.apply_link}
        target="_blank"
        className="rounded-2xl bg-blue-600 p-5 text-center text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
      >

        <div className="text-3xl">
          🚀
        </div>

        <div className="mt-3 text-lg font-bold">
          Apply Online
        </div>

      </a>

    )}

    {job.notification_pdf && (

      <a
        href={job.notification_pdf}
        target="_blank"
        className="rounded-2xl bg-red-600 p-5 text-center text-white shadow-lg transition hover:-translate-y-1 hover:bg-red-700"
      >

        <div className="text-3xl">
          📄
        </div>

        <div className="mt-3 text-lg font-bold">
          Notification
        </div>

      </a>

    )}

    {job.official_website && (

      <a
        href={job.official_website}
        target="_blank"
        className="rounded-2xl bg-slate-700 p-5 text-center text-white shadow-lg transition hover:-translate-y-1 hover:bg-slate-900"
      >

        <div className="text-3xl">
          🌐
        </div>

        <div className="mt-3 text-lg font-bold">
          Official Website
        </div>

      </a>

    )}

    

  </div>

</div>
    {/* ❓ Frequently Asked Questions */}

{(autoFaq.length > 0 || (job.faq && job.faq.length > 0)) && (

  <div className="mt-12">

    <h2 className="text-2xl font-bold">
      ❓ Frequently Asked Questions
    </h2>

    <div className="mt-6 space-y-4">

      {autoFaq.map((item, index) => (

        <details
          key={`auto-${index}`}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >

          <summary className="cursor-pointer text-lg font-semibold text-slate-900">

            {item.question}

          </summary>

          <p className="mt-4 text-slate-700">

            {item.answer}

          </p>

        </details>

      ))}

      {job.faq?.map((item: any, index: number) => (

        <details
          key={`manual-${index}`}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >

          <summary className="cursor-pointer text-lg font-semibold text-slate-900">

            {item.question}

          </summary>

          <p className="mt-4 text-slate-700">

            {item.answer}

          </p>

        </details>

      ))}

    </div>

  </div>

)}
{/* ⭐ Related Jobs */}

{relatedJobs && relatedJobs.length > 0 && (

<div className="mt-16">

<h2 className="text-3xl font-bold">
⭐ Related Jobs
</h2>

<div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

{relatedJobs.map((item:any)=>(

<div
key={item.id}
className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
>

<h3 className="text-xl font-bold">

{item.title}

</h3>

<p className="mt-2 text-slate-600">

{item.post_name}

</p>

<p className="mt-3 text-sm text-slate-500">

Posts :
<strong>

{item.total_posts || "-"}

</strong>

</p>
<p className="mt-2 text-sm text-slate-500">
  Salary :
  <strong>{item.salary || "-"}</strong>
</p>

<p className="mt-2 text-sm text-slate-500">
  Location :
  <strong>{item.job_location || "All India"}</strong>
</p>
<div className="mt-4 inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-bold text-red-700">
  ⏰ Last Date :
  <span className="ml-2">
    {item.application_last_date
      ? new Date(item.application_last_date).toLocaleDateString("en-GB")
      : "-"}
  </span>
</div>
{item.featured && (
  <span className="mt-3 inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
    ⭐ Featured
  </span>
)}

<Link
href={`/jobs/${item.id}`}
className="mt-6 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
>

View Details →

</Link>

</div>

))}

</div>

</div>

)}
{/* ================= STICKY APPLY BAR ================= */}

<div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white/95 backdrop-blur">

  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

    <div>

      <p className="text-sm text-slate-500">
        Government Job
      </p>

      <h3 className="font-bold">
        {job.post_name}
      </h3>

    </div>

    <div className="flex gap-3">

      {job.notification_pdf && (

        <a
          href={job.notification_pdf}
          target="_blank"
          className="rounded-xl border border-red-500 px-5 py-3 font-semibold text-red-600 hover:bg-red-50"
        >
          Notification
        </a>

      )}

      {job.apply_link && (

        <a
          href={job.apply_link}
          target="_blank"
          className="rounded-xl bg-blue-600 px-7 py-3 font-bold text-white hover:bg-blue-700"
        >
          🚀 Apply Online
        </a>

      )}

    </div>

  </div>

</div>
  </div>


);
}
