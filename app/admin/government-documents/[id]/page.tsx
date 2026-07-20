import AdminLayout from "@/components/admin/layout/AdminLayout";
import GovernmentDocumentForm from "@/components/admin/government-documents/GovernmentDocumentForm";
import { getGovernmentDocumentById } from "@/services/governmentDocuments";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditGovernmentDocumentPage({
  params,
}: Props) {
  const { id } = await params;

  const document = await getGovernmentDocumentById(id);

  if (!document) {
    notFound();
  }

  return (
    <AdminLayout>
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            ✏️ Edit Government Document
          </h1>

          <p className="mt-2 text-slate-600">
            Update the government document details.
          </p>

        </div>

        <GovernmentDocumentForm initialData={document} />

      </div>
    </AdminLayout>
  );
}