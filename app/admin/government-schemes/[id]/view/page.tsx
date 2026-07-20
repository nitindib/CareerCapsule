import Link from "next/link";
import { notFound } from "next/navigation";

import AdminLayout from "@/components/admin/layout/AdminLayout";
import DetailCard from "@/components/admin/common/DetailCard";
import Field from "@/components/admin/common/Field";
import SectionGrid from "@/components/admin/common/SectionGrid";
import LinkButton from "@/components/admin/common/LinkButton";
import StatusBadge from "@/components/admin/jobs/StatusBadge";
import { formatDate } from "@/lib/formatDate";

import { getGovernmentSchemeById } from "@/services/governmentSchemes";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ViewGovernmentSchemePage({
  params,
}: Props) {
  const { id } = await params;

  const scheme = await getGovernmentSchemeById(id);

  if (!scheme) {
    notFound();
  }

  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              🏛 Government Scheme Preview
            </h1>
            <p className="mt-2 text-slate-500">
              Complete Government Scheme Details
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/admin/government-schemes"
              className="rounded-xl bg-slate-700 px-6 py-3 text-white"
            >
              ← Back
            </Link>

            <Link
              href={`/admin/government-schemes/${scheme.id}`}
              className="rounded-xl bg-blue-600 px-6 py-3 text-white"
            >
              Edit
            </Link>
          </div>
        </div>

        <DetailCard title="📌 Basic Information">
          <SectionGrid>
            <Field label="Title" value={scheme.title} />
            <Field label="Scheme Name" value={scheme.scheme_name} />
            <Field label="Ministry" value={scheme.ministry} />
            <Field label="Scheme Type" value={scheme.scheme_type} />
            <Field label="Category" value={scheme.category} />
            <Field label="Views" value={scheme.views} />
          </SectionGrid>
        </DetailCard>

        <DetailCard title="👥 Beneficiary Information">
          <SectionGrid cols={2}>
            <Field label="Beneficiaries" value={scheme.beneficiaries} />
            <Field label="Apply Mode" value={scheme.apply_mode} />
          </SectionGrid>
        </DetailCard>

        <DetailCard title="📅 Important Dates">
          <SectionGrid cols={2}>
            <Field
              label="Launch Date"
              value={formatDate(scheme.launch_date)}
            />
            <Field
              label="Last Date"
              value={formatDate(scheme.last_date)}
            />
          </SectionGrid>
        </DetailCard>

        <DetailCard title="⚙️ Status">
          <SectionGrid cols={3}>
            <Field
              label="Featured"
              value={
                scheme.featured
                  ? "⭐ Featured"
                  : "☆ Normal"
              }
            />

            <div className="rounded-xl border bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Status</p>
              <div className="mt-2">
                <StatusBadge status={scheme.status} />
              </div>
            </div>

            <Field label="Scheme ID" value={scheme.id} />
          </SectionGrid>
        </DetailCard>

        <DetailCard title="🎯 Eligibility">
          <div className="rounded-xl border bg-slate-50 p-6 whitespace-pre-wrap">
            {scheme.eligibility || "-"}
          </div>
        </DetailCard>

        <DetailCard title="💰 Benefits">
          <div className="rounded-xl border bg-slate-50 p-6 whitespace-pre-wrap">
            {scheme.benefits || "-"}
          </div>
        </DetailCard>

        <DetailCard title="📄 Required Documents">
          <div className="rounded-xl border bg-slate-50 p-6 whitespace-pre-wrap">
            {scheme.required_documents || "-"}
          </div>
        </DetailCard>

        <DetailCard title="🔗 Important Links">
          <SectionGrid cols={3}>
            <Field
              label="Official Website"
              value={
                <LinkButton
                  href={scheme.official_website}
                  text="Official Website"
                />
              }
            />

            <Field
              label="Apply Link"
              value={
                <LinkButton
                  href={scheme.apply_link}
                  text="Apply Now"
                />
              }
            />

            <Field
              label="Notification PDF"
              value={
                <LinkButton
                  href={scheme.notification_pdf}
                  text="Notification PDF"
                />
              }
            />
          </SectionGrid>
        </DetailCard>

        <DetailCard title="📝 Description">
          <div className="rounded-xl border bg-slate-50 p-6 whitespace-pre-wrap">
            {scheme.description || "-"}
          </div>
        </DetailCard>

        <DetailCard title="🔍 SEO Information">
          <SectionGrid cols={2}>
            <Field label="SEO Title" value={scheme.seo_title} />
            <Field
              label="SEO Description"
              value={scheme.seo_description}
            />
          </SectionGrid>
        </DetailCard>

        <DetailCard title="⏰ System Information">
          <SectionGrid cols={3}>
            <Field
              label="Created At"
              value={formatDate(scheme.created_at)}
            />
            <Field
              label="Updated At"
              value={formatDate(scheme.updated_at)}
            />
            <Field label="Record ID" value={scheme.id} />
          </SectionGrid>
        </DetailCard>
      </div>
    </AdminLayout>
  );
}