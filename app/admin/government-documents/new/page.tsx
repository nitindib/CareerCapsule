import AdminLayout from "@/components/admin/layout/AdminLayout";
import GovernmentDocumentForm from "@/components/admin/government-documents/GovernmentDocumentForm";

export default function NewGovernmentDocumentPage() {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            📄 Add New Government Document
          </h1>

          <p className="mt-2 text-slate-600">
            Create a new government document entry for your website.
          </p>

        </div>

        <GovernmentDocumentForm />

      </div>
    </AdminLayout>
  );
}