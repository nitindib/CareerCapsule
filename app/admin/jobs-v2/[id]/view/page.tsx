import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

import AdminLayout from "@/components/admin/layout/AdminLayout";
import DetailCard from "@/components/admin/common/DetailCard";
import Field from "@/components/admin/common/Field";
import SectionGrid from "@/components/admin/common/SectionGrid";

export default async function ViewJobV2Page({
params,
}: {
params: Promise<{ id: string }>;
}) {
const { id } = await params;

const { data: job } = await supabase
.from("jobs_v2")
.select("*")
.eq("id", id)
.single();

if (!job) {
notFound();
}

return ( <AdminLayout> <div className="mx-auto max-w-7xl"> <div className="mb-8 flex items-center justify-between"> <div> <h1 className="text-4xl font-bold">
👁 Job V2 Preview </h1> <p className="mt-2 text-slate-500">
Complete Job Details </p> </div>

```
      <div className="flex gap-3">
        <Link
          href="/admin/jobs-v2"
          className="rounded-xl bg-slate-700 px-6 py-3 text-white"
        >
          ← Back
        </Link>

        <Link
          href={`/admin/jobs-v2/${job.id}`}
          className="rounded-xl bg-blue-600 px-6 py-3 text-white"
        >
          Edit
        </Link>
      </div>
    </div>

    <DetailCard title="📌 Basic Information">
      <SectionGrid>
        <Field label="Job Title" value={job.title} />
        <Field label="Post Name" value={job.post_name} />
        <Field label="Total Posts" value={job.total_posts} />
        <Field label="Salary" value={job.salary} />
        <Field label="Job Location" value={job.job_location} />
      </SectionGrid>

      <div className="mt-6">
        <h3 className="mb-2 text-lg font-semibold">
          Short Description
        </h3>
        <div className="rounded-xl border bg-slate-50 p-5 whitespace-pre-wrap">
          {job.short_description || "-"}
        </div>
      </div>
    </DetailCard>

    <DetailCard title="📅 Important Dates">
      <SectionGrid cols={2}>
        <Field
          label="Application Start Date"
          value={job.important_dates?.application_start_date}
        />
        <Field
          label="Application Last Date"
          value={job.important_dates?.application_last_date}
        />
        <Field
          label="Fee Payment Last Date"
          value={job.important_dates?.fee_payment_last_date}
        />
        <Field
          label="Correction Last Date"
          value={job.important_dates?.correction_last_date}
        />
        <Field
          label="Exam Date"
          value={job.important_dates?.exam_date}
        />
        <Field
          label="Admit Card Date"
          value={job.important_dates?.admit_card_date}
        />
        <Field
          label="Result Date"
          value={job.important_dates?.result_date}
        />
      </SectionGrid>
    </DetailCard>

    <DetailCard title="📊 Vacancy Details">
      <div className="overflow-hidden rounded-xl border">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left font-semibold">Category</th>
              <th className="p-3 text-left font-semibold">Posts</th>
            </tr>
          </thead>
          <tbody>
            {job.vacancy_details?.map((item: any, index: number) => (
              <tr key={index} className="border-t">
                <td className="p-3">{item.category}</td>
                <td className="p-3 font-semibold">{item.posts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DetailCard>

    <DetailCard title="💰 Application Fee">
      <div className="overflow-hidden rounded-xl border">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left font-semibold">Category</th>
              <th className="p-3 text-left font-semibold">Fee</th>
            </tr>
          </thead>
          <tbody>
            {job.application_fee?.map((item: any, index: number) => (
              <tr key={index} className="border-t">
                <td className="p-3">{item.category}</td>
                <td className="p-3 font-semibold">₹{item.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DetailCard>

    <DetailCard title="🎯 Age Limit">
      <SectionGrid cols={2}>
        <Field label="Minimum Age" value={`${job.age_limit?.min_age || "-"} Years`} />
        <Field label="Maximum Age" value={`${job.age_limit?.max_age || "-"} Years`} />
      </SectionGrid>
    </DetailCard>

    <DetailCard title="🎓 Qualification">
      <div className="overflow-hidden rounded-xl border">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left font-semibold">Type</th>
              <th className="p-3 text-left font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            {job.qualification?.map((item: any, index: number) => (
              <tr key={index} className="border-t">
                <td className="p-3 font-semibold">{item.type}</td>
                <td className="p-3">{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DetailCard>

    <DetailCard title="⚙ Selection Process">
      <div className="rounded-xl border bg-slate-50 p-5">
        <ul className="list-disc space-y-2 pl-5">
          {job.selection_process?.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </DetailCard>

    <DetailCard title="📝 Exam Pattern">
      <div className="overflow-hidden rounded-xl border">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left font-semibold">Subject</th>
              <th className="p-3 text-left font-semibold">Questions</th>
              <th className="p-3 text-left font-semibold">Marks</th>
            </tr>
          </thead>
          <tbody>
            {job.exam_pattern?.map((item: any, index: number) => (
              <tr key={index} className="border-t">
                <td className="p-3">{item.subject}</td>
                <td className="p-3">{item.questions}</td>
                <td className="p-3 font-semibold">{item.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DetailCard>

    <DetailCard title="📚 Syllabus">
      <div className="space-y-4">
        {job.syllabus?.map((item: any, index: number) => (
          <div key={index} className="rounded-xl border bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-blue-700">
              {item.subject}
            </h3>
            <p className="mt-2 whitespace-pre-wrap">
              {item.topics}
            </p>
          </div>
        ))}
      </div>
    </DetailCard>

    <DetailCard title="📄 Documents Required">
      <div className="rounded-xl border bg-slate-50 p-5">
        <ul className="list-disc space-y-2 pl-5">
          {job.documents_required?.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </DetailCard>

    <DetailCard title="❓ FAQ">
      <div className="space-y-4">
        {job.faq?.length ? (
          job.faq.map((item: any, index: number) => (
            <div key={index} className="rounded-xl border bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">
                Q. {item.question}
              </h3>
              <p className="mt-2 text-slate-700">
                {item.answer}
              </p>
            </div>
          ))
        ) : (
          <p className="text-slate-500">No FAQ available.</p>
        )}
      </div>
    </DetailCard>

    <DetailCard title="🔗 Important Links">
      <SectionGrid cols={2}>
        <Field label="Apply Link" value={job.apply_link} />
        <Field label="Official Website" value={job.official_website} />
        <Field label="Notification PDF" value={job.notification_pdf} />
        <Field label="Syllabus PDF" value={job.syllabus_pdf} />
        <Field label="Result Link" value={job.result_link} />
      </SectionGrid>
    </DetailCard>

    <DetailCard title="🔍 SEO Information">
      <SectionGrid cols={2}>
        <Field label="SEO Title" value={job.seo_title} />
        <Field label="SEO Description" value={job.seo_description} />
        <Field label="SEO Keywords" value={job.seo_keywords} />
        <Field label="Slug" value={job.slug} />
      </SectionGrid>
    </DetailCard>
  </div>
</AdminLayout>

);
}
