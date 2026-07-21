import Link from "next/link";
import { notFound } from "next/navigation";

import AdminLayout from "@/components/admin/layout/AdminLayout";
import DetailCard from "@/components/admin/common/DetailCard";
import Field from "@/components/admin/common/Field";
import SectionGrid from "@/components/admin/common/SectionGrid";
import LinkButton from "@/components/admin/common/LinkButton";
import StatusBadge from "@/components/admin/jobs/StatusBadge";
import { formatDate } from "@/lib/formatDate";
import { getPreviousPaperById } from "@/services/previousPapers";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ViewPreviousPaperPage({
  params,
}: Props) {
  const { id } = await params;

  const paper = await getPreviousPaperById(id);

  if (!paper) {
    notFound();
  }

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              📄 Previous Paper Preview
            </h1>

            <p className="mt-2 text-slate-500">
              Complete Previous Paper Details
            </p>

          </div>

          <div className="flex gap-3">

            <Link
              href="/admin/previous-papers"
              className="rounded-xl bg-slate-700 px-6 py-3 text-white"
            >
              ← Back
            </Link>

            <Link
              href={`/admin/previous-papers/${paper.id}`}
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
              value={paper.title}
            />

            <Field
              label="Organization"
              value={paper.organization}
            />

            <Field
              label="Exam Name"
              value={paper.exam_name}
            />

            <Field
              label="Paper Year"
              value={paper.paper_year}
            />

            <Field
              label="Paper Type"
              value={paper.paper_type}
            />

            <Field
              label="Subject"
              value={paper.subject}
            />

            <Field
              label="Views"
              value={paper.views}
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="⚙️ Status">

          <SectionGrid cols={3}>

            <Field
              label="Featured"
              value={
                paper.featured
                  ? "⭐ Featured"
                  : "☆ Normal"
              }
            />

            <div className="rounded-xl border bg-slate-50 p-4">

              <p className="text-sm text-slate-500">
                Status
              </p>

              <div className="mt-2">
                <StatusBadge status={paper.status} />
              </div>

            </div>

            <Field
              label="Paper ID"
              value={paper.id}
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="🔗 Important Links">

          <SectionGrid cols={3}>

            <Field
              label="Official Website"
              value={
                <LinkButton
                  href={paper.official_website}
                  text="Official Website"
                />
              }
            />

            <Field
              label="Download Paper"
              value={
                <LinkButton
                  href={paper.download_link}
                  text="Download"
                />
              }
            />

            <Field
              label="Notification PDF"
              value={
                <LinkButton
                  href={paper.notification_pdf}
                  text="Notification PDF"
                />
              }
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="📝 Description">

          <div className="rounded-xl border bg-slate-50 p-6 whitespace-pre-wrap">

            {paper.description || "-"}

          </div>

        </DetailCard>

        <DetailCard title="⏰ System Information">

          <SectionGrid cols={3}>

            <Field
  label="Created At"
  value={formatDate(paper.created_at)}
/>

<Field
  label="Updated At"
  value={formatDate(paper.updated_at)}
/>

            <Field
              label="Record ID"
              value={paper.id}
            />

          </SectionGrid>

        </DetailCard>

      </div>
    </AdminLayout>
  );
}