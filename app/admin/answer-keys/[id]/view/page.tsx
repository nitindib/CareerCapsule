import Link from "next/link";
import { notFound } from "next/navigation";

import AdminLayout from "@/components/admin/layout/AdminLayout";

import DetailCard from "@/components/admin/common/DetailCard";
import Field from "@/components/admin/common/Field";
import SectionGrid from "@/components/admin/common/SectionGrid";
import LinkButton from "@/components/admin/common/LinkButton";
import { formatDate } from "@/lib/formatDate";
import StatusBadge from "@/components/admin/jobs/StatusBadge";

import { getAnswerKeyById } from "@/services/answerKeys";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ViewAnswerKeyPage({
  params,
}: Props) {

  const { id } = await params;

  const answerKey = await getAnswerKeyById(id);

  if (!answerKey) {
    notFound();
  }

  return (

    <AdminLayout>

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              📝 Answer Key Preview
            </h1>

            <p className="mt-2 text-slate-500">
              Complete Answer Key Details
            </p>

          </div>

          <div className="flex gap-3">

            <Link
              href="/admin/answer-keys"
              className="rounded-xl bg-slate-700 px-6 py-3 text-white"
            >
              ← Back
            </Link>

            <Link
              href={`/admin/answer-keys/${answerKey.id}`}
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
              value={answerKey.title}
            />

            <Field
              label="Organization"
              value={answerKey.organization}
            />

            <Field
              label="Exam Name"
              value={answerKey.exam_name}
            />

            <Field
              label="Post Name"
              value={answerKey.post_name}
            />

            <Field
              label="Description"
              value={answerKey.description}
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="📅 Important Dates">

          <SectionGrid>

            <Field
  label="Release Date"
  value={formatDate(answerKey.release_date)}
/>

<Field
  label="Objection Last Date"
  value={formatDate(answerKey.objection_last_date)}
/>

          </SectionGrid>

        </DetailCard>

        <DetailCard title="⚙️ Status">

          <SectionGrid cols={4}>

            <Field
              label="Featured"
              value={
                answerKey.featured
                  ? "⭐ Featured"
                  : "☆ Normal"
              }
            />

            <div className="rounded-xl border bg-slate-50 p-4">

              <p className="text-sm text-slate-500">
                Status
              </p>

              <div className="mt-2">
                <StatusBadge status={answerKey.status} />
              </div>

            </div>

            <Field
              label="Views"
              value={answerKey.views}
            />

            <Field
              label="Answer Key ID"
              value={answerKey.id}
            />

          </SectionGrid>

        </DetailCard>
                <DetailCard title="🔗 Important Links">

          <SectionGrid cols={3}>

            <Field
              label="Official Website"
              value={
                <LinkButton
                  href={answerKey.official_website}
                  text="Official Website"
                />
              }
            />

            <Field
              label="Download Answer Key"
              value={
                <LinkButton
                  href={answerKey.download_link}
                  text="Download"
                />
              }
            />

            <Field
              label="Notification PDF"
              value={
                <LinkButton
                  href={answerKey.notification_pdf}
                  text="Notification PDF"
                />
              }
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="📝 Full Description">

          <div className="rounded-xl border bg-slate-50 p-6 whitespace-pre-wrap">

            {answerKey.description || "-"}

          </div>

        </DetailCard>

        <DetailCard title="⏰ System Information">

          <SectionGrid cols={3}>

            <Field
  label="Created At"
  value={formatDate(answerKey.created_at)}
/>

<Field
  label="Updated At"
  value={formatDate(answerKey.updated_at)}
/>

            <Field
              label="Record ID"
              value={answerKey.id}
            />

          </SectionGrid>

        </DetailCard>

      </div>

    </AdminLayout>

  );
}