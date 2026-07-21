import Link from "next/link";
import { notFound } from "next/navigation";

import AdminLayout from "@/components/admin/layout/AdminLayout";

import DetailCard from "@/components/admin/common/DetailCard";
import Field from "@/components/admin/common/Field";
import SectionGrid from "@/components/admin/common/SectionGrid";
import LinkButton from "@/components/admin/common/LinkButton";
import { formatDate } from "@/lib/formatDate";
import StatusBadge from "@/components/admin/jobs/StatusBadge";

import { getAdmitCardById } from "@/services/admitCards";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ViewAdmitCardPage({
  params,
}: Props) {
  const { id } = await params;

  const admitCard = await getAdmitCardById(id);

  if (!admitCard) {
    notFound();
  }

  return (
    <AdminLayout>

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              🎫 Admit Card Preview
            </h1>

            <p className="mt-2 text-slate-500">
              Complete Admit Card Details
            </p>

          </div>

          <div className="flex gap-3">

            <Link
              href="/admin/admit-cards"
              className="rounded-xl bg-slate-700 px-6 py-3 text-white"
            >
              ← Back
            </Link>

            <Link
              href={`/admin/admit-cards/${admitCard.id}`}
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
              value={admitCard.title}
            />

            <Field
              label="Organization"
              value={admitCard.organization}
            />

            <Field
              label="Exam Name"
              value={admitCard.exam_name}
            />

            

            <Field
              label="Description"
              value={admitCard.description}
            />

            

          </SectionGrid>

        </DetailCard>

        <DetailCard title="📅 Important Dates">

          <SectionGrid>

            <Field
  label="Release Date"
  value={formatDate(admitCard.release_date)}
/>

<Field
  label="Admit Card Date"
  value={formatDate(admitCard.admit_card_date)}
/>

<Field
  label="Exam Date"
  value={formatDate(admitCard.exam_date)}
/>

          </SectionGrid>

        </DetailCard>

        <DetailCard title="⚙️ Status">

          <SectionGrid cols={3}>

            <Field
              label="Featured"
              value={
                admitCard.featured
                  ? "⭐ Featured"
                  : "☆ Normal"
              }
            />

            <div className="rounded-xl border bg-slate-50 p-4">

              <p className="text-sm text-slate-500">
                Status
              </p>

              <div className="mt-2">
                <StatusBadge status={admitCard.status} />
              </div>

            </div>

            <Field
              label="ID"
              value={admitCard.id}
            />

          </SectionGrid>

        </DetailCard>
                <DetailCard title="🔗 Important Links">

          <SectionGrid>

            <Field
              label="Official Website"
              value={
                <LinkButton
                  href={admitCard.official_website}
                  text="Official Website"
                />
              }
            />

            <Field
              label="Download Admit Card"
              value={
                <LinkButton
                  href={admitCard.download_link}
                  text="Download"
                />
              }
            />

            <Field
              label="Notification PDF"
              value={
                <LinkButton
                  href={admitCard.notification_pdf}
                  text="Notification PDF"
                />
              }
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="📝 Description">

          <div className="rounded-xl border bg-slate-50 p-5 whitespace-pre-wrap">

            {admitCard.description || "-"}

          </div>

        </DetailCard>
                <DetailCard title="⏰ System Information">

          <SectionGrid cols={2}>

            <Field
  label="Created At"
  value={formatDate(admitCard.created_at)}
/>

            <Field
              label="Record ID"
              value={admitCard.id}
            />

          </SectionGrid>

        </DetailCard>

      </div>

    </AdminLayout>
  );
}