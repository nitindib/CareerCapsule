import Link from "next/link";
import { notFound } from "next/navigation";

import AdminLayout from "@/components/admin/layout/AdminLayout";
import DetailCard from "@/components/admin/common/DetailCard";
import Field from "@/components/admin/common/Field";
import SectionGrid from "@/components/admin/common/SectionGrid";
import LinkButton from "@/components/admin/common/LinkButton";
import StatusBadge from "@/components/admin/jobs/StatusBadge";

import { getSyllabusById } from "@/services/syllabus";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ViewSyllabusPage({
  params,
}: Props) {
  const { id } = await params;

  const syllabus = await getSyllabusById(id);

  if (!syllabus) {
    notFound();
  }

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              📚 Syllabus Preview
            </h1>

            <p className="mt-2 text-slate-500">
              Complete Syllabus Details
            </p>

          </div>

          <div className="flex gap-3">

            <Link
              href="/admin/syllabus"
              className="rounded-xl bg-slate-700 px-6 py-3 text-white"
            >
              ← Back
            </Link>

            <Link
              href={`/admin/syllabus/${syllabus.id}`}
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
              value={syllabus.title}
            />

            <Field
              label="Organization"
              value={syllabus.organization}
            />

            <Field
              label="Exam Name"
              value={syllabus.exam_name}
            />

            <Field
              label="Post Name"
              value={syllabus.post_name}
            />

            <Field
              label="Syllabus Type"
              value={syllabus.syllabus_type}
            />

            <Field
              label="Views"
              value={syllabus.views}
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="⚙️ Status">

          <SectionGrid cols={3}>

            <Field
              label="Featured"
              value={
                syllabus.featured
                  ? "⭐ Featured"
                  : "☆ Normal"
              }
            />

            <div className="rounded-xl border bg-slate-50 p-4">

              <p className="text-sm text-slate-500">
                Status
              </p>

              <div className="mt-2">
                <StatusBadge status={syllabus.status} />
              </div>

            </div>

            <Field
              label="Syllabus ID"
              value={syllabus.id}
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="🔗 Important Links">

          <SectionGrid cols={3}>

            <Field
              label="Official Website"
              value={
                <LinkButton
                  href={syllabus.official_website}
                  text="Official Website"
                />
              }
            />

            <Field
              label="Download Syllabus"
              value={
                <LinkButton
                  href={syllabus.download_link}
                  text="Download"
                />
              }
            />

            <Field
              label="Notification PDF"
              value={
                <LinkButton
                  href={syllabus.notification_pdf}
                  text="Notification PDF"
                />
              }
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="📝 Description">

          <div className="rounded-xl border bg-slate-50 p-6 whitespace-pre-wrap">

            {syllabus.description || "-"}

          </div>

        </DetailCard>

        <DetailCard title="⏰ System Information">

          <SectionGrid cols={3}>

            <Field
              label="Created At"
              value={syllabus.created_at}
            />

            <Field
              label="Updated At"
              value={syllabus.updated_at}
            />

            <Field
              label="Record ID"
              value={syllabus.id}
            />

          </SectionGrid>

        </DetailCard>

      </div>
    </AdminLayout>
  );
}