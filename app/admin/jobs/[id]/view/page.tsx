import Link from "next/link";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import StatusBadge from "@/components/admin/jobs/StatusBadge";
import { getJobById } from "@/services/jobs";
import { formatDate } from "@/lib/formatDate";

import DetailCard from "@/components/admin/common/DetailCard";
import Field from "@/components/admin/common/Field";
import SectionGrid from "@/components/admin/common/SectionGrid";
import LinkButton from "@/components/admin/common/LinkButton";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobPreviewPage({
  params,
}: Props) {
  const { id } = await params;

  const job = await getJobById(id);

  if (!job) {
    return (
      <AdminLayout>
        <div className="mx-auto max-w-6xl rounded-3xl bg-white p-10 shadow-xl">
          <h1 className="text-4xl font-bold">
            Job Not Found
          </h1>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              👁 Job Preview
            </h1>

            <p className="mt-2 text-slate-500">
              Complete Job Details
            </p>

          </div>

          <div className="flex gap-3">

            <Link
              href="/admin/jobs"
              className="rounded-xl bg-slate-700 px-6 py-3 text-white"
            >
              ← Back
            </Link>

            <Link
              href={`/admin/jobs/${job.id}`}
              className="rounded-xl bg-blue-600 px-6 py-3 text-white"
            >
              Edit
            </Link>

          </div>

        </div>
                <DetailCard title="📌 Basic Information">

          <SectionGrid>

            <Field
              label="Job Title"
              value={job.title}
            />

            <Field
              label="Organization"
              value={job.organization}
            />

            <Field
              label="Post Name"
              value={job.post_name}
            />

            <Field
              label="Category"
              value={job.category}
            />

            <Field
              label="Qualification"
              value={job.qualification}
            />

            <Field
              label="Vacancy"
              value={job.vacancy}
            />

            <Field
              label="Total Posts"
              value={job.total_posts}
            />

            <Field
              label="Salary"
              value={job.salary}
            />

            <Field
              label="Job Location"
              value={job.job_location}
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="📅 Important Dates">

  <SectionGrid>

    <Field
      label="Application Start Date"
      value={formatDate(job.application_start_date)}
    />

    <Field
      label="Application Last Date"
      value={formatDate(job.application_last_date)}
    />

    <Field
      label="Fee Payment Last Date"
      value={formatDate(job.fee_payment_last_date)}
    />

    <Field
      label="Correction Last Date"
      value={formatDate(job.correction_last_date)}
    />

    <Field
      label="Exam Date"
      value={formatDate(job.exam_date)}
    />

    <Field
      label="Admit Card Date"
      value={formatDate(job.admit_card_date)}
    />

    <Field
      label="Result Date"
      value={formatDate(job.result_date)}
    />

    <Field
      label="Important Dates"
      value={job.important_dates}
    />

  </SectionGrid>

</DetailCard>
                <DetailCard title="💰 Eligibility & Fees">

          <SectionGrid>

            <Field
              label="Age Limit"
              value={job.age_limit}
            />

            <Field
              label="Age Relaxation"
              value={job.age_relaxation}
            />

            <Field
              label="Application Fee"
              value={job.application_fee}
            />

            <Field
              label="Apply Mode"
              value={job.apply_mode}
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="📍 Job Details">

          <SectionGrid cols={4}>

            <Field
              label="Featured"
              value={
                job.featured
                  ? "⭐ Featured"
                  : "☆ Normal"
              }
            />

            <div className="rounded-xl border bg-slate-50 p-4">

              <p className="text-sm text-slate-500">
                Status
              </p>

              <div className="mt-2">
                <StatusBadge status={job.status} />
              </div>

            </div>

            <Field
              label="Views"
              value={job.views}
            />

            <Field
              label="Job ID"
              value={job.id}
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="🔗 Important Links">

          <SectionGrid>

            <Field
              label="Official Website"
              value={
                <LinkButton
                  href={job.official_website}
                  text="Official Website"
                />
              }
            />

            <Field
              label="Apply Link"
              value={
                <LinkButton
                  href={job.apply_link}
                  text="Apply Now"
                />
              }
            />

            <Field
              label="Notification PDF"
              value={
                <LinkButton
                  href={job.notification_pdf}
                  text="Download PDF"
                />
              }
            />

          </SectionGrid>

        </DetailCard>
                <DetailCard title="📝 Description">

          <div className="space-y-6">

            <div>

              <h3 className="mb-2 text-lg font-semibold">
                Short Description
              </h3>

              <div className="rounded-xl border bg-slate-50 p-5 whitespace-pre-wrap">
                {job.short_description || "-"}
              </div>

            </div>

            <div>

              <h3 className="mb-2 text-lg font-semibold">
                Full Description
              </h3>

              <div className="rounded-xl border bg-slate-50 p-5 whitespace-pre-wrap">
                {job.description || "-"}
              </div>

            </div>

          </div>

        </DetailCard>

        <DetailCard title="⚙️ Selection Process">

          <div className="rounded-xl border bg-slate-50 p-5 whitespace-pre-wrap">
            {job.selection_process || "-"}
          </div>

        </DetailCard>

        <DetailCard title="📄 Documents Required">

          <div className="rounded-xl border bg-slate-50 p-5 whitespace-pre-wrap">
            {job.documents_required || "-"}
          </div>

        </DetailCard>

        <DetailCard title="📖 How To Apply">

          <div className="rounded-xl border bg-slate-50 p-5 whitespace-pre-wrap">
            {job.how_to_apply || "-"}
          </div>

        </DetailCard>

        <DetailCard title="🏷 SEO Information">

          <SectionGrid cols={2}>

            <Field
              label="SEO Title"
              value={job.seo_title}
            />

            <Field
              label="SEO Description"
              value={job.seo_description}
            />

            <Field
              label="Tags"
              value={job.tags}
            />

          </SectionGrid>

        </DetailCard>
                <DetailCard title="⏰ System Information">

          <SectionGrid cols={3}>

            <Field
  label="Created At"
  value={formatDate(job.created_at)}
/>

<Field
  label="Updated At"
  value={formatDate(job.updated_at)}
/>
            <Field
              label="Last Status"
              value={job.status}
            />

          </SectionGrid>

        </DetailCard>

      </div>

    </AdminLayout>
  );
}