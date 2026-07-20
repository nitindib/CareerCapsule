import Link from "next/link";
import { notFound } from "next/navigation";

import AdminLayout from "@/components/admin/layout/AdminLayout";
import DetailCard from "@/components/admin/common/DetailCard";
import Field from "@/components/admin/common/Field";
import SectionGrid from "@/components/admin/common/SectionGrid";
import LinkButton from "@/components/admin/common/LinkButton";
import StatusBadge from "@/components/admin/jobs/StatusBadge";
import { formatDate } from "@/lib/formatDate";

import { getGovernmentDocumentById } from "@/services/governmentDocuments";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ViewGovernmentDocumentPage({
  params,
}: Props) {
  const { id } = await params;

  const document = await getGovernmentDocumentById(id);

  if (!document) {
    notFound();
  }

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              📄 Government Document Preview
            </h1>

            <p className="mt-2 text-slate-500">
              Complete Government Document Details
            </p>

          </div>

          <div className="flex gap-3">

            <Link
              href="/admin/government-documents"
              className="rounded-xl bg-slate-700 px-6 py-3 text-white"
            >
              ← Back
            </Link>

            <Link
              href={`/admin/government-documents/${document.id}`}
              className="rounded-xl bg-blue-600 px-6 py-3 text-white"
            >
              Edit
            </Link>

          </div>

        </div>

        <DetailCard title="📌 Basic Information">

          <SectionGrid>

            <Field label="Title" value={document.title} />
            <Field label="Category" value={document.category} />
            <Field label="Required For" value={document.required_for} />
            <Field label="Views" value={document.views} />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="⚙️ Status">

          <SectionGrid cols={3}>

            <Field
              label="Featured"
              value={
                document.featured
                  ? "⭐ Featured"
                  : "☆ Normal"
              }
            />

            <div className="rounded-xl border bg-slate-50 p-4">

              <p className="text-sm text-slate-500">
                Status
              </p>

              <div className="mt-2">
                <StatusBadge status={document.status} />
              </div>

            </div>

            <Field label="Document ID" value={document.id} />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="📝 How to Apply">

          <div className="rounded-xl border bg-slate-50 p-6 whitespace-pre-wrap">
            {document.how_to_apply || "-"}
          </div>

        </DetailCard>

        <DetailCard title="🔗 Important Links">

          <SectionGrid cols={2}>

            <Field
              label="Official Website"
              value={
                <LinkButton
                  href={document.official_website}
                  text="Official Website"
                />
              }
            />

            <Field
              label="Download Form"
              value={
                <LinkButton
                  href={document.download_form}
                  text="Download Form"
                />
              }
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="📄 Description">

          <div className="rounded-xl border bg-slate-50 p-6 whitespace-pre-wrap">
            {document.description || "-"}
          </div>

        </DetailCard>

        <DetailCard title="🔍 SEO Information">

          <SectionGrid cols={2}>

            <Field label="SEO Title" value={document.seo_title} />

            <Field
              label="SEO Description"
              value={document.seo_description}
            />

          </SectionGrid>

        </DetailCard>

        <DetailCard title="⏰ System Information">

          <SectionGrid cols={3}>

            <Field
              label="Created At"
              value={formatDate(document.created_at)}
            />

            <Field
              label="Updated At"
              value={formatDate(document.updated_at)}
            />

            <Field label="Record ID" value={document.id} />

          </SectionGrid>

        </DetailCard>

      </div>
    </AdminLayout>
  );
}