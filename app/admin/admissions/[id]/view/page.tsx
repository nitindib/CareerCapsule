import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/formatDate";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import DetailCard from "@/components/admin/common/DetailCard";
import Field from "@/components/admin/common/Field";
import SectionGrid from "@/components/admin/common/SectionGrid";
import LinkButton from "@/components/admin/common/LinkButton";
import StatusBadge from "@/components/admin/jobs/StatusBadge";

import { getAdmissionById } from "@/services/admissions";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ViewAdmissionPage({
  params,
}: Props) {
  const { id } = await params;

  const admission = await getAdmissionById(id);

  if (!admission) {
    notFound();
  }

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              🎓 Admission Preview
            </h1>

            <p className="mt-2 text-slate-500">
              Complete Admission Details
            </p>

          </div>

          <div className="flex gap-3">

            <Link
              href="/admin/admissions"
              className="rounded-xl bg-slate-700 px-6 py-3 text-white"
            >
              ← Back
            </Link>

            <Link
              href={`/admin/admissions/${admission.id}`}
              className="rounded-xl bg-blue-600 px-6 py-3 text-white"
            >
              Edit
            </Link>

          </div>

        </div>

        <DetailCard title="📌 Basic Information">

          <SectionGrid>

            <Field
              label="Title"
              value={admission.title}
            />

            <Field
              label="Organization"
              value={admission.organization}
            />

            <Field
              label="Course Name"
              value={admission.course_name}
            />

            <Field
              label="Admission Year"
              value={admission.admission_year}
            />

            <Field
              label="Views"
              value={admission.views}
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="📅 Important Dates">

  <SectionGrid cols={2}>

    <Field
      label="Application Start Date"
      value={formatDate(admission.application_start_date)}
    />

    <Field
      label="Application Last Date"
      value={formatDate(admission.application_last_date)}
    />

    <Field
      label="Exam Date"
      value={formatDate(admission.exam_date)}
    />

    <Field
      label="Result Date"
      value={formatDate(admission.result_date)}
    />



          </SectionGrid>

        </DetailCard>

        <DetailCard title="⚙️ Status">

          <SectionGrid cols={3}>

            <Field
              label="Featured"
              value={
                admission.featured
                  ? "⭐ Featured"
                  : "☆ Normal"
              }
            />

            <div className="rounded-xl border bg-slate-50 p-4">

              <p className="text-sm text-slate-500">
                Status
              </p>

              <div className="mt-2">
                <StatusBadge status={admission.status} />
              </div>

            </div>

            <Field
              label="Admission ID"
              value={admission.id}
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="🎯 Eligibility">

          <div className="rounded-xl border bg-slate-50 p-6 whitespace-pre-wrap">

            {admission.eligibility || "-"}

          </div>

        </DetailCard>

        <DetailCard title="🔗 Important Links">

          <SectionGrid cols={3}>

            <Field
              label="Apply Link"
              value={
                <LinkButton
                  href={admission.apply_link}
                  text="Apply Now"
                />
              }
            />

            <Field
              label="Official Website"
              value={
                <LinkButton
                  href={admission.official_website}
                  text="Official Website"
                />
              }
            />

            <Field
              label="Notification PDF"
              value={
                <LinkButton
                  href={admission.notification_pdf}
                  text="Notification PDF"
                />
              }
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="📝 Description">

          <div className="rounded-xl border bg-slate-50 p-6 whitespace-pre-wrap">

            {admission.description || "-"}

          </div>

        </DetailCard>

        <DetailCard title="⏰ System Information">

          <SectionGrid cols={3}>

           <Field
  label="Created At"
  value={formatDate(admission.created_at)}
/>

<Field
  label="Updated At"
  value={formatDate(admission.updated_at)}
/>

            <Field
              label="Record ID"
              value={admission.id}
            />

          </SectionGrid>

        </DetailCard>

      </div>
    </AdminLayout>
  );
}